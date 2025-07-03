import AdminDashboard from "@/components/dashboard/admin-dashboard";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's a high-level overview of the organization.
        </p>
      </div>
      <AdminDashboard />
    </div>
  );
}
