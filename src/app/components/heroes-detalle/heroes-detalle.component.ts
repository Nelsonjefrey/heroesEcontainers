import {Component, Inject, OnInit} from '@angular/core';
import {Heroe} from "../../heroe";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-heroes-detalle',
  templateUrl: './heroes-detalle.component.html',
  styleUrls: ['./heroes-detalle.component.css']
})
export class HeroesDetalleComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
