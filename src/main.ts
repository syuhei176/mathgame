import { Actor, Color, DisplayMode, Engine, Input, Loader } from "excalibur";
import { NumNode } from "./node";
import { Resources } from "./resources";
import { Connection } from "./connection";
import { Puzzle } from "./puzzle";

class Game extends Engine {
  puzzle: Puzzle
  nodes: NumNode[][] = []

  constructor() {
    super({ width: 600, height: 600, backgroundColor: new Color(0xf0, 0xf0, 0xf0) });
  }

  async initialize() {
    this.puzzle = new Puzzle((x: number, y: number, d: number) => {
      console.log(x, y, d)

      this.nodes[x][y].updateNumber(d)
    })

    const handler = (x1: number, y1: number, x2: number, y2: number) => {
      this.puzzle.check(x1, y1, x2, y2)
    }

    this.addConnection(0, 0, 1, 0, handler)
    this.addConnection(1, 0, 2, 0, handler)
    this.addConnection(2, 0, 3, 0, handler)

    this.addConnection(0, 0, 0, 1, handler)
    this.addConnection(1, 0, 1, 1, handler)
    this.addConnection(2, 0, 2, 1, handler)
    this.addConnection(3, 0, 3, 1, handler)

    this.addConnection(0, 1, 1, 1, handler)
    this.addConnection(1, 1, 2, 1, handler)
    this.addConnection(2, 1, 3, 1, handler)

    this.addConnection(0, 1, 0, 2, handler)
    this.addConnection(1, 1, 1, 2, handler)
    this.addConnection(2, 1, 2, 2, handler)
    this.addConnection(3, 1, 3, 2, handler)

    this.addConnection(0, 2, 1, 2, handler)
    this.addConnection(1, 2, 2, 2, handler)
    this.addConnection(2, 2, 3, 2, handler)

    this.addConnection(0, 2, 0, 3, handler)
    this.addConnection(1, 2, 1, 3, handler)
    this.addConnection(2, 2, 2, 3, handler)
    this.addConnection(3, 2, 3, 3, handler)

    this.addConnection(0, 3, 1, 3, handler)
    this.addConnection(1, 3, 2, 3, handler)
    this.addConnection(2, 3, 3, 3, handler)

    this.nodes[0] = []
    this.nodes[1] = []
    this.nodes[2] = []
    this.nodes[3] = []

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.addNumNode(i, j, 0)
      }
    }
    this.addNumNode(0, 0, 1)
    this.addNumNode(1, 0, 2)
    this.addNumNode(2, 0, 1)
    this.addNumNode(3, 0, 3)
    this.addNumNode(0, 1, 3)
    this.addNumNode(1, 1, 4)
    this.addNumNode(2, 1, 0)
    this.addNumNode(3, 1, 1)
    this.addNumNode(0, 2, 0)
    this.addNumNode(1, 2, 1)
    this.addNumNode(2, 2, 2)
    this.addNumNode(3, 2, 1)
    this.addNumNode(0, 3, 1)
    this.addNumNode(1, 3, 1)
    this.addNumNode(2, 3, 1)
    this.addNumNode(3, 3, 2)

    await Resources.ConnectionLeft.load()
    await Resources.ConnectionRight.load()
    await Resources.ConnectionDown.load()
    await Resources.ConnectionUp.load()

    this.start()
  }

  addNumNode(x: number, y: number, d: number) {
    this.nodes[x][y] = new NumNode(x, y)
    this.add(this.nodes[x][y])
    this.puzzle.update(x, y, d)
  }

  addConnection(x1: number, y1: number, x2: number, y2: number, handler: (x1: number, y1: number, x2: number, y2: number) => void) {
    this.add(new Connection(x1, y1, x2, y2, handler))
    this.add(new Connection(x2, y2, x1, y1, handler))
  }

  public update(engine: Engine, delta: any) {
    if (
      engine.input.keyboard.wasPressed(Input.Keys.W) ||
      engine.input.keyboard.wasPressed(Input.Keys.Up)
    ) {
      //
    }

  }
}

export const game = new Game();
game.initialize();