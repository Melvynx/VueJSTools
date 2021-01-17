const empty = "";
const cross = "cross.svg";
const round = "round.svg";
Vue.component("tictactoe", {
  data() {
    return {
      src1: empty,
      src2: empty,
      src3: empty,

      src4: empty,
      src5: empty,
      src6: empty,

      src7: empty,
      src8: empty,
      src9: empty,
      otherPlayed: true,
      counterTry: 0,

      stroke1Player: "",
      stroke1Me: "",

      stroke2Player: "",
      stroke2Me: "",

      stroke3Player: "",
      stroke3Me: "",

      stroke4Player: "",
      stroke4Me: "",

      stroke5Player: "",
      stroke5Me: "",
    };
  },
  methods: {
    chooseCase(srcCase) {
      if (this.otherPlayed) {
        //Coup USER
        //Coup USER
        //Coup USER
        this.counterTry++;
        this.otherPlayed = false;
        switch (srcCase) {
          case 1:
            if (this.src1 == empty) {
              this.src1 = cross;
            } else {
              this.otherPlayed = true;
              srcCase = 0;
            }
            break;
          case 2:
            if (this.src2 == empty) {
              this.src2 = cross;
            } else {
              this.otherPlayed = true;
              srcCase = 0;
            }
            break;
          case 3:
            if (this.src3 == empty) {
              this.src3 = cross;
            } else {
              this.otherPlayed = true;
              srcCase = 0;
            }
            break;
          case 4:
            if (this.src4 == empty) {
              this.src4 = cross;
            } else {
              this.otherPlayed = true;
              srcCase = 0;
            }
            break;
          case 5:
            if (this.src5 == empty) {
              this.src5 = cross;
            } else {
              this.otherPlayed = true;
              srcCase = 0;
            }
            break;
          case 6:
            if (this.src6 == empty) {
              this.src6 = cross;
            } else {
              this.otherPlayed = true;
              srcCase = 0;
            }
            break;
          case 7:
            if (this.src7 == empty) {
              this.src7 = cross;
            } else {
              this.otherPlayed = true;
              srcCase = 0;
            }
            break;
          case 8:
            if (this.src8 == empty) {
              this.src8 = cross;
            } else {
              this.otherPlayed = true;
              srcCase = 0;
            }
            break;
          case 9:
            if (this.src9 == empty) {
              this.src9 = cross;
            } else {
              this.otherPlayed = true;
              srcCase = 0;
            }
            break;
        }
        // 1 er coup - MACHINE
        // 1 er coup - MACHINE
        // 1 er coup - MACHINE
        if (this.counterTry == 1) {
          if (srcCase == 1 || srcCase == 3 || srcCase == 7 || srcCase == 9) {
            switch (srcCase) {
              case 1:
                this.src3 = round;
                break;
              case 3:
                this.src1 = round;
                break;
              case 7:
                this.src3 = round;
                break;
              case 9:
                this.src3 = round;
                break;
            }
          }
          if (srcCase == 4 || srcCase == 8) {
            this.src3 = round;
          }
          if (srcCase == 6 || srcCase == 2 || srcCase == 5) {
            this.src7 = round;
          }
          this.otherPlayed = true;
          this.stroke1Player = srcCase;
        }
        // 2 er coup - MACHINE
        // 2 er coup - MACHINE
        // 2 er coup - MACHINE

        if (this.counterTry == 2) {
          if (this.stroke1Player == 5) {
            switch (srcCase) {
              case 2:
                this.src8 = round;
                break;
              case 4:
                this.src6 = round;
                break;
              case 8:
                this.src2 = round;
                break;
              case 6:
                this.src4 = round;
                break;
            }
          }
          if (
            this.stroke1Player == 4 ||
            this.stroke1Player == 2 ||
            this.stroke1Player == 8 ||
            this.stroke1Player == 6
          ) {
            switch (srcCase) {
              case 5:
                switch (this.stroke1Player) {
                  case 8:
                    this.src2 = round;
                    break;
                  case 4:
                    this.src6 = round;
                    break;
                  case 2:
                    this.src8 = round;
                    break;
                  case 6:
                    this.src4 = round;
                    break;
                }
                break;
              case 9:
                if (this.stroke1Player == 2 || this.stroke1Player == 6) {
                  this.src3 = round;
                } else {
                  this.src7 = round;
                }
                break;
              case 7:
                this.src9 = round;
                break;
              case 1:
                if (this.stroke1Player == 2 || this.stroke1Player == 6) {
                  this.src3 = round;
                } else {
                  this.src7 = round;
                }
                break;
              case 4:
                if (this.stroke1Player == 2 || this.stroke1Player == 6) {
                  this.src1 = round;
                } else {
                  this.src7 = round;
                }
                break;
              case 6:
                if (this.stroke1Player == 2 || this.stroke1Player == 6) {
                  this.src3 = round;
                } else {
                  this.src7 = round;
                }
                break;

              case 2:
                if (this.stroke1Player == 2 || this.stroke1Player == 6) {
                  this.src1 = round;
                } else {
                  this.src7 = round;
                }
                break;
              case 8:
                if (this.stroke1Player == 2 || this.stroke1Player == 6) {
                  this.src1 = round;
                } else {
                  this.src7 = round;
                }
                break;
              case 3:
                if (this.stroke1Player == 2 || this.stroke1Player == 6) {
                  this.src1 = round;
                } else {
                  this.src7 = round;
                }
                break;
            }
          }
        }
      }
      console.log("Try :" + this.counterTry);
      console.log("Case :" + srcCase);
    },
  },
  template: `
  <div class="tictactoeBlock" v-on:keyup.space="pauseTimer">

   <div class="firstColonne colonne">
    <div class="firstLigne case" v-on:click="chooseCase(1)"><img v-bind:src="src1" /></div>
    <div class="secondLigne case" v-on:click="chooseCase(2)"><img v-bind:src="src2" /></div>
    <div class="thirdLigne case" v-on:click="chooseCase(3)"><img v-bind:src="src3" /></div>
   </div>

   <div class="secondColonne colonne">
    <div class="firstLigne case" v-on:click="chooseCase(4)"><img v-bind:src="src4" /></div>
    <div class="secondLigne case" v-on:click="chooseCase(5)"><img v-bind:src="src5" /></div>
    <div class="thirdLigne case" v-on:click="chooseCase(6)"><img v-bind:src="src6" /></div>
   </div>

   <div class="thirdColonne colonne">
    <div class="firstLigne case" v-on:click="chooseCase(7)"><img v-bind:src="src7"/></div>
    <div class="secondLigne case" v-on:click="chooseCase(8)"><img v-bind:src="src8"/></div>
    <div class="thirdLigne case" v-on:click="chooseCase(9)"><img v-bind:src="src9"/></div>
   </div>

  </div>
   `,
});
