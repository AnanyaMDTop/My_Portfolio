import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/portfolio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button }
from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imageUrl, tags, liveLink, sourceLink } = project;

  // Determine AI hint based on tags or title
  const aiHintKeywords = tags.length > 0 ? tags.slice(0, 2).join(' ').toLowerCase() : title.split(' ').slice(0, 2).join(' ').toLowerCase();

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={aiHintKeywords}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-headline mb-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground font-body mb-4 line-clamp-3">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-body">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-start space-x-3">
        {liveLink && (
          <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        {sourceLink && (
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
            <Link href={sourceLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
