import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarDays, Hourglass, PlusCircle } from "lucide-react";

const leaveBalances = [
    { title: "Annual Leave", balance: "15 Days" },
    { title: "Sick Leave", balance: "5 Days" },
    { title: "Emergency Leave", balance: "3 Days" },
];

const leaveHistory = [
    { type: "Vacation", dates: "2024-05-10 to 2024-05-15", status: "Approved" },
    { type: "Sick Leave", dates: "2024-06-20", status: "Approved" },
    { type: "Personal", dates: "2024-07-01", status: "Rejected" },
    { type: "Vacation", dates: "2024-08-15 to 2024-08-20", status: "Pending" },
]

export default function MyLeavePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
            <h1 className="font-headline text-3xl font-bold tracking-tight">My Leave</h1>
            <p className="text-muted-foreground">Apply for leave, check your balances, and view your request history.</p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Apply for Leave
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leaveBalances.map((item) => (
            <Card key={item.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{item.balance}</div>
                    <p className="text-xs text-muted-foreground">Remaining</p>
                </CardContent>
            </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
            <CardTitle>My Leave History</CardTitle>
            <CardDescription>A record of your past and current leave requests.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Leave Type</TableHead>
                        <TableHead>Dates</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {leaveHistory.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.type}</TableCell>
                            <TableCell>{item.dates}</TableCell>
                            <TableCell>
                                <Badge variant={
                                    item.status === "Approved" ? "default" 
                                    : item.status === "Rejected" ? "destructive" 
                                    : "secondary"
                                }>
                                    {item.status}
                                </Badge>
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
