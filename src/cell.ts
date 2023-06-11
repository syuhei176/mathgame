import { Actor, Circle, Color, Matrix, Rectangle, Vector, vec } from "excalibur";
import { Resources } from "./resources";

export class Cell extends Actor {
  num: number
  constructor(x: number, y: number, num: number) {
    super({
      pos: new Vector(x * 60 + 25, y * 60 + 25),
      width: 60,
      height: 60,
      //      color: Color.Black
    })

    this.num = num
  }

  onInitialize() {
    this.graphics.onPostDraw = (ctx: ex.ExcaliburGraphicsContext) => {
      ctx.save();
      ctx.z = 99;
      for (let i = 0; i < 6; i++) {
        if (i < this.num) {
          ctx.drawRectangle(
            vec(0, (5 - i) * 10), 60, 10, Color.Green, Color.Black, 1
          )
        } else {
          ctx.drawRectangle(
            vec(0, (5 - i) * 10), 60, 10, Color.White, Color.Black, 1
          )
        }
      }
      ctx.restore();
    }

    this.on('pointerdown', (e) => {
      console.log(e)
    })
  }
}
