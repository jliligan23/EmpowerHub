"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  User,
  GanttChartSquare, 
  Megaphone, 
  Settings,
  ClipboardCheck,
  Wallet,
  CalendarClock,
  FileQuestion,
  LifeBuoy,
  Building
} from "lucide-react";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

const links = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profile", label: "My Profile", icon: User },
  { href: "/attendance", label: "Attendance", icon: ClipboardCheck },
  { href: "/leave", label: "Leave", icon: GanttChartSquare },
  { href: "/payslips", label: "Payslips", icon: Wallet },
  { href: "/timesheet", label: "My Schedule", icon: CalendarClock },
  { href: "/requests", label: "My Requests", icon: FileQuestion },
  { href: "/announcements", label: "Announcements", icon: Megaphone },
  { href: "/support", label: "Support & Helpdesk", icon: LifeBuoy },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function MainSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 shrink-0 items-center gap-2.5 border-b px-4">
        <Building className="h-8 w-8 text-primary" />
        <div className="group-data-[collapsible=icon]:hidden">
          <span className="font-headline text-xl font-semibold">EmpowerHub</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <SidebarMenu className="p-2">
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))}
                className="w-full"
                tooltip={link.label}
              >
                <Link href={link.href}>
                  <link.icon className="h-5 w-5" />
                  <span className="truncate">{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>
    </div>
  );
}
