import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'ix-navbar-global',
  imports: [RouterLink, RouterModule, MatIconModule],
  templateUrl: './navbar-global.html',
  styleUrl: './navbar-global.scss',
})
export class NavbarGlobal {
  isDark = true;

  toggleTheme(){
    this.isDark = !this.isDark;
    document.body.setAttribute(
      'data-theme',
      this.isDark? 'dark' : 'light'
    );
  }

}
