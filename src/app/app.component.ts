import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    ContainerComponent,
    SharedModule,
  ],
})
export class AppComponent {
  title = 'VogueChain';
}
