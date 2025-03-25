import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PRODUCTS, Product } from '../../../data/product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'collection-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FontAwesomeModule],
  templateUrl: './collection-section.component.html',
  styleUrl: './collection-section.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CollectionSectionComponent {
  constructor(private authService: AuthService, private router: Router) {}

  navigateToPage(route: string) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([route]);
    } else {
      this.router.navigate(['/login']);
    }
  }
  allProducts: Product[] = PRODUCTS.filter(product => product.id <= 6).map((product) => ({
    ...product,
    isLiked: false,
  }));
  products: Product[] = [...this.allProducts];
  selectedButtonIndex: number = 0;
  faHeart = faHeart;

  buttons = [
    'All Collections',
    'Verified Brands',
    'Verified Artists',
    'New Drops',
  ];

  selectButton(index: number) {
    this.selectedButtonIndex = index;

    switch (index) {
      case 0:
        this.products = [...this.allProducts];
        break;
      case 1:
        this.products = this.allProducts.filter((product) => product.verifiedBrand);
        break;
      case 2:
        this.products = this.allProducts.filter((product) => product.verifiedArtist);
        break;
      case 3:
        this.products = this.allProducts.filter((product) => product.newdrop);
        break;
    }
  }

  toggleLike(product: Product) {
    product.isLiked = !product.isLiked;
  }
}
