"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleEmployeeLogin = () => {
    router.push("/dashboard");
  };

  const handleAdminLogin = () => {
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
                <Building className="h-10 w-10 text-primary" />
            </div>
          <CardTitle className="font-headline text-2xl">EmpowerHub</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
           <div className="flex flex-col space-y-2 pt-2">
             <Button onClick={handleEmployeeLogin} className="w-full">
              Sign in as Employee
            </Button>
            <Button onClick={handleAdminLogin} variant="outline" className="w-full">
              Sign in as Admin
            </Button>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
