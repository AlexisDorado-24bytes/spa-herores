import { Router } from '@angular/Router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styleUrls: ['./heroes-tarjeta.component.css']
})
export class HeroesTarjetaComponent implements OnInit {
  @Input() hero:any ={};
  @Input() i:number;
  

  myHero(index:number){
    this._ruta.navigate(["heros/my-hero",index]);
    console.log("Id: ", index);

  };

  constructor(private _ruta:Router) { }

  ngOnInit(): void {
  }

}
