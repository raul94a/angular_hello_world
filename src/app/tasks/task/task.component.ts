import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../types/task.type';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required : true}) task!: Task

  @Output() complete = new EventEmitter<string>();
  @Output() create = new EventEmitter<Task>()

  onComplete(){
    this.complete.emit(this.task.id)
  }

  onNewTask(task: Task){
    this.create.emit(task)
  }

}
