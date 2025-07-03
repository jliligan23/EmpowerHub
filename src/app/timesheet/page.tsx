import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

export default function TimesheetPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CalendarClock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl">Timesheet & Schedule</CardTitle>
          <CardDescription>This page is under construction.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Shift scheduling and timesheet logs will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
