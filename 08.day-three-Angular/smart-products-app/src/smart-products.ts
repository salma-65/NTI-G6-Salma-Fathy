import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

@Component({
  selector: 'app-smart-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './smart-products.html',
  styleUrl: './smart-products.css'
})
export class SmartProducts {

  isLoggedIn = false;
  userName = 'Salma';

  searchText = '';

  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Mouse',
      price: 250,
      category: 'Accessories',
      inStock: true
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      price: 1200,
      category: 'Accessories',
      inStock: true
    },
    {
      id: 3,
      name: 'USB-C Hub',
      price: 600,
      category: 'Accessories',
      inStock: false
    },
    {
      id: 4,
      name: '27 Monitor',
      price: 4500,
      category: 'Displays',
      inStock: true
    }
  ];

  get filteredProducts() {
    const search = this.searchText.trim().toLowerCase();

    if (!search) {
      return this.products;
    }

    return this.products.filter(product =>
      product.name.toLowerCase().includes(search)
    );
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  setStatus(newStatus: 'idle' | 'loading' | 'success' | 'error') {
    this.status = newStatus;
  }

  clearProducts() {
    this.products = [];
  }

  resetProducts() {
    this.products = [
      {
        id: 1,
        name: 'Wireless Mouse',
        price: 250,
        category: 'Accessories',
        inStock: true
      },
      {
        id: 2,
        name: 'Mechanical Keyboard',
        price: 1200,
        category: 'Accessories',
        inStock: true
      },
      {
        id: 3,
        name: 'USB-C Hub',
        price: 600,
        category: 'Accessories',
        inStock: false
      },
      {
        id: 4,
        name: '27 Monitor',
        price: 4500,
        category: 'Displays',
        inStock: true
      }
    ];
  }
}