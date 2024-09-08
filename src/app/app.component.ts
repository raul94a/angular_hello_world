import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { MOCK_USES } from './user/mock-uses';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = MOCK_USES
  selectedUserName?: string;

  get selectedUser() {
    return this.users.find((user) => user.name === this.selectedUserName)
  }

  isSelected(user?: User) : boolean{
    if(user === undefined || this.selectedUserName === undefined) return false
    return user.name == this.selectedUserName
  }

  onSelectUser(name: string) {
    this.selectedUserName = name    
  }
}
