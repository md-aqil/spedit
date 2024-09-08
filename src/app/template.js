"use client";

import { useEffect } from "react";
import { TourGuideClient } from "@sjmc11/tourguidejs/src/Tour";
import "@sjmc11/tourguidejs/src/scss/tour.scss";

export default function Template({ children }) {
  return <div>{children}</div>;
}
