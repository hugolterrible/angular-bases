import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/chatacter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {
  @Input()
  public characterList: Character[] = [//Por default o vacio
    {name:'Trunk',power:10}
  ];

  @Output()
  //public onDelete= new EventEmitter<number>();
  public onDelete:EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index:number):void{
    //Emitir el ID del personaje
    this.onDelete.emit(index)
    debugger;
    console.log({index});
  }
}
