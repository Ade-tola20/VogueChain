import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})

export class MainMenuComponent {
  vogueChain: string[] = [
    'Home',
    'Explore',
    'Personal Collection',
    'Drop',
    'More',
  ];

  dropdowns: { [key: string]: boolean } = {
    More: false,
  };

  toggleDropdown(menu: string) {
    this.dropdowns[menu] = !this.dropdowns[menu];
  }
}
