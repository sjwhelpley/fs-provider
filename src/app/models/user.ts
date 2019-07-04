import { Reviews } from './reviews';

export class User {
    name: String;
    email: String;
    phone: number;
    location: String;
    numReviews: number;
    reviews: Reviews[];
}