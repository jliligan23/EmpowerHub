import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";

const faqs = [
    {
        question: "How do I apply for a leave?",
        answer: "You can apply for leave through the 'Leave' page in the portal. Click on 'Apply for Leave', fill in the required details such as leave type and dates, and submit the form for approval."
    },
    {
        question: "How can I request a Certificate of Employment (COE)?",
        answer: "Navigate to the 'My Requests' page, select 'Certificate of Employment' as the request type, fill in the purpose, and submit. HR will process your request and notify you once it's ready."
    },
    {
        question: "When is the payroll cut-off?",
        answer: "The payroll cut-off is every 15th and 30th/31st of the month. Your salary will be credited to your account on these dates."
    }
]

export default function SupportPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight">Support & Helpdesk</h1>
                <p className="text-muted-foreground">Find answers to your questions or contact HR for assistance.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Frequently Asked Questions (FAQs)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact HR</CardTitle>
                            <CardDescription>Get in touch with the HR department directly.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button variant="outline" className="w-full justify-start gap-2">
                                <Mail className="h-4 w-4" /> hr@empowerhub.com
                            </Button>
                             <Button variant="outline" className="w-full justify-start gap-2">
                                <MessageCircle className="h-4 w-4" /> Live Chat with HR
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Submit a Ticket</CardTitle>
                             <CardDescription>For specific inquiries.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                             <Label htmlFor="inquiry-subject">Subject</Label>
                            <Input id="inquiry-subject" placeholder="e.g., Payroll Discrepancy" />
                            <Label htmlFor="inquiry-details">Details</Label>
                            <Textarea id="inquiry-details" placeholder="Describe your concern..." />
                            <Button className="w-full !mt-4">
                                <Send className="mr-2 h-4 w-4" />
                                Submit
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
