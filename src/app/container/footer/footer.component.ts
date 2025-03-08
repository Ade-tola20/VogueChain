import { Component } from '@angular/core';
import { AboutFooterComponent } from './about-footer/about-footer.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { CompanyFooterComponent } from './company-footer/company-footer.component';

@Component({
  selector: 'footer',
  imports: [
    AboutFooterComponent,
    ContactFooterComponent,
    CompanyFooterComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
