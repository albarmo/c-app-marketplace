import { useState } from "react";
import { SVG_ErrorLocation } from "@/shared/svg/svg.error.location";
import PinMap from "@/shared/ui/components/address/pin-map";

interface LocationPinProps {
    register: any;
    watch: any;
    setValue: any;
}

export default function LocationPin({ register, watch, setValue }: LocationPinProps) {
    const [showMap, setShowMap] = useState(false);

    const handleLocationSelect = (lat: number, lng: number, address: string) => {
        setValue("detailAddress", address, { shouldValidate: true });
        setValue("latitude", lat.toString(), { shouldValidate: true });
        setValue("longitude", lng.toString(), { shouldValidate: true });
        setShowMap(false);
    };

    return (
        <div>
            <label className="block text-center text-base font-medium mb-1">
                Pin Pada Map (Latitude & Longitude)
            </label>
            <button
                type="button"
                onClick={() => setShowMap(true)}
                className="w-full py-2 bg-primary text-white rounded-full flex items-center justify-center gap-2 mb-4"
            >
                <SVG_ErrorLocation className="h-7 w-7" />
            </button>
            <div className="flex justify-between text-sm text-gray-600">
                <span>{watch("latitude") || "Latitude"}</span>
                <span>{watch("longitude") || "Longitude"}</span>
            </div>
            {showMap && (
                <PinMap
                    onSelectLocation={handleLocationSelect}
                    onClose={() => setShowMap(false)}
                />
            )}
        </div>
    );
}
