import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {
  vogueChain: string[] = ['Home', 'Explore', 'Drop', 'More', 'Get Started'];

  dropdowns: { [key: string]: boolean } = {
    More: false,
  };
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user$.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  toggleDropdown(menu: string) {
    this.dropdowns[menu] = !this.dropdowns[menu];
  }

  getRouterLink(item: string): string {
    switch (item) {
      case 'Home':
        return '/';
      case 'Explore':
        return '/explore';
      case 'Drop':
        return '/drop';
      case 'Get Started':
        return '/sign-up';
      default:
        return '#';
    }
  }
}
