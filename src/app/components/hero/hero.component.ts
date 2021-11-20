import { Component, OnInit, Input } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { Heros } from '../../interfaces/heros';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {

  


  constructor(private _herosService: HerosService,
    private _router: Router
    ) {
    console.log('Componente Hero iniciado');
  }
  heros: Heros[];

  myHero(index:number){
    this._router.navigate(["heros/my-hero",index]);
    console.log("Id: ", index);

  };



  ngOnInit(): void {


    console.log('Recepción de datos de Service Heros iniciada');
    this.heros = this._herosService.heroesGet();
    console.log(this.heros);
    console.log('Recepción de datos de Service Heros Terminada');
  }

}
