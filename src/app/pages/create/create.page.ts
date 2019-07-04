import { Component, OnInit } from '@angular/core';

import { ListingsService } from '../../services/listings.service'
import { Listing } from '../../models/listings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  name: string;
  location: string;
  price: number;
  imgUrl: string;
  newListing: Listing;
  

  constructor(
    private listingsService: ListingsService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  createListing() {
      this.newListing = new Listing(this.name, this.location, this.price, this.imgUrl); 
      this.listingsService.addListing(this.newListing);
      this.router.navigateByUrl('/tabs/tab1');
  }
}
