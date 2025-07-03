"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building, 
  LayoutDashboard, 
  Users,
  GanttChartSquare, 
  Megaphone, 
  BotMessageSquare, 
  Settings,
  ClipboardCheck,
  Wallet,
  CalendarClock,
  BarChart3,
  UserPlus
} from "lucide-react";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

const links = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/employees", label: "Employee Management", icon: Users },
  { href: "/attendance", label: "Attendance Management", icon: ClipboardCheck },
  { href: "/leave", label: "Leave Management", icon: GanttChartSquare },
  { href: "/payroll", label: "Payroll & Compensation", icon: Wallet },
  { href: "/timesheet", label: "Timesheet & Schedule", icon: CalendarClock },
  { href: "/reports", label: "Reports & Analytics", icon: BarChart3 },
  { href: "/recruitment", label: "Recruitment / Onboarding", icon: UserPlus },
  { href: "/requests", label: "Requests & Approvals", icon: BotMessageSquare },
  { href: "/announcements", label: "Announcements", icon: Megaphone },
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
