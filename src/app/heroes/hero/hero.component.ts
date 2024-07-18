import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';

  public edad: number = 45 ;

  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }

  private getHeroDescription():string{
    return `${this.name} - ${this.edad}`;
  }

  public MetodoPublic():string{
    return this.getHeroDescription();
  }

  changeHero():void{
    this.name='Spiderman';
  }

  changeAge():void{
    this.edad=52;
  }

  resetForm():void{
    this.name='Ironman';
    this.edad=45;

    //document.querySelector('h1')!.innerHTML='<h1>Desde Angular</h1>';
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML='<h1>Desde Angular</h1>'
    });;
  }

}
