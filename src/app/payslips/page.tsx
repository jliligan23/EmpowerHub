import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";

const payslipHistory = [
    { period: "July 2024", gross: "₱20,000.00", deductions: "₱1,220.00", net: "₱18,780.00" },
    { period: "June 2024", gross: "₱20,000.00", deductions: "₱1,220.00", net: "₱18,780.00" },
    { period: "May 2024", gross: "₱18,000.00", deductions: "₱1,100.00", net: "₱16,900.00" },
    { period: "April 2024", gross: "₱18,000.00", deductions: "₱1,100.00", net: "₱16,900.00" },
];

export default function MyPayslipsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight">My Payslips</h1>
                <p className="text-muted-foreground">View and download your monthly payslips.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Payslip History</CardTitle>
                    <CardDescription>A record of your monthly compensation.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Pay Period</TableHead>
                                <TableHead>Gross Pay</TableHead>
                                <TableHead>Deductions</TableHead>
                                <TableHead>Net Pay</TableHead>
                                <TableHead><span className="sr-only">Actions</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {payslipHistory.map((item) => (
                                <TableRow key={item.period}>
                                    <TableCell className="font-medium">{item.period}</TableCell>
                                    <TableCell>{item.gross}</TableCell>
                                    <TableCell>{item.deductions}</TableCell>
                                    <TableCell className="font-semibold">{item.net}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm">
                                            <Download className="mr-2 h-4 w-4" />
                                            Download
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
