import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from "../../services/heros.service";
import { Heros } from "../../interfaces/heros";



@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.css']
})
export class MyHeroComponent implements OnInit {

  resHeroe: any;
  constructor(private _idHero:ActivatedRoute, 
    private _heroServise: HerosService,
    private _rutas: Router
    
    ) { 
    console.log("Inicio constructor my-hero");



  }

  ngOnInit(): void {
    console.log("Inicio  ngOnInit(): void");
    
    this._idHero.params.subscribe( params => {
      this.resHeroe = this._heroServise.myHeroGet(params["id"]);
      if(!this.resHeroe){
        this._rutas.navigate(["/error"]);
      }
      console.log(params["id"]);
    }
    
    );
  }


}
