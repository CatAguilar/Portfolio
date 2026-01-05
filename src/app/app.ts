import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarGlobal } from './components/navbar-global/navbar-global';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarGlobal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';
}
