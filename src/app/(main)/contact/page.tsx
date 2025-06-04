
import ContactForm from '@/components/sections/contact-form';
import { personalInfo, socialLinks } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button'; // Added this line

export const metadata: Metadata = {
  title: 'Contact | Ananya M.D.',
  description: "Get in touch with Ananya M.D. or connect via social media.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Get In Touch</h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Send Me a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Connect With Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground font-body">
              You can also find me on the following platforms:
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Button asChild variant="outline" className="w-full justify-start border-border hover:border-accent hover:bg-accent/10 group">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <link.icon className="h-5 w-5 mr-3 text-muted-foreground group-hover:text-accent transition-colors" />
                      <span className="text-foreground/80 group-hover:text-accent transition-colors">{link.name}</span>
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground pt-4">
              Email: <a href={`mailto:${personalInfo.email}`} className="text-accent hover:underline">{personalInfo.email}</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
