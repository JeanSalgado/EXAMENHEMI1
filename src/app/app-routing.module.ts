import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

const routes: Routes = [
  { path:'form', component: FormComponent},
  { path:'ingresar', component: IngresarComponent},
  { path:'mostrar', component: MostrarComponent},
  { path:'buscar', component: MostrarComponent},
  { path: 'resultados', component: ResultadosComponent },
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
