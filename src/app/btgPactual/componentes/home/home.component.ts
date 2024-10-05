import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public items = [
    { label: 'Crear', icon: 'add', url: './crear' },
    { label: 'Aperturas', icon: 'attach_money', url: './aperturas' },
    { label: 'Cancelaciones', icon: 'cancel', url: './cancelacion' },
    { label: 'Historial', icon: 'history', url: './historial' },
  ]

}
