"use server";

import { cookies } from "next/headers";
import type { ENV } from "@/configs/environment";

type NameCookies = typeof ENV.TOKEN_KEY | "g_token" | "bg" | "text" | "style";
interface CookiesProps {
    name: NameCookies;
    data: string;
}

export async function createCookies(props: CookiesProps) {
    (await cookies()).set(props?.name, props?.data, {
        secure: process.env.IS_SECURE === "true" ? true : false,
        // httpOnly: true,
        // maxAge: 60 * 60,
        // sameSite: "strict",
        // path: "/",
    });
}

export async function getCookies(name: CookiesProps["name"]) {
    return (await cookies()).get(name);
}

export async function removeCookies(name: CookiesProps["name"]) {
    (await cookies()).delete(name);
}
