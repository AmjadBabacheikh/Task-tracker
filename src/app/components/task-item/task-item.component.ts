import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Task} from "../../Task"
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes=faTimes;
  @Input() task:Task;
  @Output() taskDelete=new EventEmitter();
  @Output() toggleTask= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(task:Task){
    this.taskDelete.emit(task);
  }

  onToggle(task:Task){
      this.toggleTask.emit(task);
  }

}
