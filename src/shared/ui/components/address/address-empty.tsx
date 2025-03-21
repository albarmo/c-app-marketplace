import React from "react";
import Link from "next/link";
import Header from "@/shared/ui/components/header/header";
import { SVG_ErrorLocationEmpty } from "@/shared/svg/svg.empty.address";

const EmptyAddressPage: React.FC = () => (
    <div className="min-h-screen bg-gray-50">
        <Header title="Alamat" pageUrl="/profile">
            <Link href="/profile/daftar-alamat/tambah-alamat" className="text-blue-600 font-medium">
                +Tambah Alamat
            </Link>
        </Header>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
            <div className="mb-4">
                <SVG_ErrorLocationEmpty className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-gray-500 mb-6 font-medium">Belum ada alamat</p>
            <Link href="/profile/daftar-alamat/tambah-alamat" className="mt-2.5 w-max border border-primary p-2.5 px-5 font-semibold text-primary rounded">
                +Tambah Alamat
            </Link>
        </div>
    </div>
);

export default EmptyAddressPage;
