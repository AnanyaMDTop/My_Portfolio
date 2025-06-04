import ProjectCard from '@/components/sections/project-card';
import { projects } from '@/lib/portfolio-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Ananya M.D.',
  description: "Explore Ananya M.D.'s projects.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">My Projects</h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
          Here's a collection of projects I've worked on, showcasing my skills in various technologies and my passion for creating innovative solutions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}
