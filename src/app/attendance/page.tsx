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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Edit } from "lucide-react";
import Image from "next/image";

const attendanceLogs = [
  {
    id: "ATT001",
    name: "John Doe",
    avatarUrl: "https://placehold.co/100x100.png",
    date: "2024-07-29",
    timeIn: "08:55",
    timeOut: "18:05",
    totalHours: "9h 10m",
    status: "On Time",
  },
  {
    id: "ATT002",
    name: "Jane Smith",
    avatarUrl: "https://placehold.co/100x100.png",
    date: "2024-07-29",
    timeIn: "09:15",
    timeOut: "18:00",
    totalHours: "8h 45m",
    status: "Late",
  },
  {
    id: "ATT003",
    name: "Peter Jones",
    avatarUrl: "https://placehold.co/100x100.png",
    date: "2024-07-29",
    timeIn: "09:00",
    timeOut: "19:30",
    totalHours: "10h 30m",
    status: "Overtime",
  },
  {
    id: "ATT004",
    name: "Mary Johnson",
    avatarUrl: "https://placehold.co/100x100.png",
    date: "2024-07-29",
    timeIn: "08:45",
    timeOut: "17:50",
    totalHours: "9h 5m",
    status: "On Time",
  },
    {
    id: "ATT005",
    name: "David Brown",
    avatarUrl: "https://placehold.co/100x100.png",
    date: "2024-07-29",
    timeIn: "N/A",
    timeOut: "N/A",
    totalHours: "0h 0m",
    status: "Absent",
  },
];

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Attendance Management
          </h1>
          <p className="text-muted-foreground">
            Monitor daily attendance, track hours, and manage adjustments.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Request Adjustment
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Daily Attendance Log</CardTitle>
            <CardDescription>
              Showing attendance records for July 29, 2024.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Time In</TableHead>
                  <TableHead>Time Out</TableHead>
                  <TableHead className="hidden md:table-cell">Total Hours</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage
                            src={log.avatarUrl}
                            alt={log.name}
                            data-ai-hint="person face"
                          />
                          <AvatarFallback>
                            {log.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{log.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{log.timeIn}</TableCell>
                    <TableCell>{log.timeOut}</TableCell>
                    <TableCell className="hidden md:table-cell">{log.totalHours}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          log.status === "On Time" ? "default" :
                          log.status === "Late" ? "secondary" :
                          log.status === "Overtime" ? "outline" :
                          "destructive"
                        }
                      >
                        {log.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Geolocation Tracking</CardTitle>
                <CardDescription>Live view of employee check-in locations.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full">
                    <Image 
                      src="https://placehold.co/600x400.png"
                      alt="Geolocation map of employee check-ins"
                      fill
                      className="rounded-md object-cover"
                      data-ai-hint="world map"
                    />
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
