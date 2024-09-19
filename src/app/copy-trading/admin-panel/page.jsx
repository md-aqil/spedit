// AdminDashboard.jsx
"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AdminPanelHeader from "./AdminPanelHeader";
import UserTable from "./UserTable";
import Pagination from "./Pagination";
import TransactionMonitoring from "./TransactionMonitoring";
import ContentManagementSystem from "./ContentManagementSystem";
import RightManagement from "./RightManagement";
import Trash from "./Trash";

const adminSidebarItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f253ad62e4016d528431753deb0ca5f97adaeb1b8858a6335fb342772f40cd2?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "User Management",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca9923d7773954ef4cc5f3b8936c5610dc93b9cdf08a76131404cb98da1ccb46?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Transaction Monitor",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdf474ca34806eea5802db76af7ebe30f8a2ee51a937f44bd27096ff93639c13?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "CMS",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2609604b3209928401111ed3a31f92ffb7ea386e7242f8283c869479e76508af?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Analytics & Reporting",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe3a05ce259f28b70a37cfbe41442d1cfbc944112c1e18caf9a677c91f62d76b?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Marketing Tools",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/66144b8810c8fa70b91f077309bc3db59501e079dcc2aaaaeb5c91326375109a?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Support & Ticketing",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/116e45a0d2a3b14697ab7ffe1477c63d2b3a477eeb23f4c4a2bb95945e56ecd9?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Rights Management",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/265882120af3e302c6ef800c8a0464e24b62ea0b02bd069e174561b3697adcb9?apiKey=b4d1b9e87b084579b1e2475047caf617&",
    text: "Trash",
  },
];

function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("User Management");

  const renderComponent = () => {
    switch (activeMenu) {
      case "User Management":
        return (
          <div className="usertable">
            <UserTable />
            <Pagination />
          </div>
        );
      case "Transaction Monitor":
        return <TransactionMonitoring />;
      case "CMS":
        return <ContentManagementSystem />;
      case "Analytics & Reporting":
        return <div>Analytics & Reporting Component</div>;
      case "Marketing Tools":
        return <div>Marketing Tools Component</div>;
      case "Support & Ticketing":
        return <div>Support & Ticketing Component</div>;
      case "Rights Management":
        return <RightManagement />;

      case "Trash":
        return <Trash />;
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex flex-col pb-20 bg-[#F8FAF5]">
      {/* <Header /> */}
      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex w-full">
          <Sidebar
            items={adminSidebarItems}
            onSelect={setActiveMenu}
            activeItem={activeMenu}
          />
          <main className="flex flex-col main-container">
            <main className="flex flex-col w-full">
              <AdminPanelHeader />
              {renderComponent()}
            </main>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
