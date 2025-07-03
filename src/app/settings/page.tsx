import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, KeyRound, LogOut, Mail, MessageSquare } from "lucide-react";

export default function MySettingsPage() {
    return (
        <div className="space-y-6">
             <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight">My Settings</h1>
                <p className="text-muted-foreground">Manage your account and notification preferences.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><KeyRound className="h-5 w-5 text-primary" /> Change Password</CardTitle>
                        <CardDescription>For security, choose a strong, unique password.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Update Password</Button>
                    </CardFooter>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Bell className="h-5 w-5 text-primary" /> Notification Preferences</CardTitle>
                        <CardDescription>Choose how you receive company updates.</CardDescription>
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
                                <span>In-App Notifications</span>
                            </Label>
                            <Switch id="push-notifications" defaultChecked />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Preferences</Button>
                    </CardFooter>
                </Card>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><LogOut className="h-5 w-5 text-destructive" /> Logout</CardTitle>
                    <CardDescription>You will be returned to the login screen.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button variant="destructive">Logout of All Devices</Button>
                </CardFooter>
             </Card>
        </div>
    );
}
