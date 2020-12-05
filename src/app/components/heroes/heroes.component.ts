import { Component, OnInit } from '@angular/core';
import { HeroesService, heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: heroe[] = [];

  constructor( private _heroesService :  HeroesService,
               private _router : Router) {
     console.log('Dentro del constructor Heroes.component' );
   }

  ngOnInit(): void {
    console.log('Dentro del ngOnInit Heroes.component');
    this.heroes =this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verheroe(id: number): any{    
    /*console.log(id);*/    
    this._router.navigate(['/heroe', id])
  }
}
