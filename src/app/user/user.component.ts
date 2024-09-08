import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // nos permite emitir eventos... el nombre está claro
  @Output() select = new EventEmitter();
  onSelectUser() {
    // deberiamos emitir el id pero esto es demo
    this.select.emit(this.name)
  }
}

// ng g c user   => crea el componente user (foldeer+files)
