import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from 'componentes/nosotros/nosotros.component';
import { LayoutComponent } from 'componentes/layout/layout.component';
import { ContactoComponent } from 'componentes/contacto/contacto.component';
import { GimnasiosComponent } from 'componentes/gimnasios/gimnasios.component';

import { InicioComponent } from 'componentes/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from 'componentes/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'componentes/login/login.component';
import { CorreoComponent } from 'componentes/correo/correo.component';

import { FilterPipe } from './services/filter.pipe';
import { BreadcrumbsComponent } from 'componentes/breadcrumbs/breadcrumbs.component';
import { RutinaComponent } from 'componentes/rutina/rutina.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    LayoutComponent,
    ContactoComponent,
    GimnasiosComponent,
    
    
    InicioComponent,
    ErrorComponent,
    LoginComponent,
    CorreoComponent,
    
    FilterPipe,
    BreadcrumbsComponent,
    RutinaComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
