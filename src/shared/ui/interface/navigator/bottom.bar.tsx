'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { SVG_Heart } from '@/shared/svg/svg.heart'
import { SVG_Home } from '@/shared/svg/svg.home'
import { SVG_Order } from '@/shared/svg/svg.order'
import { SVG_Profile } from '@/shared/svg/svg.profile'
import { SVG_Store } from '@/shared/svg/svg.store'

const BOTTOM_BAR_MENUS_BUYER = [
    {
        id: 'home',
        label: "Home",
        icon: <SVG_Home className='size-6' />,
        path: '/'
    },
    {
        id: 'order',
        label: "Pesanan",
        icon: <SVG_Order className='size-6' />,
        path: '/order'
    },
    {
        id: 'wishlist',
        label: "Wishlist",
        icon: <SVG_Heart className='size-5' />,
        path: '/wishlist'
    },
    {
        id: 'profile',
        label: "Akun",
        icon: <SVG_Profile className='size-5' />,
        path: '/profile'
    }
]

const BOTTOM_BAR_MENUS_SELLER = [
    {
        id: 'home',
        label: "Home",
        icon: <SVG_Home className='size-6' />,
        path: '/'
    },
    {
        id: 'order',
        label: "Pesanan",
        icon: <SVG_Order className='size-6' />,
        path: '/order'
    },
    {
        id: 'wishlist',
        label: "Wishlist",
        icon: <SVG_Heart className='size-5' />,
        path: '/wishlist'
    },
    {
        id: 'store',
        label: "Toko",
        icon: <SVG_Store className='size-6' />,
        path: '/store'
    },
    {
        id: 'profile',
        label: "Akun",
        icon: <SVG_Profile className='size-5' />,
        path: '/profile'
    }
]

const _Styles = {
    base: "flex flex-col justify-between items-center text-[#828282] text-xs size-10",
    active: "flex flex-col justify-between items-center text-primary fill-primary text-xs size-10",
}

export default function BottomBar() {
    const isSeller = true
    const router = useRouter()
    const pathname = usePathname()
    const knownPaths = isSeller ? BOTTOM_BAR_MENUS_SELLER?.flatMap((menu) => menu.path) : BOTTOM_BAR_MENUS_BUYER?.flatMap((menu) => menu.path)

    const getFirstPath = (currentPathname: string) => {
        if (currentPathname !== '/') {
            const firstPath = pathname.split("/").filter(Boolean)[0] || "/"

            return `/${firstPath}`
        } else {
            return currentPathname
        }
    }

    if (!knownPaths.includes(getFirstPath(pathname))) {
        return <></>
    }

    const handleChangePage = (path: string) => {
        router.push(path)
    }

    return (
        <div className='bg-white h-max min-h-16 w-full fixed bottom-0 border flex justify-around items-center'>
            {isSeller ? (
                BOTTOM_BAR_MENUS_SELLER?.map((menu) =>
                    <nav onClick={() => handleChangePage(menu.path)} key={menu?.id} className={_Styles[getFirstPath(pathname) === menu.path ? 'active' : 'base']}>
                        {menu.icon}
                        {menu.label}
                    </nav>
                )
            ) : (
                BOTTOM_BAR_MENUS_BUYER?.map((menu) =>
                    <nav onClick={() => handleChangePage(menu.path)} key={menu?.id} className={_Styles[getFirstPath(pathname) === menu.path ? 'active' : 'base']}>
                        {menu.icon}
                        {menu.label}
                    </nav>
                )
            )}
        </div>
    )
}
