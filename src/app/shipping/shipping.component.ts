import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(private cartService: CartServiceService) { }

  ngOnInit() {

     this.shippingCosts = this.cartService.getShippingPrices();
  }

}