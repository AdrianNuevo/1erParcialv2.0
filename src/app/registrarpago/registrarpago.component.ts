import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';

@Component({
  selector: 'app-registrarpago',
  templateUrl: './registrarpago.component.html',
  styleUrls: ['./registrarpago.component.css']
})
export class RegistrarpagoComponent implements OnInit {
  pago!: Pago;
  constructor() { }

  ngOnInit(): void {
  }

}
