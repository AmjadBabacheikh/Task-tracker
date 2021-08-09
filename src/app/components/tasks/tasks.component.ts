import { Component, OnInit } from '@angular/core';
import {TASKS} from "../../task-mock";
import {Task} from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]=TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
