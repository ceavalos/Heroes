import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscarheroe',
  templateUrl: './buscarheroe.component.html'
})
export class BuscarheroeComponent implements OnInit  {
   
  heroes: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router ) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.heroesService.buscarheroe(params['hero']);
      console.log( this.heroes);
   })
  }

  verheroe(valor: String){
    this.router.navigate(['/heroe', valor])
  }
}
