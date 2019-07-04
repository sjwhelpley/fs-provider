import { Injectable } from '@angular/core';

import { Listing } from '../models/listings'

@Injectable({
  providedIn: 'root'
})
export class ListingsService { 
  allListings: Array<Listing>;
  savedListings: Array<Listing>;

  listing1: Listing;
  listing2: Listing;

  constructor() {
    this.listing1 = new Listing("Home in Cape Town", "Camps Bay", 1200, "fhsjhfjd");
    this.listing2 = new Listing("Home in Cape Town", "Sea Point", 1200, "fhsjhfjd");

    this.allListings = [this.listing1, this.listing2];
  }

  getAllItems() {
    return this.allListings;   
  }

  addListing(listing:Listing) {
    this.allListings.push(listing);
  }
}
