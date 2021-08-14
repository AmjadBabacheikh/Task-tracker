import { Component, OnInit } from '@angular/core';
import {Task} from "../../Task";
import {TaskService} from "../../services/task.service"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]=[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> this.tasks=tasks);
  }

  triggedDeleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=> this.tasks=this.tasks.filter(t=> t.id !== task.id));
  }

  triggedToggleTask(task:Task){
    task.reminder= !task.reminder;
    this.taskService.toggleTask(task).subscribe();
  }

  triggedAddTask(newTask:Task){
    this.taskService.addTask(newTask).subscribe((newTask)=>this.tasks.push(newTask));
  }

}
