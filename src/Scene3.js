class Scene3 extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }
    init(data){
        this.Winner = data.Winner;
      }
    create() {
        
        this.add.image(0,200, "background").setOrigin(0,0).setScale(1.9);
        this.add.image(0,120, "background").setOrigin(0,0).setScale(1.9);
        this.add.image(0,0, "background").setOrigin(0,0).setScale(1.9);
        this.mountainback = this.add.tileSprite(0, 280, this.game.config.width, this.game.config.height/3, 'backmountain').setOrigin(0,0).setScale(1.3);
        this.trees = this.add.tileSprite(0,230, 500, 200, "trees").setOrigin(0,0).setScale(1.7);
        this.movetrees = this.add.tileSprite(-10,120, 500, 250, "foretrees").setScale(2.3).setOrigin(0,0);
        // this.add.text(20, 20, `${this.Winner}`, {font: "20px sans-serif",});
        this.add.image(150, 140, `${this.Winner}`).setOrigin(0,0).setScale(0.3);
        this.add.image(10,10, "back").setOrigin(0,0).setScale(0.6).setInteractive().on("pointerdown", () => {this.scene.start("bootGame"); this.bkgsong.stop()});

        this.bkgsong = this.sound.add("results");
        var musicConfig = {
          mute: false,
          volume: 1,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: false,
          delay: 0
      }
      this.bkgsong.play(musicConfig);
    }
    update(){
        this.movetrees.tilePositionX -= 0.5;
        this.trees.tilePositionX -= 0.2;
        this.mountainback.tilePositionX += 0.1;
    }
}
export default Scene3;

