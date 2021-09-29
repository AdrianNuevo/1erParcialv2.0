import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarayudaComponent } from './registrarayuda/registrarayuda.component';
import { RegistrarpagoComponent } from './registrarpago/registrarpago.component';
import { TablaayudaComponent } from './tablaayuda/tablaayuda.component';

const routes: Routes = [
  {path:'', redirectTo: 'registrarayuda', pathMatch: 'full'},
  {path:'registrarayuda', component: RegistrarayudaComponent},
  {path:'tablaayuda', component: TablaayudaComponent},
  {path:'registrarpago', component: RegistrarpagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
