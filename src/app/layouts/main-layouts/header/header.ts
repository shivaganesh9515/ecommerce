import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select2, Select2Data } from 'ng-select2-component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    Select2,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isBrowser: boolean = false;
  selectedCategory: string = '';
  searchTerm: string = '';
  categoryDropdownVisible = false;
  isActive = false;

  isMobileMenuActive: boolean = false;
  activeIndex: any | null = null;
  windowWidth: number = 0;

  constructor(private router: Router) {}

  categories: Select2Data = [
    { value: '', label: 'All categories' },
    { value: 'grocery', label: 'Grocery' },
    { value: 'breakfast', label: 'Breakfast & Dairy' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'milk', label: 'Milks and Dairies' },
    { value: 'pet', label: 'Pet Foods & Toy' },
    { value: 'bakery', label: 'Breads & Bakery' },
    { value: 'seafood', label: 'Fresh Seafood' },
    { value: 'frozen', label: 'Fronzen Foods' },
    { value: 'noodles', label: 'Noodles & Rice' },
    { value: 'icecream', label: 'Ice Cream' },
  ];

  categorie = [
    {
      name: 'Vegetables',
      icon: 'assets/images/icon/category-1.png',
      route: 'shop',
    },
    {
      name: 'Milk & Cake',
      icon: 'assets/images/icon/category-2.png',
      route: 'shop',
    },
    {
      name: 'Grocery',
      icon: 'assets/images/icon/category-3.png',
      route: 'shop',
    },
    {
      name: 'Beauty',
      icon: 'assets/images/icon/category-4.png',
      route: 'shop',
    },
    {
      name: 'Wines & Drinks',
      icon: 'assets/images/icon/category-5.png',
      route: 'shop',
    },
    {
      name: 'Snacks',
      icon: 'assets/images/icon/category-6.png',
      route: 'shop',
    },
    { name: 'Juice', icon: 'assets/images/icon/category-7.png', route: 'shop' },
    {
      name: 'Fruits',
      icon: 'assets/images/icon/category-8.png',
      route: 'shop',
    },
    {
      name: 'Tea & Coffee',
      icon: 'assets/images/icon/category-9.png',
      route: 'shop',
    },
  ];

  onSearch() {
    console.log('Search term:', this.searchTerm);
    console.log('Selected category:', this.selectedCategory);
    // Add your search logic here
  }

  toggleCategoryDropdown() {
    this.isActive = !this.isActive;
    this.categoryDropdownVisible = !this.categoryDropdownVisible;
  }

  isParentActive(routes: string[]): boolean {
    const currentUrl = this.router.url;
    return routes.some((route) =>
      route !== '/' ? currentUrl.startsWith(route) : currentUrl === route
    );
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  openMobileMenu() {
    this.isMobileMenuActive = true;
    document.body.classList.add('scroll-hide-sm');
  }

  closeMobileMenu() {
    this.isMobileMenuActive = false;
    document.body.classList.remove('scroll-hide-sm');
  }

  onResize() {
    this.windowWidth = window.innerWidth;
  }

  toggleSubmenu(index: string) {
    if (this.windowWidth < 992) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    }
  }
}
