const NEW_LINE = require("os").EOL;
import { Snake } from "./Snake";
import {ConstatsSimboly} from './Constats'
import { Food } from "./Food";
import { constants } from "buffer";
export class Borad {
  gameBorad: string[][] = [];
  sizeX: number;
  sizeY: number;
  Snake: Snake;
  Food : Food;
  constructor(sizeRow: number = 6, sizeCol: number = 80) {
    this.sizeX = sizeRow;
    this.sizeY = sizeCol;
    this.Snake = new Snake();
    this.Food = new Food();
    this.createBorad();
  }

  public MoveSnake(userInput: string) {
   let nextSnakePos = this.Snake.GetSnakeHeadNextPostion(userInput);
    if (this.CheckSnakeColisionsWitchFood(nextSnakePos)) {
    this.Snake.eat();
    this.InsetFood();
}
    this.ClearSnake();
    this.Snake.Move(nextSnakePos);
    this.InsetSnake();
  }
  private CheckSnakeColisionsWitchFood(nextSnakePos : any){

    return nextSnakePos.euqel(this.Food.location)
 }
  public Draw() {
    console.clear();
    for (let i = 0; i < this.sizeX; i++) {
      for (let j = 0; j < this.sizeY; j++) {
        process.stdout.write(this.gameBorad[i][j]);
      }

      console.log();
    }
  }

 public CheckColisions(){
 if(this.CheckSnakeColisionsWitchLimits()){
 console.log("user fail");
}


 }

 private CheckSnakeColisionsWitchLimits(){
  for (let i = 0; i < this.sizeX; i++) {
      if (i == 0 || i == this.sizeX - 1) {
        for (let j = 0; j < this.sizeY; j++) {
          if(this.gameBorad[i][j] != ConstatsSimboly.Limit)
          return true;
        }
      } 
      else {
        if(this.gameBorad[i][0] != ConstatsSimboly.Limit || this.gameBorad[i][this.sizeY - 1] != ConstatsSimboly.Limit)
        return true;
      }
    }
    return false;
 }
  private createBorad() {
    this.initEmptyGameBorad(this.sizeX, this.sizeY);
    this.createBoradConfines(this.sizeX, this.sizeY);
    this.InsetSnake();
    this.InsetFood();
   
  }

  private initEmptyGameBorad(sizeRow: number, sizeCol: number) {
    for (let i = 0; i < sizeRow; i++) {
      this.gameBorad[i] = [];
      for (let j = 0; j < sizeCol; j++) {
        this.gameBorad[i][j] = ConstatsSimboly.Empty;
      }
    }
  }

  private createBoradConfines(sizeRow: number, sizeCol: number) {
    for (let i = 0; i < sizeRow; i++) {
      if (i == 0 || i == sizeRow - 1) {
        for (let j = 0; j < sizeCol; j++) {
          this.gameBorad[i][j] = ConstatsSimboly.Limit;
        }
      } else {
        this.gameBorad[i][0] = ConstatsSimboly.Limit;
        this.gameBorad[i][sizeCol - 1] = ConstatsSimboly.Limit;
      }
    }
  }

  private InsetFood() {
    
    while(this.gameBorad[this.Food.location.x][this.Food.location.y] !=ConstatsSimboly.Empty){
      this.Food.changeFoodLocation(0,this.sizeX-1,0,this.sizeY-1);
    
    }

   this.gameBorad[this.Food.location.x][this.Food.location.y] = this.Food.simboly;
  }
  private InsetSnake() {
    let snakePos = this.Snake.getSnake();
    this.InsetToBorad(snakePos,this.Snake.simboly);
  }

  private ClearSnake() {
    let snakePos = this.Snake.getSnake();
    this.InsetToBorad(snakePos, " ");
  }
  private InsetToBorad(pos: any, simboly: string) {
  
    for (let i = 0; i < pos.length; i++) {
      this.gameBorad[pos[i].x][pos[i].y] = simboly;
     
    }
    
  }
}
