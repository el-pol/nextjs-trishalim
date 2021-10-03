import { ReactNode } from "react";
import { Skill } from "./skill";

export interface Experience {
  position: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  description: ReactNode;
  skills: Array<Skill>;
  link: string;
}