import { Component, OnInit } from '@angular/core';
import { Ayuda } from '../ayuda';
import { AyudaservicioService } from '../ayudaservicio.service';

@Component({
  selector: 'app-tablaayuda',
  templateUrl: './tablaayuda.component.html',
  styleUrls: ['./tablaayuda.component.css']
})
export class TablaayudaComponent implements OnInit {
  ayudas!: Ayuda[];
  searchText!: string;
  constructor(private ayudaservicio: AyudaservicioService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.ayudas = this.ayudaservicio.get();
  }

}
