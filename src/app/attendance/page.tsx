"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Camera, Clock, Video } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const myLogs = [
    { date: "2024-07-29", timeIn: "08:55 AM", timeOut: "06:05 PM", total: "9h 10m", status: "On Time" },
    { date: "2024-07-28", timeIn: "09:15 AM", timeOut: "06:00 PM", total: "8h 45m", status: "Late" },
    { date: "2024-07-27", timeIn: "09:00 AM", timeOut: "07:30 PM", total: "10h 30m", status: "Overtime" },
];

export default function MyAttendancePage() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setHasCameraPermission(false);
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
        setHasCameraPermission(false);
        toast({
          variant: "destructive",
          title: "Camera Access Denied",
          description: "Please enable camera permissions in your browser settings.",
        });
      }
    };
    getCameraPermission();
  }, [toast]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">My Attendance</h1>
        <p className="text-muted-foreground">Track your daily time-in/out and view your logs.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Time In / Out with Selfie</CardTitle>
            <CardDescription>Capture your photo to log your attendance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-md border bg-muted">
                <video ref={videoRef} className="h-full w-full object-cover" autoPlay muted playsInline />
                {hasCameraPermission === false && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <Video className="h-12 w-12 text-muted-foreground" />
                        <p className="mt-2 text-sm text-muted-foreground">Camera access is required. Please allow permission in your browser.</p>
                    </div>
                )}
            </div>
            {hasCameraPermission === false && (
                <Alert variant="destructive">
                    <AlertTitle>Camera Access Required</AlertTitle>
                    <AlertDescription>Please allow camera access to use this feature.</AlertDescription>
                </Alert>
            )}
            <div className="grid grid-cols-2 gap-2">
                <Button disabled={!hasCameraPermission}><Clock className="mr-2 h-4 w-4" /> Time In</Button>
                <Button disabled={!hasCameraPermission} variant="outline"><Camera className="mr-2 h-4 w-4" /> Capture</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>My Recent Logs</CardTitle>
            <CardDescription>Your attendance history for the last few days.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time In</TableHead>
                  <TableHead>Time Out</TableHead>
                  <TableHead>Total Hours</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {myLogs.map((log) => (
                  <TableRow key={log.date}>
                    <TableCell className="font-medium">{log.date}</TableCell>
                    <TableCell>{log.timeIn}</TableCell>
                    <TableCell>{log.timeOut}</TableCell>
                    <TableCell>{log.total}</TableCell>
                    <TableCell>
                      <Badge variant={log.status === "On Time" ? "default" : log.status === "Late" ? "secondary" : "destructive"}>
                        {log.status}
                      </Badge>
                    </TableCell>
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
