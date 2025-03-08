import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PRODUCTS, Product } from '../../../data/new-product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CreatorSectionComponent } from './creator-section/creator-section.component';
import { BrandSectionComponent } from './brand-section/brand-section.component';

@Component({
  selector: 'trend-section',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FontAwesomeModule,
    CreatorSectionComponent,
    BrandSectionComponent,
  ],
  templateUrl: './trend-section.component.html',
  styleUrl: './trend-section.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrendSectionComponent {
  products: Product[] = PRODUCTS.map((product) => ({
    ...product,
    isLiked: false,
  }));
  faHeart = faHeart;

  toggleLike(product: Product) {
    product.isLiked = !product.isLiked;
  }
}
