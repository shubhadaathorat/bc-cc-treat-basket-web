import { Component, OnInit } from '@angular/core';
declare let anime: any;
export interface Tile {
  urls: string;
  text: string;
  bannerText:string;
}
@Component({
  selector: 'code-challenge-confirmation-banner',
  templateUrl: './confirmation-banner.component.html',
  styleUrls: ['./confirmation-banner.component.scss']
})
export class ConfirmationBannerComponent implements OnInit {

  basketCount = 0;
  tiles: Tile = { text: 'order count', urls: 'assets/merchant/banner/confirmation-banner.png',bannerText:''};
  pageHeadingText = `Congratulations!!`;
  successText = `Basket containing Tablets, Vitamins, Supplements will be delivered to Child Name 
  living at Child Address on Date & Time`;
 
  constructor() {
  }

  ngOnInit(): void { 
    this.getDeliveredBasketCount();  
  }

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.text-animation');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.text-animation .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      }).add({
        targets: '.text-animation',
        opacity: 0,
        duration: 800,
        easing: "easeOutExpo",
        delay: 800
      });
  }

  getDeliveredBasketCount() {
    this.basketCount = 100;
  }
}
