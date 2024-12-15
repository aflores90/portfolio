import type { Tag } from '@/types/tags'

export interface Project {
  title: string
  description: string
  link: string,
  github?: string;
  tags: Tag[]
  image?: string
}
