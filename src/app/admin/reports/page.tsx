"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Download, Users, LineChart as LineChartIcon, PieChart as PieChartIcon, BarChart3 } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Cell
} from "recharts";

// Data for Attendance Analytics
const attendanceData = [
  { month: "Jan", present: 4000, absent: 2400 },
  { month: "Feb", present: 3000, absent: 1398 },
  { month: "Mar", present: 2000, absent: 1800 },
  { month: "Apr", present: 2780, absent: 1908 },
  { month: "May", present: 1890, absent: 2800 },
  { month: "Jun", present: 2390, absent: 1800 },
  { month: "Jul", present: 3490, absent: 1300 },
];

const attendanceChartConfig = {
    present: { label: "Present", color: "hsl(var(--chart-2))" },
    absent: { label: "Absent", color: "hsl(var(--chart-5))" },
};

// Data for Employee Turnover
const turnoverData = [
  { month: "Jan", hired: 10, resigned: 2 },
  { month: "Feb", hired: 12, resigned: 3 },
  { month: "Mar", hired: 8, resigned: 1 },
  { month: "Apr", hired: 15, resigned: 4 },
  { month: "May", hired: 7, resigned: 2 },
  { month: "Jun", hired: 11, resigned: 5 },
];

const turnoverChartConfig = {
    hired: { label: "Hired", color: "hsl(var(--chart-1))" },
    resigned: { label: "Resigned", color: "hsl(var(--destructive))" },
};

// Data for Salary Distribution
const salaryData = [
  { range: "₱15k-₱25k", count: 45 },
  { range: "₱25k-₱40k", count: 58 },
  { range: "₱40k-₱60k", count: 32 },
  { range: "₱60k-₱80k", count: 18 },
  { range: "₱80k+", count: 12 },
];
const salaryChartConfig = {
    count: { label: "Employee Count", color: "hsl(var(--chart-3))" },
};

// Data for Leave Analysis
const leaveData = [
  { name: "Vacation", value: 400 },
  { name: "Sick", value: 300 },
  { name: "Personal", value: 150 },
  { name: "Unpaid", value: 100 },
];

const leaveChartConfig = {
    value: { label: "Days" },
    vacation: { label: "Vacation", color: "hsl(var(--chart-1))" },
    sick: { label: "Sick", color: "hsl(var(--chart-2))" },
    personal: { label: "Personal", color: "hsl(var(--chart-3))" },
    unpaid: { label: "Unpaid", color: "hsl(var(--chart-5))" },
};


export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Reports & Analytics
          </h1>
          <p className="text-muted-foreground">
            Visualize key HR metrics and exportable reports.
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Reports (PDF/Excel)
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Attendance Analytics
            </CardTitle>
            <CardDescription>Monthly attendance overview.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={attendanceChartConfig} className="h-[250px] w-full">
              <BarChart data={attendanceData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="present" fill="var(--color-present)" radius={4} />
                <Bar dataKey="absent" fill="var(--color-absent)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <LineChartIcon className="h-5 w-5 text-primary" />
                Employee Turnover
            </CardTitle>
            <CardDescription>Hiring vs. Resignation trends.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={turnoverChartConfig} className="h-[250px] w-full">
                <LineChart data={turnoverData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="hired" stroke="var(--color-hired)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="resigned" stroke="var(--color-resigned)" strokeWidth={2} dot={false} />
                </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Salary Distribution
            </CardTitle>
            <CardDescription>Breakdown of employees by salary range.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={salaryChartConfig} className="h-[250px] w-full">
              <BarChart data={salaryData} layout="vertical">
                <CartesianGrid horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="range" type="category" tickLine={false} axisLine={false} tickMargin={8} width={80} fontSize={12} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5 text-primary" />
                Leave Analysis
            </CardTitle>
            <CardDescription>Distribution of leave types requested this year.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-6">
            <ChartContainer config={leaveChartConfig} className="mx-auto aspect-square h-[200px]">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie data={leaveData} dataKey="value" nameKey="name" innerRadius={60} strokeWidth={5}>
                  <Cell name="Vacation" fill="var(--color-vacation)" />
                  <Cell name="Sick" fill="var(--color-sick)" />
                  <Cell name="Personal" fill="var(--color-personal)" />
                  <Cell name="Unpaid" fill="var(--color-unpaid)" />
                </Pie>
                <Legend />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
