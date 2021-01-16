export class Postion {
   public x: number;
  public  y: number;
    constructor(_x: number, _y: number) {
      this.x = _x;
      this.y = _y;
    }
  
    Add(other : Postion){
    this.x += other.x;
    this.y += other.y;
    }
    euqel(other : Postion){
      return this.x == other.x && this.y == other.y;
    }
  }
