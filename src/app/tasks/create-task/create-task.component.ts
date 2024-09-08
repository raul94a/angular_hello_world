import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../types/task.type';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() create = new EventEmitter<Task>();
  title: string = '';
  date: string= '';
  summary: string= '';

  
  onCreateTask() {

      if(this.date.length == 0 || this.title.length == 0 || this.summary.length == 0) return
      const task = {
        id: 'new-id-' + this.title,
        title: this.title,
        summary: this.summary,
        userId: this.userId,
        dueDate: this.date,
      };
      this.create.emit(task);
      console.log(`se ha emitidio la tarea ${task}`);
    }
}
