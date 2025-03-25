import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'cta',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
})
export class CtaComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  navigateToPage() {
    if (this.isLoggedIn) {
      this.router.navigate(['/explore']);
    } else {
      this.router.navigate(['/sign-up']);
    }
  }
}
