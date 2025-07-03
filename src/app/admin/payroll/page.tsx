
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
    totalCost: "₱3,125,000.00",
    employees: 125,
    status: "Completed",
  },
  {
    id: "PAY-JUN24",
    payPeriod: "June 1 - 30, 2024",
    runDate: "2024-07-05",
    totalCost: "₱3,112,500.00",
    employees: 124,
    status: "Completed",
  },
  {
    id: "PAY-MAY24",
    payPeriod: "May 1 - 31, 2024",
    runDate: "2024-06-05",
    totalCost: "₱3,100,000.00",
    employees: 124,
    status: "Completed",
  },
];

const summaryCards = [
  { title: "This Month's Payroll", value: "₱3.12M", icon: DollarSign },
  { title: "Total Deductions", value: "₱260K", icon: FileMinus },
  { title: "Total Bonuses", value: "₱100K", icon: Gift },
  { title: "Next Payroll Date", value: "Aug 31, 2024", icon: CalendarCheck },
];

const employeeContributions = [
    {
      id: "EMP001",
      name: "John Doe",
      sss: "₱720.00",
      philhealth: "₱400.00",
      pagibig: "₱100.00",
    },
    {
      id: "EMP002",
      name: "Jane Smith",
      sss: "₱720.00",
      philhealth: "₱400.00",
      pagibig: "₱100.00",
    },
    {
      id: "EMP004",
      name: "Mary Johnson",
      sss: "₱720.00",
      philhealth: "₱400.00",
      pagibig: "₱100.00",
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
                  <TableHead>PhilHealth</TableHead>
                  <TableHead>Pag-IBIG</TableHead>
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
