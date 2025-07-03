"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users,
  Briefcase,
  Wallet,
  BarChart3,
  Settings,
  Building
} from "lucide-react";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/employees", label: "Employees", icon: Users },
  { href: "/admin/recruitment", label: "Recruitment", icon: Briefcase },
  { href: "/admin/payroll", label: "Payroll", icon: Wallet },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 shrink-0 items-center gap-2.5 border-b px-4">
        <Building className="h-8 w-8 text-primary" />
        <div className="group-data-[collapsible=icon]:hidden">
          <span className="font-headline text-xl font-semibold">EmpowerHub</span>
          <span className="text-xs text-muted-foreground ml-2">Admin</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <SidebarMenu className="p-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === link.href || (link.href !== "/admin/dashboard" && pathname.startsWith(link.href))}
                  className="w-full"
                  tooltip={link.label}
                >
                  <Link href={link.href}>
                    <Icon className="h-5 w-5" />
                    <span className="truncate">{link.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </div>
    </div>
  );
}
