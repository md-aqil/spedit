// AdminDashboard.jsx
"use client";
import React, { useState } from "react";
import Sidebar from "./SideBar";
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
    icon: "icon-user",
    text: "User Management",
  },
  {
    icon: "icon-money-send",
    text: "Transaction Monitor",
  },
  {
    icon: "icon-data",
    text: "CMS",
  },
  {
    icon: "icon-activity",
    text: "Analytics & Reporting",
  },
  {
    icon: "icon-presention-chart",
    text: "Marketing Tools",
  },
  {
    icon: "icon-ticket-2",
    text: "Support & Ticketing",
  },
  {
    icon: "icon-key",
    text: "Rights Management",
  },
  {
    icon: "icon-trash",
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
