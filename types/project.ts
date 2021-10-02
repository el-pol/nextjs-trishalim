import { Skill } from "./Skill";

export interface Project {
  title: string;
  link: string;
  imageUrl: string;
  description: string;
  skills?: Array<Skill>;
}