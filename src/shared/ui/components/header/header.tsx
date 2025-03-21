"use client"
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { RiAddLargeFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SVG_Cart, SVG_CartOutline } from '@/shared/svg/svg.cart'
import { SVG_Chat } from '@/shared/svg/svg.chat'
import { SVG_ArrowLeft } from "@/shared/svg/svg.arrow";
import Link from "next/link";
import { SVG_Close } from "@/shared/svg/svg.close";
interface HeaderProps {
    variant?: string;
    pageUrl?: string;
    onClick?: () => void;
    title?: string;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
    variant,
    title,
    onClick,
    children,
}) => {
    const router = useRouter()

    const previousPage = () => {
        router.back()
    }
    const login = () => {
        router.push("/auth/login")
    }

    const headerType = () => {
        switch (variant) {
            case "login":
                return (
                    <div className="relative w-full">
                        {/* Gradien */}
                        <div
                            className="w-full h-32"
                            style={{
                                background: "linear-gradient(to bottom, #10589d, transparent)",
                            }}
                        ></div>

                        {/* Logo */}
                        <div className="absolute top-30 left">
                            <Image
                                src="/images/localoka-logo.png"
                                alt="Localoka"
                                width={180}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                );

            case "registration":
                return (
                    <div className="flex justify-between p-4 h-14 font-semibold border-b-2 border-gray-100 shadow-sm">
                        <div>Registrasi</div>
                        <div className="text-primary cursor pointer" onClick={login}>Masuk</div>
                    </div>
                );
            case "form":
                return (
                    <div className="flex justify-between p-4 h-14 font-semibold border-b-2 border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="cursor-pointer" onClick={previousPage}>
                                <SVG_ArrowLeft />
                            </div>
                            <div>{title}</div>
                        </div>
                        <div>{children}</div>
                    </div>
                );
            case "plain":
                return (
                    <div className="flex justify-between p-4 h-14 font-semibold bg-primary shadow-sm"></div>
                )
            case "no-arrow":
                return (
                    <div className="fixed z-50 top-0 flex justify-between items-center gap-6 p-4 w-full bg-white h-14 font-semibold">
                        <div className="text-lg">{title}</div>
                        {children}
                    </div>
                )
            case "store":
                return (
                    <div className="fixed z-50 top-0 flex items-center justify-between w-full h-14 p-4 bg-white border-b-2 border-gray-100 shadow-sm">
                        <div className="flex items-center gap-6">
                            <div className="cursor-pointer flex items-center" onClick={previousPage}>
                                <FaArrowLeft />
                            </div>
                            <span className="text-base font-semibold">{title}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <SVG_Cart />
                            <SVG_Chat />
                        </div>
                    </div>

                )
            case "product-detail":
                return (
                    <div className="fixed z-50 top-0 flex items-center justify-between w-full h-14 p-4 bg-white border-b-2 border-gray-100 shadow-sm">
                        <div className="flex items-center gap-6">
                            <div className="cursor-pointer flex items-center" onClick={previousPage}>
                                <SVG_ArrowLeft />
                            </div>
                        </div>
                        <h1 className="text-base text-center font-semibold">{title}</h1>
                        <Link href='/cart' className="flex items-center gap-4">
                            <SVG_CartOutline />
                        </Link>
                    </div>
                )
            case "address":
                return (
                    <div className="fixed z-50 top-0 flex items-center gap-6 p-4 w-full bg-white h-14 font-semibold border-b-2 border-gray-100 shadow-sm justify-between">
                        <div className="flex items-center gap-4">
                            <div className="cursor-pointer" onClick={previousPage}><FaArrowLeft /></div>
                            <div className="text-base">{title}</div>
                        </div>
                        <Link href={'/checkout/add-address'}>
                            <div className="text-primary cursor pointer">+ Tambah Alamat</div>
                        </Link>
                    </div>
                )
            case "close-headers":
                return (
                    <div className="fixed z-50 top-0 flex items-center justify-between p-4 w-full bg-white h-14 font-semibold border-b-2 border-gray-100 shadow-sm">
                        <div className="flex items-center gap-6">
                            <div className="cursor-pointer" onClick={previousPage}> <SVG_Close /></div>
                            <div className="text-base">{title}</div>
                        </div>
                        {children}
                    </div>
                );
            default:
                return (
                    <div className="fixed z-50 top-0 flex justify-between items-center gap-6 p-4 w-full bg-white h-14 font-semibold border-b-2 border-gray-100 shadow-sm">
                        <div className="flex items-center space-x-4">
                            <div className="cursor-pointer" onClick={previousPage}><FaArrowLeft /></div>
                            <div className="text-base">{title}</div>
                        </div>
                        {children}
                    </div>
                );
        }
    };

    return <header>{headerType()}</header>;
};

export default Header;
