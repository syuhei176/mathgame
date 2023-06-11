import { Actor, Circle, Color, Font, Matrix, Rectangle, Vector, vec, Text, BaseAlign, TextAlign } from "excalibur";
import { Resources } from "./resources";

export class GameClear extends Actor {
  clearText: Text

  constructor() {
    super({
      pos: new Vector(300, 300),
      width: 200,
      height: 60,
    })


    this.clearText = new Text({
      text: 'Game Clear',
      font: new Font({ size: 30 })
    })
  }


  onInitialize() {
    this.graphics.use(this.clearText)
  }
}
