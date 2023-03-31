import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'code-challenge-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})

export class MerchantComponent implements OnInit{
  showConfirmation = false;
  displayError = false;
  displayDescription = true;
  constructor() {}

  ngOnInit(){}
  
  isOrderPlaced(event: boolean){   
    // TO DO : Add event
     this.showConfirmation = true;
     this.displayDescription = false;
  }

  addMoreBtnHandler(){
    this.showConfirmation = false;
    this.displayError = false;
    this.displayDescription = true;
  }
}
