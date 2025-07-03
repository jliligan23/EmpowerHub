import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Bell, Mail, MessageSquare, PlusCircle } from "lucide-react";

const announcements = [
  {
    id: "ANNC001",
    title: "Quarterly Town Hall Meeting",
    content: "Join us for the Q3 town hall this Friday at 10:00 AM in the main conference room. We'll be discussing our progress and future goals.",
    date: "2024-07-28",
  },
  {
    id: "ANNC002",
    title: "System Maintenance Alert",
    content: "Please be advised that the HR portal will be undergoing scheduled maintenance on Saturday from 2:00 AM to 4:00 AM.",
    date: "2024-07-26",
  },
  {
    id: "ANNC003",
    title: "Welcome New Hires!",
    content: "Let's give a warm welcome to our new team members starting this week: Alice (Engineering) and Bob (Marketing).",
    date: "2024-07-25",
  },
];


export default function AnnouncementsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Notifications & Announcements
          </h1>
          <p className="text-muted-foreground">
            Manage company-wide news, events, and notification preferences.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Post Announcement
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
              <CardDescription>
                Latest company news and event reminders.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {announcements.map((item, index) => (
                  <li key={item.id}>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                    <p className="mt-2 text-sm">{item.content}</p>
                    {index < announcements.length - 1 && <Separator className="mt-6" />}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Choose how you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Notifications</span>
                </Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>SMS Alerts</span>
                </Label>
                <Switch id="sms-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span>Push Notifications</span>
                </Label>
                <Switch id="push-notifications" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
