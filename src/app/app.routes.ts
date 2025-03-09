import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
];

export const appRouter = provideRouter(routes, withDebugTracing());
