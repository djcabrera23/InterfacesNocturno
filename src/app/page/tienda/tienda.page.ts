import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.css'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TiendaPage implements OnInit {
  productos = [
    { id: 1, name: 'Air Zoom R-Runner', price: 120.00, imageUrl: 'images.unsplash.com', brand: 'Nike' },
    { id: 2, name: 'Classic Leather', price: 85.00, imageUrl: 'images.unsplash.com', brand: 'Reebok' },
    { id: 3, name: 'Ultraboost 22', price: 150.00, imageUrl: 'images.unsplash.com', brand: 'Adidas' },
    { id: 4, name: 'Old Skool', price: 65.00, imageUrl: 'images.unsplash.com', brand: 'Vans' },
    { id: 5, name: 'Chuck Taylor All Star', price: 75.00, imageUrl: 'images.unsplash.com', brand: 'Converse' },
    { id: 6, name: 'Speedcross 5', price: 130.00, imageUrl: 'images.unsplash.com', brand: 'Salomon' },
  ];

  searchTerm: string = '';

  constructor() { }

  ngOnInit() {
  }

  // Método para manejar la búsqueda (puedes expandirlo para filtrar la lista)
  onSearchChange(event: any) {
    console.log('Buscando:', event.detail.value);
  }
}
