import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import {PRODUCTS, Product} from '../../../data/creators-data';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {
  selectedButtonIndex: number = 0;

  buttons = [
    'Trending',
    'All Fashion NFTs',
    'Art',
    'Fashion',
    'Creators',
    'Brands',
  ];

  selectButton(index: number) {
    this.selectedButtonIndex = index;
  }

  products: Product[] = PRODUCTS.map((product) => ({
    ...product,
    isLiked: false,
    isFollowed: false,
  }));

  toggleFollow(product: Product) {
    product.isFollowed = !product.isFollowed;
  }
}
