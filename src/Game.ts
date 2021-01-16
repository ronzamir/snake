
import { Borad } from "./Borad";
import { UserInput } from "./UserInput";
import { EventEmitter } from 'events';
import {Constats} from './Constats'
export class Game {

  userInput: UserInput;
  BoradGame: Borad;
  eventEmitter: EventEmitter;

  

  constructor() {  
    this.userInput = new UserInput();
    this.BoradGame = new Borad();
    this.eventEmitter = new EventEmitter();   
    this.eventEmitter.on(Constats.USER_EVENT,(input)=>this.handelInput(input));
  }
  startGame() {
    this.userInput.listinUserInput(this.eventEmitter);
    this.BoradGame.Draw();    
  }

  handelInput(input : string){
  
    this.BoradGame.MoveSnake(input);
    this.BoradGame.Draw();
    this.BoradGame.CheckColisions();
  }
}
