"use client";

import { useFormStatus } from "react-dom";
import { submitRequest } from "./actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Bot, Loader2, MoreHorizontal } from "lucide-react";
import { useEffect, useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const initialState = {
  message: "",
  data: null,
  error: null,
};

const recentRequests = [
  {
    id: "REQ001",
    type: "Certificate of Employment",
    employee: "John Doe",
    date: "2024-07-30",
    status: "Pending",
  },
  {
    id: "REQ002",
    type: "Travel Approval",
    employee: "Jane Smith",
    date: "2024-07-29",
    status: "Approved",
  },
  {
    id: "REQ003",
    type: "Document Request (Payslip)",
    employee: "Peter Jones",
    date: "2024-07-28",
    status: "Rejected",
  },
  {
    id: "REQ004",
    type: "Travel Approval",
    employee: "Mary Johnson",
    date: "2024-07-27",
    status: "Pending",
  },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Bot className="mr-2 h-4 w-4" />
      )}
      Analyze Request
    </Button>
  );
}

export default function RequestAnalyzerPage() {
  const [state, formAction] = useActionState(submitRequest, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: state.error,
      });
    }
  }, [state.error, state.message, toast]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Requests & Approvals
        </h1>
        <p className="text-muted-foreground">
          Analyze, track, and manage all employee requests, including travel,
          certificates, and documents.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Recent Requests</CardTitle>
              <CardDescription>
                Overview of submitted employee requests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">
                        {request.employee}
                      </TableCell>
                      <TableCell>{request.type}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {request.date}
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
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Approve</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
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

        <div className="lg:col-span-2">
          <form
            action={formAction}
            className="flex h-full flex-col rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <CardHeader>
              <CardTitle>AI Request Analyzer</CardTitle>
              <CardDescription>
                Paste a request to categorize and prioritize it automatically.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col gap-4">
              <div className="grid w-full flex-grow gap-1.5">
                <Label htmlFor="requestText" className="sr-only">
                  Employee Request
                </Label>
                <Textarea
                  placeholder="e.g., 'I need to request a certificate of employment for a visa application that is due next week...'"
                  id="requestText"
                  name="requestText"
                  required
                  className="h-full min-h-[100px]"
                />
              </div>

              {state.data ? (
                <div className="space-y-2">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Category
                    </h3>
                    <p className="font-semibold">{state.data.category}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Priority
                    </h3>
                    <Badge
                      variant={
                        state.data.priority === "High"
                          ? "destructive"
                          : state.data.priority === "Medium"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {state.data.priority}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Reasoning
                    </h3>
                    <p className="text-xs italic text-muted-foreground">
                      {state.data.urgencyReason}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex h-full min-h-[100px] items-center justify-center rounded-lg border border-dashed">
                  <div className="text-center text-muted-foreground">
                    <Bot className="mx-auto h-8 w-8" />
                    <p className="mt-2 text-sm">
                      Analysis results appear here.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </div>
      </div>
    </div>
  );
}
