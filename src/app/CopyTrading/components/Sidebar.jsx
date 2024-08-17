
import React from "react";
import SidebarItem from "./SidebarItem";

const sidebarItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f253ad62e4016d528431753deb0ca5f97adaeb1b8858a6335fb342772f40cd2?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Profile",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca9923d7773954ef4cc5f3b8936c5610dc93b9cdf08a76131404cb98da1ccb46?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Portfolio",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdf474ca34806eea5802db76af7ebe30f8a2ee51a937f44bd27096ff93639c13?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Build",
    subtext: "(coming soon)",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2609604b3209928401111ed3a31f92ffb7ea386e7242f8283c869479e76508af?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Code",
    subtext: "(coming soon)",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe3a05ce259f28b70a37cfbe41442d1cfbc944112c1e18caf9a677c91f62d76b?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Copy",
    isActive: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/66144b8810c8fa70b91f077309bc3db59501e079dcc2aaaaeb5c91326375109a?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Live Tools",
    subtext: "(coming soon)",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/116e45a0d2a3b14697ab7ffe1477c63d2b3a477eeb23f4c4a2bb95945e56ecd9?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Quest",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/265882120af3e302c6ef800c8a0464e24b62ea0b02bd069e174561b3697adcb9?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Learn",
  },
];

function Sidebar() {
  return (
    <aside className="flex flex-col max-md:ml-0 max-md:w-full dash-sidebar">
      <div className="flex flex-col items-center py-8 pr-5 mx-auto w-full bg-stone-950 dash-sidebar-content">
        <div className="flex gap-7 items-start text-xl  leading-7 text-neutral-500">

          <div className="w-[126px]">
            <span className="">Welcome,</span>
            <br />
            Joe
          </div>

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5ef3aad35b9b309f96c51485aeb383b8010a2d643048f6a86a12143295fa997?apiKey=b4d1b9e87b084579b1e2475047caf617&"
            alt="User avatar"
            className="object-contain shrink-0 w-14 rounded-xl aspect-square"
          />
        </div>
        <nav className="flex gap-6 self-start mt-5 text-xl text-white ml-7">
          <div className="flex flex-col items-start">
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>
        </nav>
        <div className="flex flex-col mt-20 max-w-full w-[233px] max-md:mt-10">
          <div className="flex gap-6 items-center self-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13305302e118aeef0a61a5ad8b3c4b43312094ca62af56407ec8d5bf4b55b8b?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1183f1c77f5311ac92e14098a129c8d9c303c159c6d25faeea4ef5d32a04000a?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[0.89]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d353058d9c11fa96af69f73d5cf4fbba9607ec5a64e441b192404278d09a8d4c?apiKey=b4d1b9e87b084579b1e2475047caf617&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>

          <div className="flex flex-col mt-9 w-full justify-center pb-10 text-center text-xs text-neutral-500">
            <div>Terms of Use | Privacy Policy | Disclaimer |About</div>
            <div className="mt-1.5 text-center">Copyright @2024</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
