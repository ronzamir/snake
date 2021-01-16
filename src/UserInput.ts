
import {Constats} from './Constats'
import { EventEmitter } from 'events';
export class UserInput {
  userInput: string;
  constructor() {
    this.userInput = "";
  }

  listinUserInput(eventEmitter : EventEmitter) {
  
    const readline = require("readline");
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on("keypress", (str, key) => {
      if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
        return;
      }

      
      eventEmitter.emit(Constats.USER_EVENT,key.name);
     
      this.userInput = key.name;
      
    });
  }


}
