"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const dashboardItems = [
  {
    icon: "icon-user",
    text: "Dash",
    isActive: true,
    link: "/copy-trading/dashboard/",
  },
  {
    icon: "icon-medal-star",
    text: "Leader Board",
    link: "/copy-trading/leader-board/",
  },
  {
    text: "Broker Connect",
    icon: "icon-percentage-circle",
    link: "/copy-trading/broker-connection/",
  },
  {
    icon:"icon-trend-up",
    text: "Live Positions",
    link: "/copy-trading/livepositions/",
  },
  {
    icon: "icon-clock",
    text: "History",
    link: "/copy-trading/trade-history/",
  },
  {
    icon:"icon-trend-up",
    text: "Mock Positions",
    link: "/copy-trading/mockpositions/",
  },
  {
    icon: "icon-clock",
    text: "Mock History",
    link: "/copy-trading/mockhistory/",
  },
  {
    icon: "icon-login",
    text: "Lead Trader Login",
    link: "/login",
  },
  {
    icon: "icon-gift",
    text: "Referral",
  },
];

function DashboardIcons({}) {
  const pathname = usePathname(); // Gets the current path

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap gap-3.5 items-start self-center pb-1.5 max-md:max-w-full dash-icons">
        {dashboardItems.map((item, index) => (
          <div key={index} className="flex flex-col pb-2">
            <Link href={item?.link ?? "/"}>
              <div
                className={`flex flex-col justify-center items-center p-2.5 gap-1 rounded-md  dash-icons-item ${
                  pathname === item?.link && true ? "bg-neutral-900" : "border-0 border-solid border-stone-50"
                }`}
              >
                <div className={` ${pathname === item?.link && " text-lime-500"}`}>
                 <span className={`${item.icon} text-2xl d-icon`}></span> 
                </div>
                <div className={`text-xs leading-none ${pathname === item?.link ? "font-semibold text-lime-500" : "text-neutral-800"}`}>{item.text}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default DashboardIcons;
