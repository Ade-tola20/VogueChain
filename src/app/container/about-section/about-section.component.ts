import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'about-section',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {
  constructor(private authService: AuthService, private router: Router) {}

  navigateToPage(route: string) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([route]);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
