import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { HerosService } from "./services/heros.service";

// Rutes
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { MyHeroComponent } from './components/my-hero/my-hero.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { SearchComponent } from './components/search/search.component';
import { HeroesTarjetaComponent } from './components/heroes-tarjeta/heroes-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    AboutComponent,
    MyHeroComponent,
    ErrorsComponent,
    SearchComponent,
    HeroesTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
