import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'login',
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule,
    FormsModule,
    ButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faGoogle = faGoogle;

  isPasswordVisible = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      alert('Login successful!');
      this.router.navigate(['/']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async signInWithGoogle() {
    try {
      const user = await this.authService.googleLogin();
      alert('Google login successful!');
      this.router.navigate(['/']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
