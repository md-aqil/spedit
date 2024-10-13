"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Template({ children }) {
  return (
    <div>
      <ProgressBar shallowRouting height="4px" color="#9bec00" />
      {children}
    </div>
  );
}
