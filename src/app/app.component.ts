import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { MOCK_USES } from './user/mock-uses';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = MOCK_USES
}
