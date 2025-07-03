import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ClipboardCheck, CalendarClock, Gift, UserPlus, Megaphone } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const overviewCards = [
  { title: "Total Employees", value: "1,250", icon: Users },
  { title: "Attendance Today", value: "1,120", icon: ClipboardCheck },
  { title: "Pending Requests", value: "32", icon: CalendarClock },
  { title: "Birthdays Today", value: "5", icon: Gift },
];

const recentRequests = [
    { name: "John Doe", type: "Leave", status: "Pending" },
    { name: "Jane Smith", type: "Travel", status: "Approved" },
    { name: "Peter Jones", type: "Certificate", status: "Pending" },
    { name: "Mary Johnson", type: "Schedule Change", status: "Rejected" },
];

export default function AdminDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {overviewCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row">
            <Button className="w-full sm:w-auto">
              <UserPlus className="mr-2 h-4 w-4" /> Add Employee
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <Megaphone className="mr-2 h-4 w-4" /> New Announcement
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentRequests.map((req) => (
                        <TableRow key={req.name}>
                            <TableCell className="font-medium">{req.name}</TableCell>
                            <TableCell>{req.type}</TableCell>
                            <TableCell>
                                <Badge variant={req.status === 'Approved' ? 'default' : req.status === 'Rejected' ? 'destructive' : 'secondary'} className={req.status === 'Approved' ? 'bg-green-500/20 text-green-700 border-green-500/20' : req.status === 'Rejected' ? 'bg-red-500/20 text-red-700 border-red-500/20' : ''}>
                                    {req.status}
                                </Badge>
                            </TableCell>
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
