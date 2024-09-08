import { Component, EventEmitter, Input, Output } from '@angular/core';
import {type User } from './user.model';

// type User = {
//   img: string,
//   name: string
// }



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) user!: User
  // nos permite emitir eventos... el nombre está claro
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  onSelectUser() {
    // deberiamos emitir el id pero esto es
    this.select.emit(this.user.name)
  }
}

// ng g c user   => crea el componente user (foldeer+files)
