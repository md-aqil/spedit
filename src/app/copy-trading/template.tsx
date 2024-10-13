"use client";

import { useEffect, useRef, type PropsWithChildren } from "react";

async function getTourClient() {
  const { initializeTourGuide } = await import("./tour/lib");
  return initializeTourGuide();
}

export default function CopyTradingTemplate({ children }: PropsWithChildren) {
  return <>{children}</>;
}
