import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrarayudaComponent } from './registrarayuda/registrarayuda.component';
import { TablaayudaComponent } from './tablaayuda/tablaayuda.component';
import { RegistrarpagoComponent } from './registrarpago/registrarpago.component';
import { AyudaservicioService } from './ayudaservicio.service';
import { PagoservicioService } from './pagoservicio.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrarayudaComponent,
    TablaayudaComponent,
    RegistrarpagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AyudaservicioService, PagoservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
