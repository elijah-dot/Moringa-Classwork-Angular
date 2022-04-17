import { Component, OnInit } from '@angular/core';
import { BankServiceService } from 'src/app/services/bank-service.service';
@Component({
  selector: 'app-main-bank-component',
  templateUrl: './main-bank-component.component.html',
  styleUrls: ['./main-bank-component.component.css']
})
export class MainBankComponentComponent implements OnInit {
  accounts:{name:string,balance:number,type:string}[]=[];

  constructor( private bankservice:BankServiceService) { }

  ngOnInit(): void {
    this.accounts = this.bankservice.accounts
  }

}
