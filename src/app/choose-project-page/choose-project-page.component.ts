import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-project-page',
  templateUrl: './choose-project-page.component.html',
  styleUrls: ['./choose-project-page.component.css']
})
export class ChooseProjectPageComponent implements OnInit {
  name = 'John Cena';
  conpanyName = 'WWE';
  jobTitle = 'Wrestler';
  location = 'USA';
  selfIntroduction = '我是大帥哥';
  constructor() { }

  ngOnInit(): void {
  }

}
