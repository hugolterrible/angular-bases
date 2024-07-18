import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[]=['Spiderman','Ironman','Hulk','She Hulk', 'Thor']
  public deleteHero?:string;

  removeLastHero():void{
    //const feleteHero= this.heroNames.pop();
    //console.log({feleteHero});
    this.deleteHero=this.heroNames.pop();

  }

}
