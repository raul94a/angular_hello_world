import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './types/task.type';
import { CreateTaskComponent } from "./create-task/create-task.component";




@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskComponent, CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  isAddingNewTask: boolean  = false
  tasks : Array<Task> = [
    {
      id: 't1',
      userId: 'Pedro Sánched',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'Yolanda Díaz',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'Yolanda Díaz',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];



  get selectedUserTasks() : Array<Task> {
    return this.tasks.filter((task) => task.userId === this.name)!;
  }

  removeTask(id: string): void{

    const newTasks = this.tasks.filter((t) => t.id !== id)
    this.tasks = [...newTasks]

  }

  onStartNewTask(){
    this.isAddingNewTask = true
  }

  addTask(task: Task){
    this.isAddingNewTask = false
    this.tasks.push(task)
  }
}
