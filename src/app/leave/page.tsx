"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import {
  Calendar as CalendarIcon,
  CalendarDays,
  PlusCircle,
} from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

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
];

export default function MyLeavePage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            My Leave
          </h1>
          <p className="text-muted-foreground">
            Apply for leave, check your balances, and view your request
            history.
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Apply for Leave
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[480px]">
            <DialogHeader>
              <DialogTitle>Apply for Leave</DialogTitle>
              <DialogDescription>
                Fill out the form below to submit your leave request. Your
                remaining balances will be updated upon approval.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="leave-type" className="text-right">
                  Leave Type
                </Label>
                <Select>
                  <SelectTrigger id="leave-type" className="col-span-3">
                    <SelectValue placeholder="Select a leave type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual Leave</SelectItem>
                    <SelectItem value="sick">Sick Leave</SelectItem>
                    <SelectItem value="emergency">Emergency Leave</SelectItem>
                    <SelectItem value="unpaid">Unpaid Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="leave-dates" className="text-right">
                  Dates
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="leave-dates"
                      variant={"outline"}
                      className={cn(
                        "col-span-3 justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date range</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="reason" className="pt-2 text-right">
                  Reason
                </Label>
                <Textarea
                  id="reason"
                  placeholder="Please provide a brief reason for your leave."
                  className="col-span-3"
                  rows={4}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Submit Request</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
          <CardDescription>
            A record of your past and current leave requests.
          </CardDescription>
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
                    <Badge
                      variant={
                        item.status === "Approved"
                          ? "default"
                          : item.status === "Rejected"
                          ? "destructive"
                          : "secondary"
                      }
                    >
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
