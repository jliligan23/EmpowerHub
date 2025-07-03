
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CalendarDays,
  CheckCircle,
  MoreHorizontal,
  PlusCircle,
  Settings,
  XCircle,
  ClipboardCheck,
} from "lucide-react";

const leaveRequests = [
  {
    id: "LR001",
    name: "John Doe",
    avatarUrl: "https://placehold.co/100x100.png",
    leaveType: "Vacation",
    startDate: "2024-08-15",
    endDate: "2024-08-20",
    status: "Pending",
  },
  {
    id: "LR002",
    name: "Jane Smith",
    avatarUrl: "https://placehold.co/100x100.png",
    leaveType: "Sick Leave",
    startDate: "2024-08-01",
    endDate: "2024-08-01",
    status: "Approved",
  },
  {
    id: "LR003",
    name: "Peter Jones",
    avatarUrl: "https://placehold.co/100x100.png",
    leaveType: "Personal",
    startDate: "2024-08-05",
    endDate: "2024-08-05",
    status: "Rejected",
  },
  {
    id: "LR004",
    name: "Mary Johnson",
    avatarUrl: "https://placehold.co/100x100.png",
    leaveType: "Vacation",
    startDate: "2024-09-01",
    endDate: "2024-09-10",
    status: "Pending",
  },
];

const summaryCards = [
    { title: "Annual Leave Balance", value: "15 Days", icon: CalendarDays },
    { title: "Sick Leave Balance", value: "8 Days", icon: CalendarDays },
    { title: "Pending Requests", value: "2", icon: ClipboardCheck },
];

export default function LeavePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Leave Management
          </h1>
          <p className="text-muted-foreground">
            Track and manage all employee leave requests and balances.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Apply for Leave
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Manage Leave Types
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {summaryCards.map((card) => (
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

      <Card>
        <CardHeader>
          <CardTitle>Recent Leave Requests</CardTitle>
          <CardDescription>
            A list of the most recent leave applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Leave Type</TableHead>
                <TableHead className="hidden md:table-cell">Dates</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage
                          src={request.avatarUrl}
                          alt={request.name}
                          data-ai-hint="person face"
                        />
                        <AvatarFallback>
                          {request.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{request.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{request.leaveType}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {request.startDate} to {request.endDate}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        request.status === "Approved"
                          ? "default"
                          : request.status === "Rejected"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                          <XCircle className="mr-2 h-4 w-4" />
                          Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
