import Phaser from "phaser";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import SceneCPU from "./SceneCPU";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 500,
  height: 500,
  scene: [Scene1, Scene2, SceneCPU, Scene3],
  
};

const game = new Phaser.Game(config);

