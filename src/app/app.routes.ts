import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ContainerComponent } from './container/container.component';
import { ExploreComponent } from './explore/explore.component';
import { AuthGuardService } from './service/auth-guard.service';

export const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'explore',
    component: ExploreComponent,
  },
  { path: 'dashboard', component: ContainerComponent, canActivate: [AuthGuardService] },
];

export const appRouter = provideRouter(routes, withDebugTracing());
