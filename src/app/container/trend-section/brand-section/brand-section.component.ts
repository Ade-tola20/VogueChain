import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { PRODUCTS, Product } from '../../../../data/brand-data';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'brand-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './brand-section.component.html',
  styleUrl: './brand-section.component.css',
})
export class BrandSectionComponent {
  products: Product[] = PRODUCTS.map((product) => ({
    ...product,
    isFollowed: false,
  }));

  constructor(private authService: AuthService, private router: Router) {}

  toggleFollow(product: Product) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      product.isFollowed = !product.isFollowed;
    }
  }
}
