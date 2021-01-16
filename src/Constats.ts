import { Postion } from "./Postion";
export class Constats {
    public static readonly USER_EVENT = "USER_EVENT";
    public static readonly RIGHT = "right";
    public static readonly LEFT = "left";
    public static readonly DOWN = "down";
    public static readonly UP = "up";
    public static readonly BOOK_SHELF_FULL = "Full";
    public static readonly allowKeyborad = [Constats.DOWN,Constats.LEFT,Constats.RIGHT,Constats.UP];
    public static readonly MoveUp: Postion = new Postion(-1, 0);
    public static readonly MoveDown: Postion = new Postion(1, 0);
    public static readonly MoveLeft: Postion = new Postion(0, -1);
    public static readonly MoveRight: Postion = new Postion(0, 1);
    public static readonly NOT_MOVE: Postion = new Postion(0, 0);
  
}
export class ConstatsSimboly {
    public static readonly Food = "@";
    public static readonly Snake = "#";
    public static readonly Empty = " ";
    public static readonly Limit = "*";
}


