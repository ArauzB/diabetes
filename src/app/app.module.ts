import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PerfilComponent } from './component/perfil/perfil.component';



import { AuthInterceptor } from './auth.interceptor';
import { RegisterComponent } from './component/register/register.component';
import { PacientesComponent } from './component/pacientes/pacientes.component';
import { CrearPacienteComponent } from './component/crear-paciente/crear-paciente.component';
import { VerExpedienteComponent } from './component/ver-expediente/ver-expediente.component';
import { CrearExpedienteComponent } from './component/crear-expediente/crear-expediente.component';
import { CitasComponent } from './component/citas/citas.component';
import { CrearCitasComponent } from './component/crear-citas/crear-citas.component';
import { CrearMedicamentoComponent } from './component/crear-medicamento/crear-medicamento.component';
import { VerMedicamentoComponent } from './component/ver-medicamento/ver-medicamento.component';
import { VerCitasComponent } from './component/ver-citas/ver-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    PerfilComponent,
    RegisterComponent,
    PacientesComponent,
    CrearPacienteComponent,
    VerExpedienteComponent,
    CrearExpedienteComponent,
    CitasComponent,
    CrearCitasComponent,
    CrearMedicamentoComponent,
    VerMedicamentoComponent,
    VerCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
