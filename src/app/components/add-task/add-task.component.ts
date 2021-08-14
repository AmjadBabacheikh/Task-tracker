import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Task} from "../../Task"
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter();
  text:string;
  day:string;
  reminder:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert("Please fill the text input")
      return;
    }
    const newTask:Task={ 
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.onAddTask.emit(newTask); 

    this.day="";
    this.text="";
    this.reminder=false;
  }
}
