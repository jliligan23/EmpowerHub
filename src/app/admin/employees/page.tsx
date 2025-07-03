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
  Download,
  MoreHorizontal,
  Pen,
  PlusCircle,
  Trash,
  Upload,
  UserX,
} from "lucide-react";
import dbConnect from "@/lib/dbConnect";
import Employee, { IEmployee } from "@/models/Employee";


// This is now an async Server Component
export default async function EmployeesPage() {
  let employees: IEmployee[] = [];
  try {
    await dbConnect();
    employees = await Employee.find({});
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    // Optionally handle the error, e.g., show a message to the user
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Employee Management
          </h1>
          <p className="text-muted-foreground">
            View, add, and manage all employees in your organization.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Employees</CardTitle>
          <CardDescription>
            A list of all employees in the system, fetched from your MongoDB database.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead className="hidden md:table-cell">Designation</TableHead>
                <TableHead className="hidden lg:table-cell">Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={employee.avatarUrl}
                            alt={employee.name}
                            data-ai-hint="person face"
                          />
                          <AvatarFallback>
                            {employee.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {employee.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{employee.designation}</TableCell>
                    <TableCell className="hidden lg:table-cell">{employee.department}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          employee.status === "Active"
                            ? "default"
                            : employee.status === "Inactive"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {employee.status}
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
                            <Pen className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <UserX className="h-8 w-8 text-muted-foreground" />
                      <p className="font-medium">No employees found.</p>
                      <p className="text-sm text-muted-foreground">
                        Add employees to your MongoDB collection to see them here.
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
