import { ImageSource } from "excalibur"
import connLeft from "./images/left.png"
import connRight from "./images/right.png"
import connDown from "./images/down.png"
import connUp from "./images/up.png"

let Resources = {
  ConnectionLeft: new ImageSource(connLeft),
  ConnectionRight: new ImageSource(connRight),
  ConnectionDown: new ImageSource(connDown),
  ConnectionUp: new ImageSource(connUp)
};

export { Resources };