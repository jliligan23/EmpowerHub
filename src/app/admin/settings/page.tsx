import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle, Globe, CalendarDays, ShieldCheck, History } from "lucide-react";

const roles = [
    { name: "Admin", permissions: 42, users: 2 },
    { name: "HR Manager", permissions: 35, users: 5 },
    { name: "Employee", permissions: 12, users: 1243 },
]

const locations = [
    { name: "Headquarters - Manila", timezone: "GMT+8", employees: 800 },
    { name: "Cebu Office", timezone: "GMT+8", employees: 450 },
]

const auditLogs = [
    { user: "Admin User", action: "Updated payroll for June 2024", timestamp: "2024-07-05 10:30 AM" },
    { user: "HR Manager", action: "Posted new job: Senior Backend Engineer", timestamp: "2024-07-04 02:15 PM" },
    { user: "Jane Smith", action: "Approved leave for John Doe", timestamp: "2024-07-03 09:00 AM" },
]


export default function AdminSettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight">Settings & Configuration</h1>
                <p className="text-muted-foreground">Manage global settings for the organization.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> Roles & Permissions</CardTitle>
                        <CardDescription>Define user roles and their access levels.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Users</TableHead>
                                    <TableHead><span className="sr-only">Actions</span></TableHead>
                                </TableRow>
                            </TableHeader>
                             <TableBody>
                                {roles.map((role) => (
                                    <TableRow key={role.name}>
                                        <TableCell className="font-medium">{role.name}</TableCell>
                                        <TableCell>{role.users}</TableCell>
                                        <TableCell className="text-right">
                                             <Button variant="outline" size="sm">Manage</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <CardFooter>
                        <Button><PlusCircle className="mr-2 h-4 w-4" /> Add New Role</Button>
                    </CardFooter>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /> Office Locations</CardTitle>
                        <CardDescription>Manage your company's physical work locations.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Location</TableHead>
                                    <TableHead>Employees</TableHead>
                                </TableRow>
                            </TableHeader>
                             <TableBody>
                                {locations.map((loc) => (
                                    <TableRow key={loc.name}>
                                        <TableCell className="font-medium">{loc.name}</TableCell>
                                        <TableCell>{loc.employees}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                     <CardFooter>
                        <Button><PlusCircle className="mr-2 h-4 w-4" /> Add Location</Button>
                    </CardFooter>
                </Card>

                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><History className="h-5 w-5 text-primary" /> System Logs / Audit Trail</CardTitle>
                        <CardDescription>Review recent system and user activities.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Timestamp</TableHead>
                                    <TableHead>User</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                             <TableBody>
                                {auditLogs.map((log, i) => (
                                    <TableRow key={i}>
                                        <TableCell className="text-muted-foreground">{log.timestamp}</TableCell>
                                        <TableCell className="font-medium">{log.user}</TableCell>
                                        <TableCell>{log.action}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
