import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/chatacter.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {
  @Input() //Recibe de Padre main-page
  public characterList: Character[] = [//Por default o vacio
    {id:uuid(),name:'Trunk',power:10}
  ];

  @Output()//Envia a Padre mainpage
  //public onDelete= new EventEmitter<number>();
  public onDelete:EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?:string):void{
    if(!id) return;
    //Emitir el ID del personaje
    this.onDelete.emit(id)
    //debugger;
    console.log({id});
  }
}


