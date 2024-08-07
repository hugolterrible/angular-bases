import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/chatacter.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output('newData')//Envia a Padre main-page
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character={
  name:'',
  power:0
}

emitCharacter():void{
  //console.log('emitCharacter()');
  //console.log(this.character);

  if (this.character.name.length === 0) return;

  //this.character.id=uuid();

  this.onNewCharacter.emit(this.character)
  // this.character.name='';
  // this.character.power=0;
  this.character={name:'',power:0};
}

}
