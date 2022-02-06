import {Component, Input, OnInit} from '@angular/core';
import { Heroe } from "../../heroe";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() heroe!: Heroe;
  constructor() { }

  ngOnInit(): void {
  }

}
