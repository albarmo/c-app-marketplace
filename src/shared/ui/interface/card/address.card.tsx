import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Address } from "@/types/address";
import Link from "next/link";
import CE_Modal from "@/shared/ui/interface/modal/client.modal";

type AddressCardProps = {
    address: Address;
    selectedAddress: string;
    setSelectedAddress: (id: string) => void;
    handleDeleteAddress: (addressId: string) => void;
    isPrimary: boolean;
};

const AddressCard: React.FC<AddressCardProps> = ({
    address,
    selectedAddress,
    setSelectedAddress,
    handleDeleteAddress,
    isPrimary,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteClick = () => {
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        handleDeleteAddress(address.id);
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const status = address.type === "BUYER" ? ["Alamat Pengiriman"] : ["Alamat Pickup"];

    return (
        <>
            <div
                key={address.id}
                className={`bg-white rounded-lg border ${address.id === selectedAddress || isPrimary ? "border-primary" : "border-gray-200"
                    } p-4`}
            >
                <div className="relative">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-base text-gray-800">{address.label}</h3>
                        <input
                            type="radio"
                            checked={address.id === selectedAddress || isPrimary}
                            onChange={() =>
                                setSelectedAddress(address.id === selectedAddress ? "" : address.id)
                            }
                            className="w-4 h-4 text-primary focus:ring-primary"
                        />
                    </div>
                    <div className="flex gap-2 mb-2">
                        {status.map((statusItem, index) => (
                            <span
                                key={index}
                                className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded"
                            >
                                {statusItem}
                            </span>
                        ))}
                    </div>
                    <div className="space-y-1">
                        <p className="text-gray-600 text-sm">{address.recipient_name}</p>
                        <p className="text-gray-600 text-sm">{address.recipient_phone_number}</p>
                        <p className="text-gray-600 text-sm">{address.address}</p>
                    </div>
                    <div className="mt-3 flex gap-2">
                        <Link href={`/profile/daftar-alamat/ubah-alamat/${address.id}`} className="flex-grow">
                            <button className="w-full py-2 border border-primary text-primary rounded-sm text-sm font-bold hover:bg-blue-50">
                                Ubah Alamat
                            </button>
                        </Link>
                        <button
                            onClick={handleDeleteClick}
                            className="py-2 px-3 border border-red-500 text-red-500 rounded-sm text-sm font-bold hover:bg-red-50"
                        >
                            <FaTrash className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Konfirmasi */}
            <CE_Modal
                isOpen={isModalOpen}
                closeAction={closeModal}
                title="Konfirmasi Penghapusan⚠️"
                variant="dialog"
                onConfrimAction={confirmDelete}
                closeable={true}
            >
                <p className="text-gray-600 text-sm">
                    Apakah Anda yakin ingin menghapus alamat "<strong>{address.label}</strong>"?
                </p>
            </CE_Modal>
        </>
    );
};

export default AddressCard;