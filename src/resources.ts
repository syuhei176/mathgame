import { ImageSource } from "excalibur"
import connLeft from "./images/connleft.png"
import connRight from "./images/connright.png"
import connDown from "./images/connDown.png"
import connUp from "./images/connUp.png"

let Resources = {
  ConnectionLeft: new ImageSource(connLeft),
  ConnectionRight: new ImageSource(connRight),
  ConnectionDown: new ImageSource(connDown),
  ConnectionUp: new ImageSource(connUp)
};

export { Resources };