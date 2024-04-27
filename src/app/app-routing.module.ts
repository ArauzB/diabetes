import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { RegisterComponent } from './component/register/register.component';
import { PacientesComponent } from './component/pacientes/pacientes.component';
import { CitasComponent } from './component/citas/citas.component';
import { CrearPacienteComponent } from './component/crear-paciente/crear-paciente.component';
import { CrearExpedienteComponent } from './component/crear-expediente/crear-expediente.component';
import { VerExpedienteComponent } from './component/ver-expediente/ver-expediente.component';
import { CrearCitasComponent } from './component/crear-citas/crear-citas.component';
import { VerCitasComponent } from './component/ver-citas/ver-citas.component';
import { CrearMedicamentoComponent } from './component/crear-medicamento/crear-medicamento.component';
import { VerMedicamentoComponent } from './component/ver-medicamento/ver-medicamento.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'pacientes', component: PacientesComponent, canActivate: [AuthGuard] },
  { path: 'crear-paciente', component: CrearPacienteComponent, canActivate: [AuthGuard] },
  { path: 'crear-expediente', component: CrearExpedienteComponent, canActivate: [AuthGuard] },
  { path: 'crear-citas', component: CrearCitasComponent, canActivate: [AuthGuard] },
  { path: 'crear-medicamento', component: CrearMedicamentoComponent, canActivate: [AuthGuard] },
  { path: 'ver-expediente', component: VerExpedienteComponent, canActivate: [AuthGuard] },
  { path: 'ver-medicamento', component: VerMedicamentoComponent, canActivate: [AuthGuard] },
  { path: 'ver-citas', component: VerCitasComponent, canActivate: [AuthGuard] },
  { path: 'citas', component: CitasComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
