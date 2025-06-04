export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
}
