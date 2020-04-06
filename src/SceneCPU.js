class SceneCPU extends Phaser.Scene {
    constructor() {
      super("playvsCPU");
    }
    create() {
      this.add.text(10, 10, "Tic-Tac-Toe", {
        font: "20px sans-serif",
        fill: "gray"
      });
      this.board = new Array(9).fill(null);
      this.xIsNext = true;
      this.Winner;

      this.music = this.sound.add("pressmulti");
      this.singlebkg = this.sound.add("singlebkg");
      var musicConfig = {
        mute: false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }
    this.singlebkg.play(musicConfig);
      
  
      this.guess1 = this.add
        .sprite(10, 10, "spritexosingle", [0])
        .setOrigin(0, 0)
        .setInteractive()
        .on("pointerdown", () => this.handleClicks(1));
  
      this.guess2 = this.add
        .sprite(175, 10, "spritexosingle", [0])
        .setOrigin(0, 0)
        .setInteractive()
        .on("pointerdown", () => this.handleClicks(2));
  
      this.guess3 = this.add
        .sprite(338, 10, "spritexosingle", [0])
        .setOrigin(0, 0)
        .setInteractive()
        .on("pointerdown", () => this.handleClicks(3));
  
      this.guess4 = this.add
        .sprite(10, 175, "spritexosingle", [0])
        .setOrigin(0, 0)
        .setInteractive()
        .on("pointerdown", () => this.handleClicks(4));
  
      this.guess5 = this.add
        .sprite(175, 175, "spritexosingle", [0])
        .setOrigin(0, 0)
        .setInteractive()
        .on("pointerdown", () => this.handleClicks(5));
  
      this.guess6 = this.add
        .sprite(338, 175, "spritexosingle", [0])
        .setOrigin(0, 0)
        .setInteractive()
        .on("pointerdown", () => this.handleClicks(6));
  
      this.guess7 = this.add
        .sprite(10, 338, "spritexosingle", [0])
        .setOrigin(0, 0)
        .setInteractive()
        .on("pointerdown", () => this.handleClicks(7));
  
      this.guess8 = this.add
        .sprite(175, 338, "spritexosingle", [0])
        .setOrigin(0, 0)
        .setInteractive()
        .on("pointerdown", () => this.handleClicks(8));
  
      this.guess9 = this.add
        .sprite(338, 338, "spritexosingle", [0])
        .setOrigin(0, 0)
        .setInteractive()
        .on("pointerdown", () => this.handleClicks(9));
    }
  
    handleClicks(id) {
      this.xIsNext = !this.xIsNext;
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
      switch (id) {
        case 1:
          this.xIsNext
            ? this.guess1.setTexture("spritexosingle", [2])
            : this.guess1.setTexture("spritexosingle", [1]);
          this.xIsNext ? this.board.splice(0, 1, 4) : this.board.splice(0, 1, 1);
          this.guess1.disableInteractive();
          break;
        case 2:
          this.xIsNext
            ? this.guess2.setTexture("spritexosingle", [2])
            : this.guess2.setTexture("spritexosingle", [1]);
          this.xIsNext ? this.board.splice(1, 1, 4) : this.board.splice(1, 1, 1);
          this.guess2.disableInteractive();
          break;
        case 3:
          this.xIsNext
            ? this.guess3.setTexture("spritexosingle", [2])
            : this.guess3.setTexture("spritexosingle", [1]);
          this.xIsNext ? this.board.splice(2, 1, 4) : this.board.splice(2, 1, 1);
          this.guess3.disableInteractive();
          break;
        case 4:
          this.xIsNext
            ? this.guess4.setTexture("spritexosingle", [2])
            : this.guess4.setTexture("spritexosingle", [1]);
          this.xIsNext ? this.board.splice(3, 1, 4) : this.board.splice(3, 1, 1);
          this.guess4.disableInteractive();
          break;
        case 5:
          this.xIsNext
            ? this.guess5.setTexture("spritexosingle", [2])
            : this.guess5.setTexture("spritexosingle", [1]);
          this.xIsNext ? this.board.splice(4, 1, 4) : this.board.splice(4, 1, 1);
          this.guess5.disableInteractive();
          break;
        case 6:
          this.xIsNext
            ? this.guess6.setTexture("spritexosingle", [2])
            : this.guess6.setTexture("spritexosingle", [1]);
          this.xIsNext ? this.board.splice(5, 1, 4) : this.board.splice(5, 1, 1);
          this.guess6.disableInteractive();
          break;
        case 7:
          this.xIsNext
            ? this.guess7.setTexture("spritexosingle", [2])
            : this.guess7.setTexture("spritexosingle", [1]);
          this.xIsNext ? this.board.splice(6, 1, 4) : this.board.splice(6, 1, 1);
          this.guess7.disableInteractive();
          break;
        case 8:
          this.xIsNext
            ? this.guess8.setTexture("spritexosingle", [2])
            : this.guess8.setTexture("spritexosingle", [1]);
          this.xIsNext ? this.board.splice(7, 1, 4) : this.board.splice(7, 1, 1);
          this.guess8.disableInteractive();
          break;
        case 9:
          this.xIsNext
            ? this.guess9.setTexture("spritexosingle", [2])
            : this.guess9.setTexture("spritexosingle", [1]);
          this.xIsNext ? this.board.splice(8, 1, 4) : this.board.splice(8, 1, 1);
          this.guess9.disableInteractive();
          break;
          
      }

      if(!this.xIsNext){
        var randomnumber = parseInt(Math.random() * (9 - 1 + 1));
        if(this.board.indexOf(null) !== -1){
          
        while (this.board[randomnumber] !== null) {
            var randomnumber = parseInt(Math.random() * (9 - 1 + 1));  
          }
        }
        if (this.board[randomnumber] === null) {

            switch (randomnumber) {
              case 0:
                this.guess1.setTexture("spritexosingle", [2]);
                this.board.splice(0, 1, 4);
                this.guess1.disableInteractive();
                  break;
              case 1:
              this.guess2.setTexture("spritexosingle", [2]);
              this.board.splice(1, 1, 4);
              this.guess2.disableInteractive();
                break;
              case 2:
                this.guess3.setTexture("spritexosingle", [2]);
              this.board.splice(2, 1, 4);
              this.guess3.disableInteractive();
                break;
              case 3:
                this.guess4.setTexture("spritexosingle", [2]);
              this.board.splice(3, 1, 4);
              this.guess4.disableInteractive();
                break;
              case 4:
                this.guess5.setTexture("spritexosingle", [2]);
              this.board.splice(4, 1, 4);
              this.guess5.disableInteractive();
                break;
              case 5:
                this.guess6.setTexture("spritexosingle", [2]);
              this.board.splice(5, 1, 4);
              this.guess6.disableInteractive();
                break;
              case 6:
                this.guess7.setTexture("spritexosingle", [2]);
              this.board.splice(6, 1, 4);
              this.guess7.disableInteractive();
                break;
              case 7:
                this.guess8.setTexture("spritexosingle", [2]);
              this.board.splice(7, 1, 4);
              this.guess8.disableInteractive();
                break;
              case 8:
                this.guess9.setTexture("spritexosingle", [2]);
              this.board.splice(8, 1, 4);
              this.guess9.disableInteractive();
                break;
          }
           
        this.xIsNext = !this.xIsNext;
      }
      }
      
      this.checkWins(this.board);
    }
      checkWins() {
        let b = this.board;
    
        if (
          b[0] + b[1] + b[2] === 3 ||
          b[3] + b[4] + b[5] === 3 ||
          b[6] + b[7] + b[8] === 3 ||
          b[0] + b[3] + b[6] === 3 ||
          b[1] + b[4] + b[7] === 3 ||
          b[2] + b[5] + b[8] === 3 ||
          b[0] + b[4] + b[8] === 3 ||
          b[6] + b[4] + b[2] === 3
        ) {
          this.Winner = "blue";
          this.singlebkg.stop();
          this.scene.start("gameOver", { Winner: this.Winner });
          return
        } else if (
          b[0] + b[1] + b[2] === 12 ||
          b[3] + b[4] + b[5] === 12 ||
          b[6] + b[7] + b[8] === 12 ||
          b[0] + b[3] + b[6] === 12 ||
          b[1] + b[4] + b[7] === 12 ||
          b[2] + b[5] + b[8] === 12 ||
          b[0] + b[4] + b[8] === 12 ||
          b[6] + b[4] + b[2] === 12
        ) {
          this.Winner = "yellow";
          this.singlebkg.stop();
          this.scene.start("gameOver", { Winner: this.Winner });
          return
        } else if (b.indexOf(null) === -1) {
           this.Winner = "draw";
           this.multibkg.stop();
           this.scene.start("gameOver", { Winner: this.Winner });
        }
      }
  }
  export default SceneCPU;
  