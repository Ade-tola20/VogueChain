import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: any[] = []; // Temporary storage (replace with backend API)

  constructor() {}

  register(user: any): string {
    const existingUser = this.users.find((u) => u.email === user.email);
    if (existingUser) {
      return 'User already exists';
    }
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users)); // Save to local storage
    return 'User registered successfully';
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );
    return !!user;
  }
}
