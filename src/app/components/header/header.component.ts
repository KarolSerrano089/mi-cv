import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombre = 'Karol Serrano Martín';
  profesion = 'Técnico Superior en ASIR · Estudiante de Desarrollo de Aplicaciones Multiplataforma';
  fotoPerfil = '/Foto.jpg';
}