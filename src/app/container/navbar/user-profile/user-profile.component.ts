import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  isDropdownOpen = false;
  isLoggedIn = false;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.user$.subscribe((user) => {
      this.isLoggedIn = !!user;
      console.log('User state changed:', this.isLoggedIn);
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.authService.logout();
  }
}
