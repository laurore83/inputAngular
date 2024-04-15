import { Component, OnInit } from '@angular/core';
import Developer from '../models/developer.model';
import Skill from '../models/skill.model';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css',
})
export class DeveloperComponent implements OnInit {
  newDeveloper: Developer = {
    lastname: 'doe',
    firstname: 'john',
    age: 0,
    gender: 'male',
    bio: 'jzengkj',
    skills: [],
  };
  skill1: Skill = {
    name: 'HTML',
    logo: 'html_logo.png',
    site: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  };

  skill2: Skill = {
    name: 'CSS',
    logo: 'css_logo.png',
    site: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  };

  skill3: Skill = {
    name: 'JavaScript',
    logo: 'js_logo.png',
    site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  };

  ngOnInit(): void {
    this.newDeveloper.skills = [this.skill1, this.skill2, this.skill3];
  }
}
