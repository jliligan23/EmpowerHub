import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Briefcase,
  Calendar,
  ClipboardList,
  FileText,
  MoreHorizontal,
  PlusCircle,
  UserCheck,
} from "lucide-react";

const jobPostings = [
  {
    id: "JOB001",
    title: "Senior Frontend Developer",
    department: "Technology",
    applicants: 42,
  },
  {
    id: "JOB002",
    title: "Product Manager",
    department: "Product",
    applicants: 35,
  },
  {
    id: "JOB003",
    title: "HR Business Partner",
    department: "Human Resources",
    applicants: 18,
  },
];

const upcomingInterviews = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    time: "10:00 AM",
    avatarUrl: "https://placehold.co/100x100.png",
  },
  {
    name: "Bob Williams",
    role: "Backend Developer",
    time: "02:00 PM",
    avatarUrl: "https://placehold.co/100x100.png",
  },
  {
    name: "Charlie Brown",
    role: "UI/UX Designer",
    time: "04:30 PM",
    avatarUrl: "https://placehold.co/100x100.png",
  },
];

const onboardingChecklist = [
  {
    name: "Emily Clark",
    role: "Software Engineer",
    progress: 75,
    avatarUrl: "https://placehold.co/100x100.png",
  },
  {
    name: "Michael Scott",
    role: "Marketing Specialist",
    progress: 40,
    avatarUrl: "https://placehold.co/100x100.png",
  },
];

const recentApplicants = [
    {
      id: "APP001",
      name: "Olivia Martin",
      avatarUrl: "https://placehold.co/100x100.png",
      position: "Senior Frontend Developer",
      stage: "Interview",
    },
    {
      id: "APP002",
      name: "Liam Garcia",
      avatarUrl: "https://placehold.co/100x100.png",
      position: "Product Manager",
      stage: "Screening",
    },
    {
      id: "APP003",
      name: "Noah Rodriguez",
      avatarUrl: "https://placehold.co/100x100.png",
      position: "HR Business Partner",
      stage: "Offered",
    },
    {
      id: "APP004",
      name: "Emma Wilson",
      avatarUrl: "https://placehold.co/100x100.png",
      position: "Senior Frontend Developer",
      stage: "Rejected",
    },
];

function ApplicantTrackingTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead className="hidden sm:table-cell">Position</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {recentApplicants.map((applicant) => (
                    <TableRow key={applicant.id}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={applicant.avatarUrl} alt={applicant.name} data-ai-hint="person face" />
                                    <AvatarFallback>{applicant.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{applicant.name}</span>
                            </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">{applicant.position}</TableCell>
                        <TableCell>
                            <Badge variant={
                                applicant.stage === "Interview" ? "default" : 
                                applicant.stage === "Offered" ? "secondary" : 
                                applicant.stage === "Rejected" ? "destructive" : "outline"
                            }>{applicant.stage}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                           <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">More actions</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <FileText className="mr-2 h-4 w-4" />
                                        View Application
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Calendar className="mr-2 h-4 w-4" />
                                        Schedule Interview
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default function RecruitmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">
            Recruitment & Onboarding
          </h1>
          <p className="text-muted-foreground">
            Manage job postings, track applicants, and streamline onboarding.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Job Posting
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Job Postings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Open Job Postings
            </CardTitle>
            <CardDescription>
              Active job listings and their applicant counts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Position</TableHead>
                  <TableHead className="hidden sm:table-cell">Department</TableHead>
                  <TableHead className="text-right">Applicants</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobPostings.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell className="hidden sm:table-cell">{job.department}</TableCell>
                    <TableCell className="text-right">{job.applicants}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        View Applicants
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Upcoming Interviews */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Interviews
            </CardTitle>
            <CardDescription>Scheduled for today.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingInterviews.map((interview) => (
              <div key={interview.name} className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={interview.avatarUrl}
                    alt={interview.name}
                    data-ai-hint="person face"
                  />
                  <AvatarFallback>{interview.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{interview.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {interview.role}
                  </p>
                </div>
                <div className="text-sm font-semibold text-muted-foreground">
                  {interview.time}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Applicant Tracking */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-primary" />
                    Applicant Tracking
                </CardTitle>
                <CardDescription>A list of recent candidates in the pipeline.</CardDescription>
            </CardHeader>
            <CardContent>
                <ApplicantTrackingTable />
            </CardContent>
        </Card>

        {/* New Hire Onboarding */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              New Hire Onboarding
            </CardTitle>
            <CardDescription>
              Track the onboarding progress of new team members.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {onboardingChecklist.map((hire) => (
              <div key={hire.name}>
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={hire.avatarUrl}
                      alt={hire.name}
                      data-ai-hint="person face"
                    />
                    <AvatarFallback>{hire.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{hire.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {hire.role}
                    </p>
                  </div>
                   <div className="text-sm font-medium text-muted-foreground">
                        {hire.progress}%
                    </div>
                </div>
                <Progress value={hire.progress} className="mt-2 h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
