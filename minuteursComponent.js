Vue.component('minuteur', {
  data() {
    return {
      ms : "00",
      hours: "00",
      minutes: "01",
      secondes: "00",
      saveHours: 00,
      saveMinutes: 05,
      saveSecondes: 00,
      showHours: true,
      showMinutes: true,
      showSecondes: true,
      
      timerCountStart: false,

      valuePause: "Pause",

      startIsDo: false,
      timeImg: "",
    }
 },
 methods: {
  changeHours() {
    this.showHours = false;
    this.$nextTick(() => this.$refs.refHours.focus());

  },
  changeMinutes() {
    this.showMinutes = false;
    this.$nextTick(() => this.$refs.refMinutes.focus());

  },
  changeSecondes() {
    this.showSecondes = false;
    this.$nextTick(() => this.$refs.refSecondes.focus());

  },
  stopChange() {

    this.showHours = true;
    this.showMinutes = true;
    this.showSecondes = true;

    if (Number(this.minutes) > 60) {
      this.minutes = 60;
    } 
    if (Number(this.secondes) > 60) {
      this.secondes = 60;
    } 
  },
  catchHours() {
    if (this.hours != "0" || this.hours != " ") {
      if (isNaN(this.hours)) {
        this.hours = 00;
      } else {
      this.hours = Number(this.hours);
      }
    }
    if (this.hours.length >= 3 || this.hours > 99) {
      console.log("salut")
      this.hours = twoNumberMaxSplit(String(this.hours));
    }
    if (Number(this.hours) < 0) {
      this.hours = 0;
    }
  },
  catchMinutes() {
    if (this.minutes != "0" || this.minutes != " ") {
      if (isNaN(this.minutes)) {
        this.minutes = 00;
      } else {
      this.minutes = Number(this.minutes);
      }
    }
    if (this.minutes.length >= 3 || this.minutes > 99) {
      console.log("salut")
      this.minutes = twoNumberMaxSplit(String(this.minutes));
    }
    if (Number(this.minutes) < 0) {
      this.minutes = 0;
    }
  },
  catchSecondes() {
    if (this.secondes != "0" || this.secondes != " ") {
      if (isNaN(this.secondes)) {
        this.secondes = 00;
      } else {
      this.secondes = Number(this.secondes);
      }
    }
    if (this.secondes.length >= 3 || this.secondes > 99) {
      console.log("salut")
      this.secondes = twoNumberMaxSplit(String(this.secondes));
    }
    if (Number(this.secondes) < 0) {
      this.secondes = 0;
    }
  },
  startTimer() {
    this.saveHours = Number(this.hours);
    this.saveMinutes = Number(this.minutes);
    this.saveSecondes = Number(this.secondes);
    this.timerCountStart = true;
    this.timerCount();
    this.startIsDo = true;
  },
  timerCount(){
    hours = Number(this.hours);
    minutes = Number(this.minutes);
    secondes = Number(this.secondes);

    if (this.timerCountStart) {

      if (this.ms >= 100) {
        this.ms = 0;
        if (secondes <= 10) {
          secondes = secondes - 1;
          this.secondes = "0" + secondes;
        } else {
          this.secondes = this.secondes - 1;
        }
      }



      if (secondes <= 0) {
        console.log("secondes PLUS PETIT que 0")
        this.secondes = 59;
        secondes = 59;
        if (minutes <= 10) {
          minutes = minutes - 1;
          this.minutes = "0" + minutes;
        } else {
          this.minutes = minutes - 1;
        }
       
      }
      if (minutes < 0) {
        if (this.hours > 0) {
          this.minutes = 59;
        } else {
          this.minutes = "00";
        }
        this.hours = hours - 1;

      }
      if (this.hours < 0) {

        this.timerFinish();
      }
    
      setTimeout(() => {
        this.ms = Number(this.ms) + 1;
        this.timerCount();
      }, 9);
    }
  },
  timerFinish(){
    this.hours = "00";
    this.minutes = "00";

    this.secondes = "00";
    

    console.warn("finish");
    this.timerCountStart = false;

    this.timeImg = "time.gif";

  },
  pauseTimer() {
    h = this.hours;
    m = this.minutes;
    s = this.secondes;
    this.timerCountStart = !this.timerCountStart;
    this.timerCount();
    this.hours = h;
    this.minutes = m;
    this.secondes = s;
    if (this.timerCountStart) {
      this.valuePause = "Pause";
    } else {
      this.valuePause = "Play"
    }
  },
  resetTimer() {
    console.log("Reset ahahah :p")
    this.timerCountStart = false;
    
    this.startIsDo = false;
    this.timeImg = "";
    this.hours = this.saveHours;
    this.minutes = this.saveMinutes;
    this.secondes = this.saveSecondes;
  },
 },
 template: `
 <div class="minuteurBlock">
  <div class="itemTimer" v-on:keyup.enter="stopChange">
    <h2 v-show="showHours" v-on:click="changeHours" class="hours">{{ hours }}</h2>
    <input @focusout="stopChange" v-on:keyup="catchHours" v-show="!showHours" class="inputNumber" type="numbers" v-model="hours" ref="refHours"/>

    <h2 class="separation">:</h2>
    
    <h2 v-show="showMinutes" v-on:click="changeMinutes" class="minutes">{{ minutes }}</h2>
    <input @focusout="stopChange" v-on:keyup="catchMinutes" v-show="!showMinutes" class="inputNumber" type="numbers" v-model="minutes" ref="refMinutes"/>
    
    <h2 class="separation">:</h2>
    
    <h2 v-show="showSecondes" v-on:click="changeSecondes" class="secoonds">{{ secondes }}</h2>
    <input @focusout="stopChange" v-on:keyup="catchSecondes" v-show="!showSecondes" class="inputNumber" type="numbers" v-model="secondes" ref="refSecondes"/>
  </div>

  <div class="inputOption">
    <input v-show="!startIsDo" type="button" value="Start" v-on:click="startTimer" class="inputNumber buttonStart"/>
    <input v-show="startIsDo" type="button" v-bind:value="valuePause" v-on:click="pauseTimer" class="inputNumber buttonStart"/>
    <input type="button" value="Reset" v-on:click="resetTimer" class="inputNumber buttonStart"/>

  </div>
  <img v-bind:src="timeImg" class="timerGif"/>
 </div>
 `,
})