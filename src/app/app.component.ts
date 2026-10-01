import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'mi-cv-en-angular'

  // Cabecera
  nombre = 'Karol Serrano Martín';
  profesion = 'Técnico Superior en ASIR · Estudiante de Desarrollo de Aplicaciones Multiplataforma';

  // Contacto
  ciudad = 'Málaga';
  numero = '+34 747 454 589';
  email = 'Karolymarta.1@gmail.com';
  github = 'https://github.com/KarolSerrano089';
  idiomas = ['Castellano: nativo', 'Inglés: muy básico'];
  habilidades = [
    'C++', 'C', 'PHP', 'Oracle', 'Cisco', 'HTML', 'CSS', 'Python', 'Java',
    'MySQL', 'XML', 'XSD', 'DTD', 'VirtualBox', 'Linux Server', 'Windows Server'
  ];

  // Sobre mi
  fotoPerfil = '/Foto.jpg';
  sobreMi = 
  'Soy una persona muy resolutiva a la que le gusta aprender cosas nuevas y llevar un orden a la hora de hacer las cosas. He terminado el Grado Superior de ASIR y, después de mis prácticas, he empezado a cursar DAM.';

  experiencias = [
    {
      puesto: 'Prácticas de Administración de Sistemas Informáticos en Red',
      empresa: 'DHV Tecnología Malagueña (P.T.A.)',
      fecha: 'Marzo 2025 - Junio 2025',
      descripcion: 'Prácticas del Grado Superior de ASIR'
    }
  ];

  formacion = [
    { 
      titulo: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma', 
      centro: 'C.P.I.F.P. Alan Turing (P.T.A.)', 
      fecha: 'Septiembre 2025 - Actualidad' 
    },
    { 
      titulo: 'Grado Superior en Administración de Sistemas Informáticos en Red', 
      centro: 'C.P.I.F.P. Alan Turing (P.T.A.)', 
      fecha: 'Septiembre 2023 - Junio 2025' },
    { 
      titulo: 'Bachillerato de Ciencias Tecnológicas', 
      centro: 'IES Santa Rosa de Lima (Málaga)', 
      fecha: 'Septiembre 2020 - Junio 2023' }
  ];

  // Pie de pagina
  textoPie = 'Currículum desarrollado con Angular';
  fechaActual = new Date();
}