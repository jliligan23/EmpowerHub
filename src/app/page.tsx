"use client";

import EmployeeDashboard from "@/components/dashboard/employee-dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">My Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your overview for today.
        </p>
      </div>
      <EmployeeDashboard />
    </div>
  );
}
