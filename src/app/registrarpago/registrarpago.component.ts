import { Component, OnInit } from '@angular/core';
import { Ayuda } from '../ayuda';
import { AyudaservicioService } from '../ayudaservicio.service';
import { Pago } from '../pago';
import { PagoservicioService } from '../pagoservicio.service';

@Component({
  selector: 'app-registrarpago',
  templateUrl: './registrarpago.component.html',
  styleUrls: ['./registrarpago.component.css']
})
export class RegistrarpagoComponent implements OnInit {
  pago!: Pago;
  pagos!: Pago[];
  ayudas!: Ayuda[];
  constructor(private pagoservicio: PagoservicioService, private ayudaservicio: AyudaservicioService) { }

  ngOnInit(): void {
    this.pago=new Pago;
    this.pagos= this.pagoservicio.obtener();
    this.ayudas=this.ayudaservicio.get();
  }
  add(){
    if(this.pago.identificacion!=null && this.pago.nombre!=null && this.pago.tipo!=null){
      var i =0;
      var control= false;
      while(i< this.pagos.length && control === false){
        if(this.pagos[i].identificacion === this.pago.identificacion){
          control = true;
        }
        i++;
      }
      if(control === false){
        this.ayudaservicio.extraer(this.pago.tipo);
        this.pagoservicio.poner(this.pago);
      }
      else{
        alert('YA RECIBIO AYUDA');
      }
    }
    else{
      alert('HAY CAMPOS SIN LLENAR');
    }
    
  }
}
