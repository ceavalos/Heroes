import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router ) {
    activatedRoute.params.subscribe( params => {
       this.heroe = heroesService.getHeroe(params['id']);
       console.log( this.heroe);
    })
  }
  
  regresar(){
    this.router.navigate(['/heroes'])
  }
}
