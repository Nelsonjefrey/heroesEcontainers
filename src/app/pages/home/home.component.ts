import { Component, OnInit } from '@angular/core';
import { GetheroeslistService } from "../../services/getheroeslist.service";
import { Heroe } from "../../heroe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public randomlistheroe:Heroe[] = [];
  filterpost: any;

  constructor(private getservicesheroes: GetheroeslistService) { }

  ngOnInit(): void {
    this.getservicesheroes.getheroes().subscribe((data) => {
      this.randomlistheroe = data.sort(()=>.5 - Math.random()).slice(0,20);
      console.log(this.randomlistheroe);

    });
  }

}
