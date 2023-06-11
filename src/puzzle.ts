type UpdateHandler = (x: number, y: number, d: number) => void

export class Puzzle {
  map: number[][]
  onUpdateHandler: UpdateHandler

  constructor(onUpdateHandler: UpdateHandler) {
    this.onUpdateHandler = onUpdateHandler
    this.map = []
    for (let i = 0; i < 4; i++) {
      this.map[i] = []
      for (let j = 0; j < 4; j++) {
        this.map[i][j] = 0
      }
    }
  }

  check(x1: number, y1: number, x2: number, y2: number) {
    const d1 = this.map[x1][y1]
    const d2 = this.map[x2][y2]

    if (!this.isAvailable(d1, d2)) {
      return
    }

    this.update(x1, y1, this.operation(d1, d2))
    this.update(x2, y2, 0)
  }

  isAvailable(d1: number, d2: number) {
    //return d1 === d2 || d1 === 0
    return d1 + d2 <= 6
  }


  operation(d1: number, d2: number) {
    const dAfter = d1 + d2

    if (dAfter <= 6) {
      return dAfter
    } else {
      return dAfter - 6
    }
  }


  update(x: number, y: number, d: number) {
    this.map[x][y] = d
    this.onUpdateHandler(x, y, d)
  }
}