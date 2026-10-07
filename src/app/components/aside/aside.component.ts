import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  ciudad = 'Málaga';
  numero = '+34 747 454 589';
  email = 'Karolymarta.1@gmail.com';
  github = 'https://github.com/KarolSerrano089';
  idiomas = ['Castellano: nativo', 'Inglés: muy básico'];
  habilidades = [
    'C++', 'C', 'PHP', 'Oracle', 'Cisco', 'HTML', 'CSS', 'Python', 'Java',
    'MySQL', 'XML', 'XSD', 'DTD', 'VirtualBox', 'Linux Server', 'Windows Server'
  ];
}