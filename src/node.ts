import { Actor, Circle, Color, Font, Matrix, Rectangle, Vector, vec, Text, BaseAlign, TextAlign } from "excalibur";
import { Resources } from "./resources";

export class NumNode extends Actor {
  num: number
  text0: Text
  text1: Text
  text2: Text
  text3: Text
  text4: Text
  text5: Text
  text6: Text

  constructor(x: number, y: number) {
    super({
      pos: new Vector(x * 100 + 50, y * 100 + 50),
      width: 60,
      height: 60,
      //      color: Color.Black
    })

    this.num = 0

    this.text0 = new Text({
      text: ''
    })
    this.text1 = new Text({
      text: '1/6',
      font: new Font({ size: 30 })
    })
    this.text2 = new Text({
      text: '1/3',
      font: new Font({ size: 30 })
    })
    this.text3 = new Text({
      text: '1/2',
      font: new Font({ size: 30 })
    })
    this.text4 = new Text({
      text: '2/3',
      font: new Font({ size: 30 })
    })
    this.text5 = new Text({
      text: '5/6',
      font: new Font({ size: 30 })
    })
    this.text6 = new Text({
      text: '1',
      font: new Font({ size: 30 })
    })
  }


  onInitialize() {
    this.graphics.onPostDraw = (ctx: ex.ExcaliburGraphicsContext) => {
      ctx.save();
      ctx.z = 99;

      if (this.num === 0) {
        ctx.restore()
        return
      }
      for (let i = 0; i < 6; i++) {
        if (i < this.num) {
          ctx.drawRectangle(
            vec(0, (5 - i) * 10), 60, 10, new Color(0x0, 0x79, 0xFF), new Color(0x10, 0x89, 0xFF), 1
          )
        } else {
          ctx.drawRectangle(
            vec(0, (5 - i) * 10), 60, 10, new Color(0xFF, 0xFF, 0xFF), new Color(0x10, 0x89, 0xFF), 1
          )
        }
      }
      ctx.restore();
    }

    this.on('pointerdown', (e) => {
      //console.log(e)
    })
  }

  updateNumber(d: number) {
    this.num = d

    this.graphics.update(0)



    if (this.num === 0) {
      this.graphics.use(this.text0)
    } else if (this.num === 1) {
      this.graphics.use(this.text1)
    } else if (this.num === 2) {
      this.graphics.use(this.text2)
    } else if (this.num === 3) {
      this.graphics.use(this.text3)
    } else if (this.num === 4) {
      this.graphics.use(this.text4)
    } else if (this.num === 5) {
      this.graphics.use(this.text5)
    } else if (this.num === 6) {
      this.graphics.use(this.text6)
    }
  }
}
