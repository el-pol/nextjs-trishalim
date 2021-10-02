import { Skill } from "./skill";

export interface Project {
  title: string;
  link: string;
  imageUrl: string;
  description: string;
  skills?: Array<Skill>;
}