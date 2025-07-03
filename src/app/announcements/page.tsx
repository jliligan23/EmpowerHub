import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
  {
    id: "ANNC004",
    title: "August Birthday Celebrants",
    content: "Happy birthday to all our August celebrants! We'll have a small celebration at the pantry this Friday afternoon.",
    date: "2024-07-24",
  },
];


export default function AnnouncementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Announcements
        </h1>
        <p className="text-muted-foreground">
          Stay updated with the latest company news, events, and policy updates.
        </p>
      </div>

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
  );
}
