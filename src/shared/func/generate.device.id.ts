"use server";

import crypto from "crypto";
import { createCookies, getCookies } from "@/modules/store/cookies";
import { logger } from "@/lib/logger";

export async function getDeviceId(): Promise<string> {
  const deviceId = await getCookies("device-id");
  return deviceId?.value ?? "";
}

export async function generateDeviceId(): Promise<string> {
  const deviceId = await getCookies("device-id");
  if (deviceId?.value) return deviceId?.value;

  const randomInt = crypto
    .randomInt(0, 10 ** 10 - 1)
    .toString()
    .padStart(10, "0");

  createCookies({ name: "device-id", data: randomInt });
  logger(
    "[func/create.device.ID]",
    "Function",
    "Create Device ID"
  )(randomInt).info();

  return randomInt;
}
