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

  onSearch() {
    console.log('Search term:', this.searchTerm);
    console.log('Selected category:', this.selectedCategory);
    // Add your search logic here
  }
}
