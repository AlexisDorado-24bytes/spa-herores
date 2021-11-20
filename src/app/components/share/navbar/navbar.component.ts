import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerosService } from 'src/app/services/heros.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  buscarHeroe(expresion:string){
     this._rutas.navigate(['/heros/search', expresion]);
     
  }
  
  constructor(private _servicioHeros:HerosService,
    private _rutas:Router
    ) { }

  ngOnInit(): void {
  }

}
