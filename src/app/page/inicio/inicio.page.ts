import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.css'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  // Simulación de categorías destacadas
  categories = [
    { name: 'Sneakers', icon: 'footsteps-outline' },
    { name: 'Deportivas', icon: 'fitness-outline' },
    { name: 'Botas', icon: 'thunderstorm-outline' },
    { name: 'Casual', icon: 'walk-outline' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irALaTienda() {
    this.router.navigate(['/tienda']);
  }

}

