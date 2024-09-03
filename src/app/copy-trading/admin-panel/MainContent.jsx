
import * as React from "react";
import AdminPanelHeader from "./AdminPanelHeader";
import UserTable from "./UserTable";
import Pagination from "./Pagination";
import TransactionMonitoring from "./TransactionMonitoring";
import ContentManagementSystem from "./ContentManagementSystem";
import RightManagement from "./RightManagement";

function MainContent() {
  return (
    <main className="flex flex-col w-full">
      <AdminPanelHeader />

    <div>

    <UserTable />
      <Pagination />
    </div>

    <TransactionMonitoring />

    <ContentManagementSystem />
    <RightManagement />

    </main>
  );
}

export default MainContent;
