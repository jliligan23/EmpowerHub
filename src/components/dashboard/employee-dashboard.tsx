import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, ArrowRight } from "lucide-react";

export default function EmployeeDashboard() {
  return (
    <div className="grid gap-6">
       <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Welcome back, Alex!</CardTitle>
          <CardDescription className="text-primary-foreground/80">You're doing great. Keep up the good work!</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              Attendance Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8h 15m</div>
            <p className="text-sm text-muted-foreground">Clocked in at 8:58 AM</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Time In / Out</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              Upcoming Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
             <p className="font-semibold">Vacation Leave</p>
             <p className="text-sm text-muted-foreground">July 25, 2024 - July 30, 2024</p>
          </CardContent>
          <CardFooter>
             <Button variant="outline" className="w-full">View My Schedule</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              Payslip Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Latest Payslip: June 2024</p>
            <p className="text-2xl font-bold">Ready to View</p>
          </CardContent>
           <CardFooter>
             <Button variant="secondary" className="w-full">
                View Payslips <ArrowRight className="ml-2 h-4 w-4" />
             </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
