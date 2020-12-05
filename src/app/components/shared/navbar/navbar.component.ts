import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroe: any[] = [];

  constructor(private heroesService: HeroesService,
              private _router : Router ) { 

  }

  ngOnInit(): void {
  }

  buscarheroe(id: string){
  
    this._router.navigate(['/buscarheroe', id])



  }
}
