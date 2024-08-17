
import React from "react";

const dashboardItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac9a59998da1fca81674b0b58543aaa52095970bbe6e1f5e9887b6db92b84ab3?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Dash",
    isActive: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fca757d011f2ea5bd0a0031660415e17c627b301a03b06adffade3ac23a8e78?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Leader Board",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01cad60f15d0c9a8179a435782dce82e80295752a626e9c52867f8808cb55572?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Broker Connect",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c92bed65b159d121c5995974ec457eab75df71f14f5faf844be1c6d81ae54f89?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Live Positions",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/57cdd1f44853a75152dbdbb21dc4d0405e7b631e63bf3b15765fc68091adef02?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "History",
  },
  {
    icon: "./mp.svg",
      text: "Mock Positions",
  },
  {
     icon: "./ms.png",
    text: "Mock History",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/949f5d1edfe79e05d52ce7a5297014067a193cb579e16eec861cfa044e90efb1?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Lead Trader Login",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a85cd306b40282a599aeda362effad94839978254ccb4fa670778b24a964e5c1?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Referral",
  },
];

function DashboardIcons() {
  return (
    <div className="flex flex-col pt-6 w-full bg-stone-50 min-h-[127px] max-md:max-w-full">
      <div className="flex flex-wrap gap-3.5 items-start self-center pb-1.5 max-md:max-w-full">
        {dashboardItems.map((item, index) => (
          <div key={index} className="flex flex-col pb-2">
            <div
              className={`flex flex-col justify-center items-center p-2.5 rounded-md ${
                item.isActive
                  ? "bg-neutral-900"
                  : "border-0 border-solid border-stone-50"
              }`}
            >
              <div className="flex flex-col justify-center py-1 min-h-[26px] w-[18px]">
                <img
                  loading="lazy"
                  src={item.icon}
                  alt=""
                  className="object-contain w-full aspect-square"
                />
              </div>
              <div
                className={`text-xs leading-none ${
                  item.isActive
                    ? "font-semibold text-lime-500"
                    : "text-neutral-800"
                }`}
              >
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2.5 w-full border border-solid opacity-50 bg-stone-300 border-stone-300 min-h-[1px] max-md:max-w-full" />
    </div>
  );
}

export default DashboardIcons;
