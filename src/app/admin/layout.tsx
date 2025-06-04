"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sparkles, LayoutDashboard } from 'lucide-react'; // Added LayoutDashboard
import {
  SidebarProvider,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarInset,
  SidebarContent,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { ADMIN_NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const iconMap: { [key: string]: React.ElementType } = {
  Home: LayoutDashboard, // Using LayoutDashboard for "Dashboard"
  Sparkles: Sparkles,
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-muted/40">
        <Sidebar className="border-r" collapsible="icon">
          <SidebarHeader className="p-4 flex items-center justify-between">
             <Link href="/admin" className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-semibold text-sidebar-foreground group-data-[state=collapsed]:hidden">
                Admin
                </span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {ADMIN_NAV_LINKS.map((link) => {
                const IconComponent = iconMap[link.iconName] || Home;
                return (
                  <SidebarMenuItem key={link.href}>
                    <Link href={link.href} passHref legacyBehavior>
                      <SidebarMenuButton
                        isActive={pathname === link.href}
                        tooltip={{children: link.label, className: "font-body"}}
                        className="font-body"
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="group-data-[state=collapsed]:hidden">{link.label}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex-1 bg-background">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-4">
            {/* Mobile Sidebar Trigger, only visible if sidebar is collapsible */}
            <div className="md:hidden">
                 <SidebarTrigger asChild>
                    <Button size="icon" variant="outline">
                        <Home className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                 </SidebarTrigger>
            </div>
            {/* Breadcrumbs or page title could go here */}
          </header>
          <main className="p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
