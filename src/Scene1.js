class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload(){
        this.load.image("background", "./src/assets/parallax-mountain-bg.png");
        this.load.image("trees", "./src/assets/parallax-mountain-trees.png");
        this.load.image("foretrees", "./src/assets/parallax-mountain-foreground-trees.png");
        this.load.image("backmountain", "./src/assets/parallax-mountain-mountains.png");
        this.load.image("mountain", "./src/assets/parallax-mountain-montain-far.png");
        this.load.image("logo", "./src/assets/logo.png");
        this.load.image("inicio", "./src/assets/iniciar.png");
        this.load.image("multi", "./src/assets/multi.png");
        this.load.image("draw","./src/assets/draw.png");
        this.load.image("red","./src/assets/red.png");
        this.load.image("blue","./src/assets/blue.png");
        this.load.image("yellow","./src/assets/yellow.png");
        this.load.image("green","./src/assets/green.png");
        this.load.image("back","./src/assets/back.png");
        this.load.spritesheet("spritexo", "./src/assets/spritexo.png",{
            frameWidth: 150,
            frameHeight: 150
        });
        this.load.spritesheet("spritexosingle", "./src/assets/spritexosingle.png",{
            frameWidth: 150,
            frameHeight: 150
        });
        this.load.audio("press", "./src/assets/sounds/press.wav");
        this.load.audio("pressmulti", "./src/assets/sounds/pressmulti.wav");
        this.load.audio("draw", "./src/assets/sounds/draw.wav");
        this.load.audio("multibkg", "./src/assets/sounds/multibkg.mp3");
        this.load.audio("singlebkg", "./src/assets/sounds/singlebkg.mp3");
        this.load.audio("maintheme", "./src/assets/sounds/maintheme.mp3");
        this.load.audio("results", "./src/assets/sounds/results.mp3");

    }
    create() {
        this.add.image(0,200, "background").setOrigin(0,0).setScale(1.9);
        this.add.image(0,120, "background").setOrigin(0,0).setScale(1.9);
        this.add.image(0,0, "background").setOrigin(0,0).setScale(1.9);
        this.mountainback = this.add.tileSprite(0, 280, this.game.config.width, this.game.config.height/3, 'backmountain').setOrigin(0,0).setScale(1.3);
        this.trees = this.add.tileSprite(0,230, 500, 200, "trees").setOrigin(0,0).setScale(1.7);
        this.movetrees = this.add.tileSprite(-10,120, 500, 250, "foretrees").setScale(2.3).setOrigin(0,0);
        this.add.image(65, 130, "logo").setOrigin(0,0).setScale(0.7);
        this.add.image(75, 230, "inicio").setOrigin(0,0).setScale(0.9).setInteractive().on("pointerdown", () => this.startGame(true));
        this.add.image(75, 280, "multi").setOrigin(0,0).setScale(0.9).setInteractive().on("pointerdown", () => this.startGame(false));
    

        this.music = this.sound.add("maintheme");
        this.press = this.sound.add("press");
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.music.play(musicConfig);
    }
    startGame(i){
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.press.play(musicConfig);
        this.music.stop();
        i ? this.scene.start("playvsCPU") : this.scene.start("playGame");
    }
    update(){
        this.movetrees.tilePositionX -= 0.5;
        this.trees.tilePositionX -= 0.2;
        this.mountainback.tilePositionX += 0.1;
        
    }

}
export default Scene1;