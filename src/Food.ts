import { Postion } from "./Postion";
import {ConstatsSimboly} from './Constats'

export class Food {
    location: Postion;
    simboly : string;
    constructor(){
        this.location = new Postion(0,0);
        this.simboly = ConstatsSimboly.Food;
    }
    changeFoodLocation(minX :number, maxX:number,minY :number, maxY:number) {

    this.location.x = this.getRandomArbitrary(minX,maxX);
    this.location.y = this.getRandomArbitrary(minY,maxY);
    
    }
    private getRandomArbitrary(min :number, max:number) {
        return Math.floor(Math.random() * (max - min) + min);
      }
}