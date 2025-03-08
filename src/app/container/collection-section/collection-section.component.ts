import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PRODUCTS, Product } from '../../../data/product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'collection-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FontAwesomeModule],
  templateUrl: './collection-section.component.html',
  styleUrl: './collection-section.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CollectionSectionComponent {
  products: Product[] = PRODUCTS.map((product) => ({
    ...product,
    isLiked: false,
  }));
  selectedButtonIndex: number = 0;
  faHeart = faHeart;

  buttons = [
    'All Collections',
    'Verified Brands',
    'Verified Artists',
    'New Drops',
    'Live Shows',
  ];

  selectButton(index: number) {
    this.selectedButtonIndex = index;
  }

  toggleLike(product: Product) {
    product.isLiked = !product.isLiked;
  }
}
