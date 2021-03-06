import { Component, OnInit } from '@angular/core';
import { Ayuda } from '../ayuda';
import { AyudaservicioService } from '../ayudaservicio.service';

@Component({
  selector: 'app-registrarayuda',
  templateUrl: './registrarayuda.component.html',
  styleUrls: ['./registrarayuda.component.css']
})
export class RegistrarayudaComponent implements OnInit {
  ayuda!: Ayuda;
  constructor(private ayudaservicio: AyudaservicioService) { 

  }

  ngOnInit(): void {
    this.ayuda= new Ayuda;
  }
  agregar(){
    if(this.ayuda.identificador!=null && this.ayuda.tipo!=null && this.ayuda.cant!=null){
      this.ayudaservicio.post(this.ayuda);
    } else{
    alert('HAY CAMPOS SIN LLENAR');  
  }  
  }

}
