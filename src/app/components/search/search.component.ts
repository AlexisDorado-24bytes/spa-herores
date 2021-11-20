import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from "../../services/heros.service";
import { Heros } from "../../interfaces/heros";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

heros:any;
encontrado:boolean;  
termino:string;

redirect(){
  this.ruta.navigate(["/heros"]);

}

  constructor(private _activateRoute:ActivatedRoute,
    private ruta:Router,
    private _servicio:HerosService
    ) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params =>{
      console.log(params["termino"]);
      this.termino= params["termino"];
      if(params.termino ==""){
        this.ruta.navigate(["/heros"]);
      }else{
        if (this._servicio.heroBuscardo(params.termino).length !=0  ){
          
         let bus= this.heros = this._servicio.heroBuscardo(params["termino"]);
         this.encontrado= true;
         console.log(this.heros);
         

        }else{
        this.encontrado= false;
        
        }
      }
      console.log(this.encontrado);

    })

  }

}
