"use client";

import { type PropsWithChildren } from "react";
import { TourProvider } from "./tour/provider";

export default function CopyTradingTemplate({ children }: PropsWithChildren) {
  return <TourProvider>{children}</TourProvider>;
}
