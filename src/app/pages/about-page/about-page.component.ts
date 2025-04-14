import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { PRODUCTS, Product } from '../../../data/team-data';

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
})
export class AboutPageComponent {
  products: Product[] = PRODUCTS;
}
