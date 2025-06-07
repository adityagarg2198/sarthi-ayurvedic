import { Outlet } from "react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout defaultSidebarCollapsed>
      <Outlet />
    </DashboardLayout>
  );
}
