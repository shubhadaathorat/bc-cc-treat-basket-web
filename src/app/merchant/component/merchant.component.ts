import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'code-challenge-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})

export class MerchantComponent implements OnInit{
  showConfirmation = false;
  constructor() {}

  ngOnInit(){}
  
  isOrderPlaced(event: boolean){   
    this.showConfirmation = event;
  }

  addMoreBtnHandler(){
    this.showConfirmation = false;
  }
}
