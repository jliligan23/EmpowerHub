"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminDashboard from "@/components/dashboard/admin-dashboard";
import EmployeeDashboard from "@/components/dashboard/employee-dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to EmpowerHub. Here's your overview for today.
        </p>
      </div>
      <Tabs defaultValue="admin" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="admin">Admin View</TabsTrigger>
          <TabsTrigger value="employee">Employee View</TabsTrigger>
        </TabsList>
        <TabsContent value="admin" className="mt-4">
          <AdminDashboard />
        </TabsContent>
        <TabsContent value="employee" className="mt-4">
          <EmployeeDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
