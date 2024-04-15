import { Component, Input, OnInit } from '@angular/core';
import Skill from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent implements OnInit {
  @Input()
  newSkill: Skill = {
    name: '',
    logo: '',
    site: '',
  };

  ngOnInit(): void {}
}
