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
import { DescubrirComponent } from './component/descubrir/descubrir.component';
import { TrackingComponent } from './component/tracking/tracking.component';
import { PedidosComponent } from './component/pedidos/pedidos.component';
import { PerfilComponent } from './component/perfil/perfil.component';



import { AuthInterceptor } from './auth.interceptor';
import { ProductosComponent } from './component/productos/productos.component';
import { RestaurantesComponent } from './component/restaurantes/restaurantes.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { RegisterComponent } from './component/register/register.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { UploadProductoComponent } from './component/upload-producto/upload-producto.component';
import { UploadCategoriaComponent } from './component/upload-categoria/upload-categoria.component';
import { UploadTrackingComponent } from './component/upload-tracking/upload-tracking.component';
import { UploadCategoriaImagenComponent } from './component/upload-categoria-imagen/upload-categoria-imagen.component';
import { UploadProductoImagenComponent } from './component/upload-producto-imagen/upload-producto-imagen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    DescubrirComponent,
    TrackingComponent,
    PedidosComponent,
    PerfilComponent,
    ProductosComponent,
    RestaurantesComponent,
    CategoriasComponent,
    RegisterComponent,
    CarritoComponent,
    CategoriaComponent,
    UploadProductoComponent,
    UploadCategoriaComponent,
    UploadTrackingComponent,
    UploadCategoriaImagenComponent,
    UploadProductoImagenComponent
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
