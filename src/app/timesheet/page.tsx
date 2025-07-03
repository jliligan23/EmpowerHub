"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { Clock, Home } from "lucide-react";
import * as React from "react";

const overtimeRequests = [
  {
    id: "OT001",
    date: "2024-07-28",
    hours: "2",
    reason: "Urgent bug fix for production.",
    status: "Approved",
  },
  {
    id: "OT002",
    date: "2024-07-29",
    hours: "3",
    reason: "Completing project deliverables.",
    status: "Pending",
  },
];

const wfhLogs = [
  {
    id: "WFH001",
    date: "2024-07-25",
    status: "Full Day",
  },
  {
    id: "WFH002",
    date: "2024-07-26",
    status: "Half Day (AM)",
  },
];

export default function TimesheetPage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="font-headline text-3xl font-bold tracking-tight">
                        My Schedule
                    </h1>
                    <p className="text-muted-foreground">
                        Manage your work schedule, request overtime, and log remote work.
                    </p>
                </div>
                <div className="flex shrink-0 gap-2">
                    <Button variant="outline">
                        <Clock className="mr-2 h-4 w-4" />
                        Request Overtime
                    </Button>
                    <Button>
                        <Home className="mr-2 h-4 w-4" />
                        Log Work From Home
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>My Shift Calendar</CardTitle>
                            <CardDescription>
                                Your work schedule for the month. Click on a date to view details.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center p-2 sm:p-4">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border"
                            />
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>My Overtime Requests</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead className="text-right">Hours</TableHead>
                                        <TableHead className="text-right">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {overtimeRequests.map((req) => (
                                        <TableRow key={req.id}>
                                            <TableCell>{req.date}</TableCell>
                                            <TableCell className="text-right">{req.hours}</TableCell>
                                            <TableCell className="text-right">
                                                <Badge
                                                    variant={
                                                        req.status === "Approved"
                                                            ? "default"
                                                            : req.status === "Pending" ? "secondary" : "destructive"
                                                    }
                                                >
                                                    {req.status}
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
                            <CardTitle>My Work-from-Home Logs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead className="text-right">Type</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {wfhLogs.map((log) => (
                                        <TableRow key={log.id}>
                                            <TableCell>{log.date}</TableCell>
                                            <TableCell className="text-right">{log.status}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
