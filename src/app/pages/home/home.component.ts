import { Component, OnInit } from '@angular/core';
import { GetheroeslistService } from "../../services/getheroeslist.service";
import { Heroe } from "../../heroe";
import { MatDialog } from "@angular/material/dialog";
import {HeroesDetalleComponent} from "../../components/heroes-detalle/heroes-detalle.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public randomlistheroe:Heroe[] = [];
  filterpost: string = '' ;

  constructor(private getservicesheroes: GetheroeslistService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getservicesheroes.getheroes().subscribe((data) => {
      this.randomlistheroe = data.sort(()=>.5 - Math.random()).slice(0,20);
      console.log(this.randomlistheroe);

    });
  }
  openDialog(data:Heroe) {
    const dialogRef = this.dialog.open(HeroesDetalleComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
