import { BankServiceService } from 'src/app/services/bank-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account-component',
  templateUrl: './new-account-component.component.html',
  styleUrls: ['./new-account-component.component.css']
})
export class NewAccountComponentComponent implements OnInit {
  name:string
  type:string
  constructor(private bankingservice:BankServiceService) { }

  ngOnInit(): void {
  }
  createNewAccount(){
    console.log(this.name,"",this.type);
    if(this.name === "" || this.type === ""){
      return
    }
    this.bankingservice.newAccount({name:this.name,type:this.type})
    
    
  }

}
