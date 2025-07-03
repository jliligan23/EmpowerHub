import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ClipboardCheck } from "lucide-react";

export default function AttendancePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <ClipboardCheck className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl">Attendance Management</CardTitle>
          <CardDescription>This page is under construction.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Daily attendance logs and reports will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
