import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";




@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterOutlet],
    // podriamos incluir un html pequeño directamnete
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
  })
export class Header {}