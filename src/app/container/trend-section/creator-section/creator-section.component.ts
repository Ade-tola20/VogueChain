import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { PRODUCTS, Product } from '../../../../data/creators-data';

@Component({
  selector: 'creator-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './creator-section.component.html',
  styleUrl: './creator-section.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreatorSectionComponent {
  products: Product[] = PRODUCTS.map((product) => ({
    ...product,
    isLiked: false,
    isFollowed: false, // Add a property to track follow status
  }));

  toggleFollow(product: Product) {
    product.isFollowed = !product.isFollowed;
  }
}
