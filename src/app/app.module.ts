import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from './services/data-service.service';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    IngresarComponent,
    MostrarComponent,
    BuscarComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
