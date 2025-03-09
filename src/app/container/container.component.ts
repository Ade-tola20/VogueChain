import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { CollectionSectionComponent } from './collection-section/collection-section.component';
import { TrendSectionComponent } from './trend-section/trend-section.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    CollectionSectionComponent,
    TrendSectionComponent,
    CtaComponent,
    FooterComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
