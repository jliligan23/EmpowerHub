import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  ClipboardCheck,
  CalendarClock,
  Gift,
  UserPlus,
  Megaphone,
  ArrowRight,
  Briefcase,
  UserCheck,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const overviewCards = [
  { title: "Total Employees", value: "1,250", icon: Users },
  { title: "Attendance Today", value: "1,120", icon: ClipboardCheck },
  { title: "Pending Requests", value: "32", icon: CalendarClock },
  { title: "Upcoming Birthdays", value: "5", icon: Gift },
];

const recentLeaveRequests = [
  { name: "John Doe", type: "Vacation", status: "Pending" },
  { name: "Jane Smith", type: "Sick Leave", status: "Approved" },
  { name: "Peter Jones", type: "Personal", status: "Pending" },
  { name: "Mary Johnson", type: "Vacation", status: "Rejected" },
];

const attendanceData = [
  { day: "Mon", present: 1120, absent: 130 },
  { day: "Tue", present: 1150, absent: 100 },
  { day: "Wed", present: 1100, absent: 150 },
  { day: "Thu", present: 1180, absent: 70 },
  { day: "Fri", present: 1050, absent: 200 },
  { day: "Sat", present: 300, absent: 950 },
  { day: "Sun", present: 250, absent: 1000 },
];

const chartConfig = {
  present: {
    label: "Present",
    color: "hsl(var(--chart-2))",
  },
  absent: {
    label: "Absent",
    color: "hsl(var(--chart-5))",
  },
};

const upcomingInterviews = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    time: "10:00 AM",
    avatarUrl: "https://placehold.co/100x100.png",
  },
  {
    name: "Bob Williams",
    role: "Backend Developer",
    time: "02:00 PM",
    avatarUrl: "https://placehold.co/100x100.png",
  },
  {
    name: "Charlie Brown",
    role: "UI/UX Designer",
    time: "04:30 PM",
    avatarUrl: "https://placehold.co/100x100.png",
  },
];

const recentAnnouncements = [
  { title: "Quarterly Town Hall Meeting", date: "July 25, 2024" },
  { title: "New Health Insurance Policy Update", date: "July 22, 2024" },
  { title: "Office Renovation Schedule", date: "July 20, 2024" },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Overview Cards */}
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Attendance Analytics */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Attendance Analytics (Last 7 Days)</CardTitle>
            <CardDescription>
              An overview of employee attendance.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <BarChart accessibilityLayer data={attendanceData}>
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Bar dataKey="present" fill="var(--color-present)" radius={4} />
                <Bar dataKey="absent" fill="var(--color-absent)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" /> Add New Employee
            </Button>
            <Button variant="outline">
              <Megaphone className="mr-2 h-4 w-4" /> Post Announcement
            </Button>
            <Button variant="outline">
              <Briefcase className="mr-2 h-4 w-4" /> Manage Leave Types
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Leave Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Leave Requests</CardTitle>
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
                {recentLeaveRequests.map((req) => (
                  <TableRow key={req.name}>
                    <TableCell className="font-medium">{req.name}</TableCell>
                    <TableCell>{req.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          req.status === "Approved"
                            ? "default"
                            : req.status === "Rejected"
                            ? "destructive"
                            : "secondary"
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

        {/* Upcoming Interviews */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Interviews</CardTitle>
            <CardDescription>Scheduled for today.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingInterviews.map((interview) => (
              <div key={interview.name} className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={interview.avatarUrl}
                    alt={interview.name}
                    data-ai-hint="person face"
                  />
                  <AvatarFallback>{interview.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{interview.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {interview.role}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {interview.time}
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full !mt-4">
              <UserCheck className="mr-2 h-4 w-4" /> View All Applicants
            </Button>
          </CardContent>
        </Card>

        {/* Recent Announcements */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
            <CardDescription>Latest company news.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentAnnouncements.map((announcement) => (
                <li key={announcement.title} className="flex flex-col">
                  <span className="font-medium text-sm">
                    {announcement.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {announcement.date}
                  </span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full !mt-4">
              <ArrowRight className="mr-2 h-4 w-4" /> View All
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
