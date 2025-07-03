import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, File, Home, Mail, Pen, Phone, User } from "lucide-react";

const documents = [
    { name: "Employment Contract.pdf", icon: File },
    { name: "SSS ID.png", icon: File },
    { name: "Passport.pdf", icon: File },
]

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-primary to-accent" />
        <CardHeader className="flex-row items-start gap-4 -mt-16 border-0 p-4">
          <Avatar className="h-24 w-24 border-4 border-background">
            <AvatarImage src="https://placehold.co/100x100.png" alt="Alex" data-ai-hint="person face" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="pt-16">
            <CardTitle className="font-headline text-2xl">Alex Doe</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
          <Button variant="outline" size="icon" className="ml-auto mt-16">
            <Pen className="h-4 w-4" />
            <span className="sr-only">Edit Profile</span>
          </Button>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><User className="h-5 w-5 text-primary" /> Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">alex.doe@example.com</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">+63 917 123 4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">123 Main St, Quezon City, Philippines</span>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Briefcase className="h-5 w-5 text-primary" /> Employment Details</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                     <div>
                        <p className="text-sm text-muted-foreground">Employee ID</p>
                        <p className="font-medium">EMP001</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Department</p>
                        <p className="font-medium">Technology</p>
                    </div>
                     <div>
                        <p className="text-sm text-muted-foreground">Date Hired</p>
                        <p className="font-medium">January 15, 2022</p>
                    </div>
                     <div>
                        <p className="text-sm text-muted-foreground">Manager</p>
                        <p className="font-medium">Jane Smith</p>
                    </div>
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>My Documents</CardTitle>
                <CardDescription>View and manage your uploaded documents.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {documents.map(({ name, icon: Icon }, i) => (
                    <div key={i} className="flex items-center justify-between rounded-md border p-3">
                        <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5 text-muted-foreground" />
                            <span className="text-sm font-medium">{name}</span>
                        </div>
                        <Button variant="outline" size="sm">Download</Button>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>

    </div>
  );
}
