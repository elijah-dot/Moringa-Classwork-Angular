import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
  accounts:{name:string,balance:number,type:string}[]=[
    {name:"Elijah",balance:1254367,type:"fixed account"},
    {name:"Joseph",balance:1254367,type:"current account"},
    {name:"Andy",balance:1254367,type:"savings account"}
  ];
  newAccount(obj:{name:string,type:string}){
    this.accounts.push({...obj,balance:0})
  }

  constructor() { }
}
