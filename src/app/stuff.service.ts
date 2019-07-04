import { Injectable } from '@angular/core';
import { Stuff } from './stuff';

@Injectable({
  providedIn: 'root'
})

export class StuffService {

  private stuff: Stuff[];

  getStuffList(): Stuff[]
  {
    return this.stuff = [
      {number: 1, name: 'Ficus Nitida', price: 100, vat: 3, amount: 5},
      {number: 2, name: 'Ficus Benjamina', price: 150, vat: 10, amount: 10},
      {number: 3, name: 'Bambus', price: 50, vat: 3, amount: 30},
      {number: 4, name: 'Aspidistra', price: 50, vat: 3, amount: 10},
      {number: 5, name: 'Kaktus', price: 30, vat: 3, amount: 20}
    ];
  }

  dodaj(number: number)
  {
    this.stuff[number].amount = this.stuff[number].amount+1;
  }
  
  odejmij(number: number)
  {
    if(this.stuff[number].amount > 0)
    {
      this.stuff[number].amount = this.stuff[number].amount-1;
    }
  }

  usun(number: number)
  {
    this.stuff.splice(number, 1)
  }

  constructor() { }
}
