import Skill from './skill.model';
export default interface Developer {
  lastname: string;
  firstname: string;
  age: number;
  gender: string;
  bio: string;
  skills: Skill[];
}
