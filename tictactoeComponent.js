const empty = "";
const cross = "cross.svg";
const round = "round.svg";
Vue.component('tictactoe', {
  data() {
   return {
    src1_1: empty,
    src1_2: empty,
    src1_3: empty,

    src2_1: empty,
    src2_2: empty,
    src2_3: empty,
    
    src3_1: empty,
    src3_2: empty,
    src3_3: empty,
    otherPlayed: true,
    counterTry: 0,

    stroke1Player: "",
    stroke1Me:"",

    stroke2Player:"", 
    stroke2Me:"",

    stroke3Player: "",
    stroke3Me:"",

    stroke4Player: "",
    stroke4Me: "", 

    stroke5Player: "", 
    stroke5Me: "",

   }
  },
  methods: {
    chooseCase(srcCase) {
      let caseChange;
      if (this.otherPlayed) {
        this.counterTry++;
        this.otherPlayed = false;
        switch(srcCase) {
          case 1.1:
            this.src1_1 = cross;
            caseChange = 1.1;
            break;
          case 1.2:
            this.src1_2 = cross;
            caseChange = 1.2;
            break;
          case 1.3:
            this.src1_3 = cross;
            caseChange = 1.3;
            break;
          case 2.1:
            this.src2_1 = cross;
            caseChange = 2.1;
            break;
          case 2.2:
            console.log(this.src2_2);
            this.src2_2 = cross;
            caseChange = 2.2;
            break;
          case 2.3:
            this.src2_3 = cross;
            caseChange = 2.3;
            break;
          case 3.1:
            this.src3_1 = cross;
            caseChange = 3.1;
            break;
          case 3.2:
            this.src3_2 = cross;
            caseChange = 3.2;
            break;
          case 3.3:
            this.src3_3 = cross;
            caseChange = 3.3;
            break;
        }
      }
      console.log(caseChange);
      this.nextStroke(caseChange);
    },
    nextStroke(caseC) {

      if (this.counterTry == 1) {
        if(caseC == 1.1 || caseC == 1.3 || caseC == 3.1 || caseC == 3.3) {
          switch(caseC) {
            case 1.1:
              this.src1_3 = round;
              break;
            case 1.3:
              this.src3_3 = round;
              break;
            case 3.1:
              this.src1_1 = round;
              break;
            case 3.3:
              this.src3_1 = round;
              break;
          }
        }
        if (caseC == 2.1 || caseC == 3.2) {
          this.src1_3 = round;
        }
        if (caseC == 2.3 || caseC == 1.2 || caseC == 2.2) {
          this.src3_1 = round;
        }
        this.otherPlayed = true;
        this.stroke1Player = caseC;
      }

      if (this.counterTry == 2) {
        if (this.stroke1Player == 2.2) {
          switch(caseC) {
            case 1.2:
              this.src3_2 = round;
              break;
            case 2.1:
              this.src2_3 = round;
              break;
            case 3.2:
              this.src1_2 = round;
              break;
            case 2.3:
              this.src2_1 = round;
              break;
          }
        }
        if (this.stroke1Player == 2.1 || this.stroke1Player == 1.2 || this.stroke1Player == 3.2 || this.stroke1Player == 2.3) {
          switch(caseC) {
            case 2.2:
              if (this.stroke1Player == 3.2) {
                this.src1_2 = round;
              } else {
                this.src2_1 = round;
              }
              break;
            case 3.2:
              this.src3_3 = round;
              break;
            case 2.1:
              this.src1_1 = round;
              break;
            case 1.2:
              this.src2_2 = round;
              break;
            case 2.2:
              this.src2_1 = round;
              break;
          }

        }

         
      }

    },
  },
  template: `
  <div class="tictactoeBlock" v-on:keyup.space="pauseTimer">

   <div class="firstColonne colonne">
    <div class="firstLigne case" v-on:click="chooseCase(1.1)"><img v-bind:src="src1_1" /></div>
    <div class="secondLigne case" v-on:click="chooseCase(1.2)"><img v-bind:src="src1_2" /></div>
    <div class="thirdLigne case" v-on:click="chooseCase(1.3)"><img v-bind:src="src1_3" /></div>
   </div>

   <div class="secondColonne colonne">
    <div class="firstLigne case" v-on:click="chooseCase(2.1)"><img v-bind:src="src2_1" /></div>
    <div class="secondLigne case" v-on:click="chooseCase(2.2)"><img v-bind:src="src2_2" /></div>
    <div class="thirdLigne case" v-on:click="chooseCase(2.3)"><img v-bind:src="src2_3" /></div>
   </div>

   <div class="thirdColonne colonne">
    <div class="firstLigne case" v-on:click="chooseCase(3.1)"><img v-bind:src="src3_1"/></div>
    <div class="secondLigne case" v-on:click="chooseCase(3.2)"><img v-bind:src="src3_2"/></div>
    <div class="thirdLigne case" v-on:click="chooseCase(3.3)"><img v-bind:src="src3_3"/></div>
   </div>

  </div>
   
   
   
   
   
   
   
   `,
  })/*
  switch(caseC) {
    case 2.2:
      switch(this.stroke1Player) {
        case 3.2:
          this.src1_2 = round;
        case 2.1:
          this.src2_3 = round;
        case 1.2:
          this.src3_2 = round;
        case 2.3:
          this.src2_1 = round;
      }
      break;
    case 1.1:
      this.src3_3 = round;
    case 1.3:
      this.src3_3 = round;
      break;
    case 3.1:
      this.src3_3 = round;
    case 3.3:
      this.src3_3 = round;
*/