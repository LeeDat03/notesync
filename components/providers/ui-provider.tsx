"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface UiProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function UiProvider({ children }: UiProviderProps) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
