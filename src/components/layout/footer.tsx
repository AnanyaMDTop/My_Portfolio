import Link from 'next/link';
import { personalInfo, socialLinks } from '@/lib/portfolio-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
