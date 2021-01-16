import { Postion } from "./Postion";
import { Constats, ConstatsSimboly } from "./Constats";

export class Snake {
  countEat: number;
  private body: Array<Postion>;
  public simboly: string;
  constructor() {
    this.body = new Array<Postion>();
    this.body.push(new Postion(1, 1));
    this.body.push(new Postion(1, 2));
    this.body.push(new Postion(1, 3));
    this.simboly = ConstatsSimboly.Snake;
    this.countEat = 0;
  }

  eat() {
    this.countEat++;
  }
  GetDircationOfMove(dir: string): Postion {
    switch (dir) {
      case Constats.RIGHT:
        return Constats.MoveRight;

      case Constats.UP:
        return Constats.MoveUp;

      case Constats.LEFT:
        return Constats.MoveLeft;

      case Constats.DOWN:
        return Constats.MoveDown;

      default:
        return Constats.NOT_MOVE;
    }
  }
Move(nextMove: Postion) {
   
    if (nextMove.euqel(Constats.NOT_MOVE)) return ;
   
    if (this.countEat > 0) {
      this.countEat--;
    } else {
      this.body.splice(0, 1);
    }
    this.body.push(nextMove);
  }
  GetSnakeHeadNextPostion(nextMove: string) :Postion{
    const pos = this.GetDircationOfMove(nextMove);
    let newPostion = new Postion(pos.x, pos.y);
    newPostion.Add(this.body[this.body.length - 1]);
   return newPostion;
  }
  getSnake() {
    return this.body;
  }

  getSnakeHead() {
    return this.body[this.body.length-1];
  }
}
