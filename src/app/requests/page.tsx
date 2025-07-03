import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function MyRequestsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight">My Requests</h1>
                <p className="text-muted-foreground">Submit and track your requests for documents, schedule changes, and more.</p>
            </div>

            <Card>
                <form>
                    <CardHeader>
                        <CardTitle>Submit a New Request</CardTitle>
                        <CardDescription>Fill out the form below to submit your request to HR.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="request-type">Request Type</Label>
                            <Select>
                                <SelectTrigger id="request-type" aria-label="Select request type">
                                    <SelectValue placeholder="Select a request type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="coe">Certificate of Employment (COE)</SelectItem>
                                    <SelectItem value="payslip">Payslip Request</SelectItem>
                                    <SelectItem value="schedule-change">Change of Schedule</SelectItem>
                                    <SelectItem value="travel">Travel Approval</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="e.g., Request for Certificate of Employment" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="details">Details</Label>
                            <Textarea id="details" placeholder="Please provide all necessary details for your request..." rows={5} />
                        </div>
                    </CardContent>
                    <CardFooter>
                         <Button type="submit">Submit Request</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
