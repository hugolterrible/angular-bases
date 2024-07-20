import { Injectable } from '@angular/core';
import { Character } from '../interfaces/chatacter.interface';
import { v4 as uuid } from 'uuid';
//console.log(uuid())

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [
    {id:uuid(),name:'Krillins',power:1000},
    {id:uuid(),name:'Goku',power:9500},
    {id:uuid(),name:'Vegeta',power:7500}
  ];

  addCharacter(character:Character):void{
    //this.characters.unshift(character); //inserta al princio
    const newCharacter:Character ={
      id:uuid(),
      ...character
    }

    this.characters.push(newCharacter);
   console.log('MainPage');
   console.log(newCharacter);
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }

  DeleteCharacterById(id:string){
    this.characters=this.characters.filter(character=>character.id !== id);
  }

  constructor() { }

}
