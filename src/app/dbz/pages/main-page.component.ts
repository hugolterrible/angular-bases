import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/chatacter.interface';
import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService:DbzService){ }


  get chraracters():Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.DeleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }




// public characters: Character[] = [
//   {name:'Krillins',power:1000},
//   {name:'Goku',power:9500},
//   {name:'Vegeta',power:7500}
// ];

// onNewCharacter(character:Character):void{
//   //this.characters.unshift(character); //inserta al princio
//   this.characters.push(character);
// console.log('MainPage');
// console.log(character);
// }

// onDeleteCharacter(index:number){
//   this.characters.splice(index,1);
// }

}
