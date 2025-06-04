import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Edit } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Ananya M.D.',
  description: "Admin panel for managing Ananya M.D.'s portfolio content.",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold font-headline mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground font-body">
          Welcome to the admin panel. Here you can manage your portfolio content.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-headline">
              <Sparkles className="h-5 w-5 text-primary" />
              Enhance Project Descriptions
            </CardTitle>
            <CardDescription className="font-body">
              Use AI to improve the clarity and impact of your project descriptions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/admin/enhance-project">Go to Enhancer</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-headline">
              <Edit className="h-5 w-5 text-primary" />
              Manage Content (Guide)
            </CardTitle>
            <CardDescription className="font-body">
              Update your bio, projects, and other information by editing the portfolio data file.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground font-body">
              To update your portfolio content, please edit the file located at:
              <code className="block bg-muted p-2 rounded-md my-2 text-xs">
                src/lib/portfolio-data.ts
              </code>
              This approach allows for direct control and versioning of your content.
            </p>
          </CardContent>
        </Card>

        {/* Placeholder for future admin features */}
        {/*
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-headline">
              Future Feature
            </CardTitle>
            <CardDescription>
              More content management tools will be available here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" disabled className="w-full">Coming Soon</Button>
          </CardContent>
        </Card>
        */}
      </div>
    </div>
  );
}
