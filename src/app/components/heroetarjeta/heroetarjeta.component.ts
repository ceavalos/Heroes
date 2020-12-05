import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styles: [
  ]
})
export class HeroetarjetaComponent implements OnInit {

  @Input()
  heroex: any = {};

  @Input()
  indice: number;

  @Output()
  heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verheroe(){
    console.log(this.indice);
    this._router.navigate(['/heroe', this.indice])
    
   //this.heroeSeleccionado.emit(this.indice);
  }

}
