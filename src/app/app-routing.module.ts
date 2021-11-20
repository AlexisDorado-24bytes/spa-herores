import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { MyHeroComponent } from "./components/my-hero/my-hero.component";
import { ErrorsComponent } from "./components/errors/errors.component";
import { SearchComponent } from './components/search/search.component';
const APP_ROUTER: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'heros', component: HeroComponent },
  { path: 'heros/my-hero/:id', component: MyHeroComponent },
  { path: 'error', component: ErrorsComponent },
  { path: 'heros/search/:termino', component: SearchComponent },
  
  { path: 'about', component: AboutComponent },
  { path: '**',  redirectTo: "home"},

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTER, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
