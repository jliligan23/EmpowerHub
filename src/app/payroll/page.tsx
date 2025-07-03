import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Download,
  MoreHorizontal,
  PlayCircle,
  FileText,
  DollarSign,
  CalendarCheck,
  Gift,
  FileMinus,
} from "lucide-react";

const payrollHistory = [
  {
    id: "PAY-JUL24",
    payPeriod: "July 1 - 31, 2024",
    runDate: "2024-08-05",
    totalCost: "$150,000.00",
    employees: 1250,
    status: "Completed",
  },
  {
    id: "PAY-JUN24",
    payPeriod: "June 1 - 30, 2024",
    runDate: "2024-07-05",
    totalCost: "$148,500.00",
    employees: 1245,
    status: "Completed",
  },
  {
    id: "PAY-MAY24",
    payPeriod: "May 1 - 31, 2024",
    runDate: "2024-06-05",
    totalCost: "$149,200.00",
    employees: 1240,
    status: "Completed",
  },
];

const summaryCards = [
  { title: "This Month's Payroll", value: "$150,000", icon: DollarSign },
  { title: "Total Deductions", value: "$12,500", icon: FileMinus },
  { title: "Total Bonuses", value: "$5,000", icon: Gift },
  { title: "Next Payroll Date", value: "Aug 31, 2024", icon: CalendarCheck },
];

const employeeContributions = [
    {
      id: "EMP001",
      name: "John Doe",
      sss: "$112.50",
      philhealth: "$75.00",
      pagibig: "$10.00",
    },
    {
      id: "EMP002",
      name: "Jane Smith",
      sss: "$112.50",
      philhealth: "$97.50",
      pagibig: "$10.00",
    },
    {
      id: "EMP004",
      name: "Mary Johnson",
      sss: "$112.50",
      philhealth: "$120.00",
      pagibig: "$10.00",
    },
];


export default function PayrollPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Payroll & Compensation
          </h1>
          <p className="text-muted-foreground">
            Manage payroll runs, view employee contributions, and generate payslips.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button>
            <PlayCircle className="mr-2 h-4 w-4" />
            Run New Payroll
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Reports
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Payroll History</CardTitle>
            <CardDescription>
              Overview of completed payroll runs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pay Period</TableHead>
                  <TableHead>Run Date</TableHead>
                  <TableHead className="hidden md:table-cell">Total Cost</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrollHistory.map((run) => (
                  <TableRow key={run.id}>
                    <TableCell className="font-medium">{run.payPeriod}</TableCell>
                    <TableCell>{run.runDate}</TableCell>
                    <TableCell className="hidden md:table-cell">{run.totalCost}</TableCell>
                    <TableCell>
                      <Badge variant={run.status === "Completed" ? "default" : "secondary"}>
                        {run.status}
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
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download Payslips
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

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Employee Contributions</CardTitle>
            <CardDescription>
              Breakdown of monthly statutory deductions.
            </CardDescription>
          </CardHeader>
          <CardContent>
          <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>SSS</TableHead>
                  <TableHead>PHIC</TableHead>
                  <TableHead>HDMF</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeeContributions.map((emp) => (
                  <TableRow key={emp.id}>
                    <TableCell className="font-medium">{emp.name}</TableCell>
                    <TableCell>{emp.sss}</TableCell>
                    <TableCell>{emp.philhealth}</TableCell>
                    <TableCell>{emp.pagibig}</TableCell>
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
