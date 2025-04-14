import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable(); // Observable to track user state

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      this.userSubject.next(user);
    });
  }

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    console.log('Logging out...');
    
    try {
      await signOut(this.auth);
      this.userSubject.next(null);
      console.log('User logged out successfully');

      localStorage.clear();
      sessionStorage.clear();
  
      setTimeout(() => {
        window.location.href = '/login';
      }, 100);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }
  
  async googleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      this.userSubject.next(result.user);
      console.log('Google sign-in success:', result.user);
      return result.user;
    } catch (error) {
      console.error('Google sign-in error:', error);
      throw error;
    }
  }
  
}
