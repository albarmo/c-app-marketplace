"use client";

import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, Marker, Autocomplete } from "@react-google-maps/api";
import { motion, AnimatePresence } from "framer-motion";
import CE_LoadingSpinner from "@/shared/ui/interface/modal/client.loading.spinner";
import { useGoogleMapsScript } from "@/shared/hooks/useGoogleMapsScript";
import { FaCompass } from "react-icons/fa";
import { getAddressFromCoordinates } from "@/api/services/maps/api.get.pinmap";

interface PinMapProps {
  onSelectLocation: (lat: number, lng: number, address: string) => void;
  onClose: () => void;
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

export default function PinMap({ onSelectLocation, onClose }: PinMapProps) {
  const isScriptLoaded = useGoogleMapsScript();
  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [address, setAddress] = useState("Memuat lokasi...");
  const [addressStatus, setAddressStatus] = useState<"loading" | "success" | "error">("loading");
  const mapRef = useRef<google.maps.Map | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const mapClickHandler = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      updateLocation(event.latLng.lat(), event.latLng.lng());
    }
  };

  useEffect(() => {
    if (isScriptLoaded) {
      getCurrentLocation();
    }
  }, [isScriptLoaded]);

  const getCurrentLocation = () => {
    const cachedLocation = localStorage.getItem("lastKnownLocation");
    if (cachedLocation) {
      const { lat, lng } = JSON.parse(cachedLocation);
      updateLocation(lat, lng);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          updateLocation(lat, lng);
          localStorage.setItem("lastKnownLocation", JSON.stringify({ lat, lng }));
        },
        () => {
          setAddress("Gagal mendapatkan lokasi. Izinkan akses lokasi di browser Anda.");
          setAddressStatus("error");
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    }
  };

  const updateLocation = async (lat: number, lng: number) => {
    setMarkerPosition({ lat, lng });
    if (mapRef.current) {
      smoothPanTo(mapRef.current, { lat, lng }, 1000);
    }

    const fetchedAddress = await getAddressFromCoordinates(lat, lng);
    setAddress(fetchedAddress);
    setAddressStatus(fetchedAddress === "Gagal mengambil alamat" ? "error" : "success");
  };

  const smoothPanTo = (
    map: google.maps.Map,
    targetLatLng: google.maps.LatLngLiteral,
    duration: number = 250
  ) => {
    const start = map.getCenter()!;
    const end = new google.maps.LatLng(targetLatLng.lat, targetLatLng.lng);
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const lat = start.lat() + (end.lat() - start.lat()) * progress;
      const lng = start.lng() + (end.lng() - start.lng()) * progress;

      map.setCenter({ lat, lng });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.geometry?.location) {
      updateLocation(place.geometry.location.lat(), place.geometry.location.lng());
    }
  };

  const handleMapDragEnd = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      if (center) {
        updateLocation(center.lat(), center.lng());
      }
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = mapRef.current;
      mapInstance.addListener("click", mapClickHandler);
      mapInstance.addListener("dragend", handleMapDragEnd);
    }

    return () => {
      if (mapRef.current) {
        google.maps.event.clearListeners(mapRef.current, "click");
        google.maps.event.clearListeners(mapRef.current, "dragend");
      }
    };
  }, [mapRef.current]);

  if (!isScriptLoaded) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <CE_LoadingSpinner /> {/* Mengganti <Loading /> dengan spinner */}
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg p-4 w-11/12 md:w-3/4 lg:w-1/2 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-2 right-2 text-xl" onClick={onClose} type="button">
            ×
          </button>

          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Cari lokasi..."
              className="w-full p-2 rounded-lg border shadow-md mb-2"
            />
          </Autocomplete>

          {markerPosition && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={markerPosition}
                zoom={15}
                options={{ disableDefaultUI: true, zoomControl: true, fullscreenControl: true }}
                onClick={mapClickHandler}
                onLoad={(map) => {
                  mapRef.current = map;
                  smoothPanTo(map, markerPosition, 1000);
                }}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Marker
                    position={markerPosition}
                    key={`${markerPosition.lat}-${markerPosition.lng}`}
                  />
                </motion.div>
                <button
                  className="absolute top-20 right-3 bg-white p-2 rounded-full shadow-lg"
                  onClick={getCurrentLocation}
                  type="button"
                >
                  <FaCompass className="text-xl text-gray-600" />
                </button>
              </GoogleMap>
            </motion.div>
          )}

          <div className="mt-2 text-center">
            <p>{addressStatus === "error" ? "Alamat tidak ditemukan" : address}</p>
            <button
              className={`w-full py-2 rounded text-white ${addressStatus === "success" ? "bg-primary" : "bg-gray-300 cursor-not-allowed"
                }`}
              onClick={() => {
                if (markerPosition) {
                  onSelectLocation(markerPosition.lat, markerPosition.lng, address);
                }
              }}
              disabled={!markerPosition}
              type="button"
            >
              Pilih Lokasi Ini
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}