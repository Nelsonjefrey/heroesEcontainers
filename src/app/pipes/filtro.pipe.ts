import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultPosts = [];
    for(const heroe of value){
      if(heroe.name.toLowerCase().indexOf(arg) > -1){
        resultPosts.push(heroe);
      };
    };
    return resultPosts;
  }

}
