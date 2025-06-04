import Image from 'next/image';
import { personalInfo } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 md:py-16">
        <Avatar className="w-32 h-32 mx-auto mb-6 shadow-lg">
          <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} data-ai-hint="portrait person" />
          <AvatarFallback>{personalInfo.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-body mb-8">
          {personalInfo.tagline}
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/projects">View My Work <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <section>
        <Card className="shadow-lg border-transparent bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl font-headline">About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-foreground/80 font-body leading-relaxed">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Optional: A small featured project or call to action */}
      {/*
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Featured Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Highlight a key project here.</p>
          </CardContent>
        </Card>
      </section>
      */}
    </div>
  );
}
