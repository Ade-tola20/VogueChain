import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { routes } from './app/app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyAu6yBJ9qZ9TsSrGZiwuDkGHE6Mg9-q_z0',
  authDomain: 'voguechain-b60f0.firebaseapp.com',
  projectId: 'voguechain-b60f0',
  storageBucket: 'voguechain-b60f0.firebasestorage.app',
  messagingSenderId: '330149623748',
  appId: '1:330149623748:web:e189545af0e7101a61d691',
  measurementId: 'G-DLCFWJJ88B',
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
}).catch((err) => console.error(err));
