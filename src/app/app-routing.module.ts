import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LogoutComponent } from './component/logout/logout.component';
import { DescubrirComponent } from './component/descubrir/descubrir.component';
import { TrackingComponent } from './component/tracking/tracking.component';
import { PedidosComponent } from './component/pedidos/pedidos.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { ProductosComponent } from './component/productos/productos.component';
import { RestaurantesComponent } from './component/restaurantes/restaurantes.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { RegisterComponent } from './component/register/register.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { UploadCategoriaComponent } from './component/upload-categoria/upload-categoria.component';
import { UploadProductoComponent } from './component/upload-producto/upload-producto.component';
import { UploadTrackingComponent } from './component/upload-tracking/upload-tracking.component';
import { UploadCategoriaImagenComponent } from './component/upload-categoria-imagen/upload-categoria-imagen.component';
import { UploadProductoImagenComponent } from './component/upload-producto-imagen/upload-producto-imagen.component';



import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'descubrir', component: DescubrirComponent, canActivate: [AuthGuard] },
  { path: 'tracking', component: TrackingComponent, canActivate: [AuthGuard]},
  { path: 'pedidos', component: PedidosComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'productos', component: ProductosComponent, canActivate: [AuthGuard] },
  { path: 'restaurantes', component: RestaurantesComponent, canActivate: [AuthGuard] },
  { path: 'categorias', component: CategoriasComponent, canActivate: [AuthGuard] },
  { path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard] },
  { path: 'categoria/:id', component: CategoriaComponent, canActivate: [AuthGuard] },
  { path: 'addcat', component: UploadCategoriaComponent, canActivate: [AuthGuard] },
  { path: 'addprod', component: UploadProductoComponent, canActivate: [AuthGuard] },
  { path: 'addtrack', component: UploadTrackingComponent, canActivate: [AuthGuard] },
  { path: 'catimg', component: UploadCategoriaImagenComponent, canActivate: [AuthGuard] },
  { path: 'prodimg', component: UploadProductoImagenComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
