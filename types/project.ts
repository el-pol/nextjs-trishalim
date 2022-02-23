import { Skill } from "./skill"
import { ReactNode } from "react"

export interface Project {
  title: string;
  link: string;
  imageUrl: string;
  description: string;
  skills?: Array<Skill>;
  slug: string;
  snippet?: string;
  images?: Array<string>;
  body?: ReactNode;
  links?: Array<string>;
}