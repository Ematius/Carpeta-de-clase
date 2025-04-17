export type Film = {
  id: string;
  title: string;
  description?: string;
  releaseYear: number;
  rating?: number;
  director?: string;
  duration?: number;
  poster?: string;
  categories?: string[];
};
