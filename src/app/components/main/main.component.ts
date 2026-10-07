import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
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
      fecha: 'Septiembre 2023 - Junio 2025'
    },
    {
      titulo: 'Bachillerato de Ciencias Tecnológicas',
      centro: 'IES Santa Rosa de Lima (Málaga)',
      fecha: 'Septiembre 2020 - Junio 2023'
    }
  ];
}