import { Component } from '@angular/core';
import { SearchInputComponent } from './search-input/search-input.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'navbar',
  imports: [SearchInputComponent, MainMenuComponent, UserProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
