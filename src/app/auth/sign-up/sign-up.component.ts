import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule,
    FormsModule,
    ButtonComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  isPasswordVisible = false;

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  years: number[] = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  selectedMonth: string = '';
  selectedDay: string = '';
  selectedYear: string = '';

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  email = '';
  firstName= '';
  lastName= '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  async signup() {
    try {
      await this.authService.register(this.email, this.password);
      alert('Registration successful!');
      this.router.navigate(['/login']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async signUpWithGoogle() {
    try {
      await this.authService.googleLogin(); 
      alert('Signed up with Google!');
      this.router.navigate(['/']); 
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
  
}
