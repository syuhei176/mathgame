import { Actor, Circle, Color, Matrix, Rectangle, Sprite, Vector, vec } from "excalibur";
import { Resources } from "./resources";

export class Connection extends Actor {
  x1: number
  y1: number
  x2: number
  y2: number
  handler: (x1: number, y1: number, x2: number, y2: number) => void

  constructor(x1: number, y1: number, x2: number, y2: number, handler: (x1: number, y1: number, x2: number, y2: number) => void) {
    super({
      pos: new Vector((x1 + x2) * 50 + 80, (y1 + y2) * 50 + 80),
      width: x1 > x2 ? 20 : 60,
      height: y1 > y2 ? 20 : 60
    })

    this.handler = handler
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2

    const offset = this.getConnOffset()

    this.pos.x += offset.x
    this.pos.y += offset.y
  }

  onInitialize() {
    this.graphics.add(this.getSprite())


    this.on('pointerdown', (e) => {
      console.log(e)
      console.log(this.x1, this.y1, this.x2, this.y2)
      this.handler(
        this.x1,
        this.y1,
        this.x2,
        this.y2
      )
    })
  }

  getConnOffset() {
    if (this.x1 < this.x2) {
      return { x: -10, y: 0, w: 20, h: 60 }
    } else if (this.x1 > this.x2) {
      return { x: 10, y: 0, w: 20, h: 60 }
    } else if (this.y1 < this.y2) {
      return { x: 0, y: -10, w: 60, h: 20 }
    } else {
      return { x: 0, y: 10, w: 60, h: 20 }
    }
  }

  getSprite() {
    if (this.x1 < this.x2) {
      return new Sprite({
        image: Resources.ConnectionLeft,
        destSize: {
          width: 20,
          height: 60
        }
      })
    } else if (this.x1 > this.x2) {
      return new Sprite({
        image: Resources.ConnectionRight,
        destSize: {
          width: 20,
          height: 60
        }
      })
    } else if (this.y1 < this.y2) {
      return new Sprite({
        image: Resources.ConnectionUp,
        destSize: {
          width: 60,
          height: 20
        }
      })

    } else {
      return new Sprite({
        image: Resources.ConnectionDown,
        destSize: {
          width: 60,
          height: 20
        }
      })
    }
  }
}
