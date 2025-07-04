import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {

  // blog 
  blogPosts = [
    {
      image: 'assets/images/thumbs/blog-img1.png',
      category: 'Gadget',
      title: 'Legal structure, can make profit business',
      excerpt: 'Re-engagement — objectives. As developers, we rightfully obsess about the customer experience...',
      date: 'July 12, 2025',
      comments: 0
    },
    {
      image: 'assets/images/thumbs/blog-img2.png',
      category: 'Gadget',
      title: 'Legal structure, can make profit business',
      excerpt: 'Re-engagement — objectives. As developers, we rightfully obsess about the customer experience...',
      date: 'July 12, 2025',
      comments: 0
    },
    {
      image: 'assets/images/thumbs/blog-img3.png',
      category: 'Gadget',
      title: 'Legal structure, can make profit business',
      excerpt: 'Re-engagement — objectives. As developers, we rightfully obsess about the customer experience...',
      date: 'July 12, 2025',
      comments: 0
    }
  ];
    // pagination 
  totalPages = 7; // Total number of pages
  currentPage = 1; // The currently active page

  // Method to generate page numbers based on totalPages
  getPages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Method to handle page change
  onPageChange(page: number) {
    this.currentPage = page;
  }
}
