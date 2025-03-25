import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { PRODUCTS, Product } from '../../../../data/creators-data';
import { Router } from '@angular/router'; // ✅ Import Router for navigation
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'creator-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './creator-section.component.html',
  styleUrl: './creator-section.component.css',
})
export class CreatorSectionComponent {
  products: Product[] = PRODUCTS.filter(product => product.id <= 3).map((product) => ({
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
