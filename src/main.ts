import { Actor, Color, DisplayMode, Engine, Input, Loader } from "excalibur";
import { Cell } from "./cell";
import { Resources } from "./resources";

class Game extends Engine {

  constructor() {
    super({ width: 400, height: 400, backgroundColor: new Color(10, 120, 26) });
  }

  initialize() {
    this.add(new Cell(1, 1, 3))

    this.start()
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