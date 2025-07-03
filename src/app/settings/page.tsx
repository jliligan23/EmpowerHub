import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  MapPin,
  CalendarDays,
  History,
  PlusCircle,
  Pen,
  Trash,
} from "lucide-react";

const roles = [
  {
    name: "Administrator",
    description: "Full system access.",
    permissions: "All",
  },
  {
    name: "HR Manager",
    description: "Manages employee data, payroll, and recruitment.",
    permissions: "Restricted",
  },
  {
    name: "Employee",
    description: "Access to personal data and general features.",
    permissions: "Limited",
  },
];

const locations = [
  { name: "Headquarters", address: "123 Business Rd, Metro Manila" },
  { name: "Cebu Office", address: "456 Tech Ave, Cebu City" },
];

const holidays = [
  { name: "New Year's Day", date: "January 1, 2025" },
  { name: "Labor Day", date: "May 1, 2025" },
  { name: "Independence Day", date: "June 12, 2025" },
  { name: "Christmas Day", date: "December 25, 2024" },
];

const auditLogs = [
  {
    user: "Admin",
    action: "Updated payroll settings",
    timestamp: "2024-07-30 10:15 AM",
  },
  {
    user: "Jane Smith",
    action: "Submitted leave request",
    timestamp: "2024-07-30 09:45 AM",
  },
  {
    user: "Admin",
    action: "Added new employee: John Doe",
    timestamp: "2024-07-29 03:20 PM",
  },
  {
    user: "Mary Johnson",
    action: "Updated profile information",
    timestamp: "2024-07-29 11:00 AM",
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Settings & Configuration
          </h1>
          <p className="text-muted-foreground">
            Manage system-wide settings, roles, and organizational data.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Roles & Permissions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Roles & Permissions
            </CardTitle>
            <CardDescription>
              Define user roles and control access to features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roles.map((role) => (
                  <TableRow key={role.name}>
                    <TableCell className="font-medium">{role.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {role.description}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          role.permissions === "All"
                            ? "default"
                            : role.permissions === "Restricted"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {role.permissions}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Pen className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Role
            </Button>
          </CardFooter>
        </Card>

        {/* Office Locations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Office Locations
            </CardTitle>
            <CardDescription>
              Manage work zones and office sites.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li
                  key={location.name}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{location.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {location.address}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Pen className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Location
            </Button>
          </CardFooter>
        </Card>

        {/* Holidays */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              Holidays & Workdays
            </CardTitle>
            <CardDescription>
              Set company-wide holidays and work schedule.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {holidays.map((holiday) => (
                <li
                  key={holiday.name}
                  className="flex items-center justify-between"
                >
                  <p className="font-medium">{holiday.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {holiday.date}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Holiday
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* System Logs */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5 text-primary" />
            System Logs / Audit Trail
          </CardTitle>
          <CardDescription>
            Track recent activities and changes in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead className="text-right">Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{log.user}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {log.action}
                  </TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground">
                    {log.timestamp}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
