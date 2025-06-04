
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { personalInfo } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Ananya M.D.',
  description: "View and download Ananya M.D.'s resume.",
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">My Resume</h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body">
          Here you can view a snapshot of my resume or download the full PDF version.
        </p>
      </section>

      <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-center">Curriculum Vitae</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="aspect-[8.5/11] w-full max-w-2xl mx-auto rounded-md overflow-hidden shadow-md border border-border">
            <Image
              src="/resume.png" // Updated to use resume.png
              alt="Ananya M.D. Resume Preview"
              width={850}
              height={1100}
              className="object-contain w-full h-full"
              data-ai-hint="resume document"
            />
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={personalInfo.resumeUrl} download="Ananya_MD_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
