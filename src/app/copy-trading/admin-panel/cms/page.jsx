// AdminDashboard.jsx
"use client";
import React, { useState } from "react";
import Sidebar from "../SideBar";

import AdminPanelHeader from "../AdminPanelHeader";
import UserTable from "../UserTable";

import Pagination from "../Pagination";
import ContentManagementSystem from "../ContentManagementSystem";


function AdminDashboard() {
  

  return (
    <div className="flex flex-col pb-20 bg-[#F8FAF5]">
    
      <div className="z-10 w-full max-md:max-w-full main-body">
        <div className="flex w-full">
       <Sidebar
           
          />
          <main className="flex flex-col main-container">
            <main className="flex flex-col w-full">
              <AdminPanelHeader />
              <ContentManagementSystem />
            </main>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
