"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "@/schema/address-schema";
import { AddressFormType, AddressStatus } from "@/types/address";
import { API_CreateAddress, IRq_CreateAddress } from "@/api/services/address/api.create.address";
import { API_UpdateAddress } from "@/api/services/address/api.update.address";
import { getCities } from "@/api/services/master-data/api.get.cities";
import { getProvinces } from "@/api/services/master-data/api.get.provinces";
import { getDistricts } from "@/api/services/master-data/api.get.districts";
import { getVillages } from "@/api/services/master-data/api.get.villages";
import { getZipCodeDetails } from "@/api/services/master-data/api.get.zipcode";
import Form, { Field } from "@/shared/ui/components/form/input/client.form";
import FormContainer from "@/shared/ui/components/container/form.container";
import SelectInput from "@/shared/ui/components/input/select";
import Button from "@/shared/ui/components/button/button";
import LocationPin from "./location.pin";
import Header from "@/shared/ui/components/header/header";
import StatusSelector from "./address.status";
import toast from "react-hot-toast";

interface AddressPageProps {
    mode: "tambah" | "ubah";
    initialData?: AddressFormType;
}

interface Option {
    id: string;
    name: string;
}

export const statusOptions: ("Alamat Pickup" | "Alamat Pengiriman")[] = [
    "Alamat Pickup",
    "Alamat Pengiriman",
];

const convertFormStatusToApi = (status: AddressStatus[]): "BUYER" | "SELLER" => {
    return status.includes("Alamat Pickup") ? "SELLER" : "BUYER";
};

export default function AddressPage({ mode, initialData }: AddressPageProps) {
    const router = useRouter();
    const [provinces, setProvinces] = useState<Option[]>([]);
    const [cities, setCities] = useState<Option[]>([]);
    const [districts, setDistricts] = useState<Option[]>([]);
    const [villages, setVillages] = useState<Option[]>([]);
    const [isZipCodeValid, setIsZipCodeValid] = useState<boolean | null>(null);
    const [zipCodeInfo, setZipCodeInfo] = useState<string>("");

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        reset,
        formState: { errors, isValid, isSubmitting },
    } = useForm<AddressFormType>({
        resolver: zodResolver(addressSchema),
        mode: "onChange",
        defaultValues: mode === "ubah" && initialData
            ? initialData
            : {
                id: "",
                detailAddress: "",
                label: "",
                recipientName: "",
                phone: "",
                postalCode: "",
                province: "",
                city: "",
                district: "",
                village: "",
                status: [],
                latitude: "",
                longitude: "",
            },
    });

    // Reset form saat mode "ubah"
    useEffect(() => {
        if (mode === "ubah" && initialData) {
            reset(initialData);
        }
    }, [initialData, mode, reset]);

    // Fetch data provinsi
    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const params = { page: 1, limit: 40, field: "name", sort: "ASC" as const };
                const data = await getProvinces(params);
                setProvinces(data);
            } catch (error) {
            }
        };
        fetchProvinces();
    }, []);

    const selectedProvince = watch("province");
    const selectedCity = watch("city");
    const selectedDistrict = watch("district");

    // Fetch kota berdasarkan provinsi
    useEffect(() => {
        if (!selectedProvince) return;
        const fetchCities = async () => {
            try {
                const params = { provinceId: selectedProvince, page: 1, limit: 40, field: "name", sort: "ASC" as const };
                const data = await getCities(params);
                setCities(data);
            } catch (error) {
            }
        };
        fetchCities();
    }, [selectedProvince]);

    // Fetch kecamatan berdasarkan kota
    useEffect(() => {
        if (!selectedCity) return;
        const fetchDistricts = async () => {
            try {
                const params = { cityId: selectedCity, page: 1, limit: 40, field: "name", sort: "ASC" as const };
                const data = await getDistricts(params);
                setDistricts(data);
            } catch (error) {
            }
        };
        fetchDistricts();
    }, [selectedCity]);

    // Fetch desa berdasarkan kecamatan
    useEffect(() => {
        if (!selectedDistrict) return;
        const fetchVillages = async () => {
            try {
                const params = { districtId: selectedDistrict, page: 1, limit: 40, field: "name", sort: "ASC" as const };
                const data = await getVillages(params);
                setVillages(data);
            } catch (error) {
            }
        };
        fetchVillages();
    }, [selectedDistrict]);

    // Validasi kode pos ke API
    const validateZipCodeToApi = async (zipCode: string) => {
        if (zipCode.length < 5) {
            setIsZipCodeValid(null);
            setZipCodeInfo("");
            return null;
        }
        try {
            const params = { zipCode, page: 1, limit: 1, field: "name", sort: "ASC" as const };
            const response = await getZipCodeDetails(params);
            if (response && response.length > 0) {
                const { id, name } = response[0];
                setZipCodeInfo(`Kode Pos: ${name}`);
                setIsZipCodeValid(true);
                setValue("postalCode", name);
                return id;
            } else {
                setZipCodeInfo("Kode pos tidak ditemukan");
                setIsZipCodeValid(false);
                return null;
            }
        } catch (error) {
            setZipCodeInfo("Error memvalidasi kode pos");
            setIsZipCodeValid(false);
            return null;
        }
    };

    // Handler submit form
    const handleFormSubmit: SubmitHandler<AddressFormType> = async (data) => {
        try {
            // Validasi kode pos
            const postalCodeId = await validateZipCodeToApi(data.postalCode);
            if (!postalCodeId) {
                throw new Error("Kode pos tidak valid.");
            }
            const requestPayload: IRq_CreateAddress = {
                type: convertFormStatusToApi(data.status),
                label: data.label,
                address: data.detailAddress,
                description: data.detailAddress?.trim() || "No description",
                province_id: data.province,
                city_id: data.city,
                district_id: data.district,
                village_id: data.village,
                postal_code_id: postalCodeId,
                latitude: data.latitude ? parseFloat(data.latitude) : undefined,
                longitude: data.longitude ? parseFloat(data.longitude) : undefined,
                is_default: false,
                recipient_name: data.recipientName,
                recipient_phone_number: data.phone,
            };
            let response;
            if (mode === "ubah") {
                if (!data.id) {
                    throw new Error("ID alamat tidak ditemukan.");
                }
                response = await API_UpdateAddress(data.id, requestPayload);
            } else {
                response = await API_CreateAddress(requestPayload);
            }

            if (response.code !== 200 && response.code !== 201) {
                throw new Error(response.message || "Gagal menyimpan alamat.");
            }
            toast.success(mode === "ubah" ? "Alamat berhasil diperbarui!" : "Alamat berhasil disimpan!");
            router.push("/profile/daftar-alamat");
        } catch (error: any) {
            toast.error(error.message || "Gagal menyimpan alamat.");
        }
    };

    // Handler untuk perubahan status alamat
    const handleStatusChange = (status: AddressStatus) => {
        const currentStatus = watch("status") || [];
        const newStatus = currentStatus.includes(status)
            ? currentStatus.filter((s) => s !== status)
            : [...currentStatus, status];
        setValue("status", newStatus, { shouldValidate: true });
    };

    const ADDRESS_FORM: Field[] = [
        {
            key: "detailAddress",
            label: "Detail Alamat",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <textarea
                    {...register("detailAddress")}
                    placeholder="Cth. Jln. LocaLoka no. 1"
                    rows={4}
                    className="w-full h-24 border rounded-sm p-2.5 focus:outline-blue-300 focus:shadow-outline"
                />
            ),
        },
        {
            key: "status",
            label: "Tandai Sebagai",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <StatusSelector
                    statusOptions={statusOptions}
                    watch={watch}
                    handleStatusChange={handleStatusChange}
                    register={register}
                />
            ),
        },
        {
            key: "label",
            label: "Label Alamat",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <input
                    type="text"
                    {...register("label")}
                    placeholder="Cth. Rumah"
                    className="w-full h-9 rounded border p-2.5 focus:outline-blue-300"
                />
            ),
        },
        {
            key: "recipientName",
            label: "Nama Penerima",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <input
                    type="text"
                    {...register("recipientName")}
                    placeholder="Masukkan nama penerima"
                    className="w-full h-9 rounded border p-2.5 focus:outline-blue-300"
                />
            ),
        },
        {
            key: "phone",
            label: "Nomor Ponsel",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <input
                    type="tel"
                    {...register("phone")}
                    placeholder="Cth. 0812XXXXXXXX"
                    className="w-full h-9 rounded border p-2.5 focus:outline-blue-300"
                />
            ),
        },
        {
            key: "postalCode",
            label: "Kode Pos",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <div>
                    <input
                        type="text"
                        {...register("postalCode", {
                            onChange: (e) => validateZipCodeToApi(e.target.value),
                        })}
                        placeholder="Masukkan kode pos"
                        className="w-full h-9 rounded border p-2.5 focus:outline-blue-300"
                    />
                    {isZipCodeValid === true && <p className="text-green-500 text-xs mt-1">Kode Pos Valid</p>}
                    {isZipCodeValid === false && <p className="text-red-500 text-xs mt-1">Kode Pos Invalid</p>}
                </div>
            ),
        },
        {
            key: "province",
            label: "Provinsi",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <Controller
                    name="province"
                    control={control}
                    render={({ field }) => (
                        <SelectInput
                            id="province"
                            variant="base"
                            options={provinces.map((p) => ({ label: p.name, value: p.id }))}
                            placeholder="Pilih Provinsi"
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    )}
                />
            ),
        },
        {
            key: "city",
            label: "Kabupaten/Kota",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                        <SelectInput
                            id="city"
                            variant="base"
                            options={cities.map((c) => ({ label: c.name, value: c.id }))}
                            placeholder="Pilih Kabupaten/Kota"
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    )}
                />
            ),
        },
        {
            key: "district",
            label: "Kecamatan",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <Controller
                    name="district"
                    control={control}
                    render={({ field }) => (
                        <SelectInput
                            id="district"
                            variant="base"
                            options={districts.map((d) => ({ label: d.name, value: d.id }))}
                            placeholder="Pilih Kecamatan"
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    )}
                />
            ),
        },
        {
            key: "village",
            label: "Desa/Kelurahan",
            type: "custom",
            validation: { isRequired: true },
            component: (
                <Controller
                    name="village"
                    control={control}
                    render={({ field }) => (
                        <SelectInput
                            id="village"
                            variant="base"
                            options={villages.map((v) => ({ label: v.name, value: v.id }))}
                            placeholder="Pilih Desa/Kelurahan"
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    )}
                />
            ),
        },
    ];

    return (
        <div className="flex flex-col">
            <Header
                variant="form"
                title={mode === "tambah" ? "Tambah Alamat" : "Ubah Alamat"}
                pageUrl="/profile/daftar-alamat"
            />
            <FormContainer>
                <Form id="address-form" fields={ADDRESS_FORM} errors={errors} />
                <LocationPin register={register} watch={watch} setValue={setValue} />
                <Button
                    label={mode === "tambah" ? "Simpan" : "Ubah Alamat"}
                    variant="primary"
                    onClick={handleSubmit(handleFormSubmit)}
                    disabled={!isValid || isSubmitting}
                />
            </FormContainer>
        </div>
    );
}