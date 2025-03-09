import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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
  selectedDay: string = ''; // Change from null to ''
  selectedYear: string = ''; // Change from null to ''

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  email: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    const user = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
    };

    const response = this.authService.register(user);
    if (response === 'User registered successfully') {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = response;
    }
  }
}
