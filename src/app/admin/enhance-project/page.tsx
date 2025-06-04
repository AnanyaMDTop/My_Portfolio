import ProjectEnhancerForm from '@/components/sections/project-enhancer-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enhance Project Description | Admin | Ananya M.D.',
  description: "AI-powered tool to improve project descriptions for Ananya M.D.'s portfolio.",
};

export default function EnhanceProjectPage() {
  return (
    <div>
      <ProjectEnhancerForm />
    </div>
  );
}
