import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './container/navbar/navbar.component';
import { FooterComponent } from './container/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    SharedModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
})
export class AppComponent {
  title = 'VogueChain';
  
}
