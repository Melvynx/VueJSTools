Vue.component("timer", {
  data() {
    return {
      minutes: "00",
      secondes: "00",
      ms: "00",
      minutesLastTour: "",
      secondesLastTour: "",
      msLastTour: "",
      timerStart: false,
      timerStarting: false,
      valuePause: "Pause",
      tours: [],

      infoStart: "michel",
      start: false,
      stop: false,
      pause: false,
    };
  },
  methods: {
    startTimer() {
      console.log("--- Start TIMER ---");
      this.timerStart = true;
      this.compteurSecondes();
      this.timerStarting = true;
      this.tours = [];
      this.infoStart = "Start";
      this.start = true;
      setTimeout(() => {
        this.start = false;
      }, 500);
    },
    pauseTimer() {
      console.log("--- Pause TIMER ---");
      this.timerStart = !this.timerStart;
      this.compteurSecondes();
      if (this.timerStart) {
        this.valuePause = "Pause";

        this.infoStart = "Play";
        this.pause = true;
        setTimeout(() => {
          this.pause = false;
        }, 500);
      } else {
        this.valuePause = "Play";

        this.infoStart = "Pause";
        this.pause = true;
        setTimeout(() => {
          this.pause = false;
        }, 500);
      }
    },
    stopTimer() {
      console.log("--- Stop TIMER ---");
      this.ms = "00";
      this.minutes = "00";
      this.secondes = "00";
      this.timerStart = false;
      this.timerStarting = false;
      this.tours = [];
      setTimeout(() => {
        this.ms = "00";
      }, 100);

      this.infoStart = "Reset";
      this.stop = true;
      setTimeout(() => {
        this.stop = false;
      }, 500);
    },
    compteurSecondes() {
      if (this.timerStart) {
        this.secondes = Number(this.secondes);
        this.minutes = Number(this.minutes);
        this.ms = Number(this.ms);
        setTimeout(() => {
          this.ms = Number(this.ms) + 1;
          this.compteurSecondes();
        }, 9);
        if (this.secondes >= 60) {
          this.secondes = 0;
          this.minutes = this.minutes + 1;
        }
        if (this.ms >= 100) {
          this.ms = 0;
          this.secondes = this.secondes + 1;
        }
        if (this.secondes < 10) {
          this.secondes = "0" + Number(this.secondes);
        }
        if (this.minutes < 10) {
          this.minutes = "0" + this.minutes;
        }
        if (this.ms < 10) {
          this.ms = "0" + Number(this.ms);
        }
      }
    },
    toursTimer() {
      newTours = new toursTimer(
        this.minutes,
        this.secondes,
        this.ms,
        this.tours
      );
      this.tours.push(newTours);
      lastTour = findTheBiggestID(this.tours) - 2;
      console.log(this.tours);
      console.log(lastTour);
      console.log(this.tours[lastTour]);
      this.minutesLastTour =
        this.minutes - Number(this.tours[lastTour].minutes);
      this.secondesLastTour =
        this.secondes - Number(this.tours[lastTour].secondes);
      this.msLastTour = this.minutes - this.tours[lastTour].ms;
    },
  },
  template: `
 <div class="timerBlock" v-on:keyup.space="pauseTimer">
  <div class="itemTimer">
      <h2 class="hours">{{ minutes }}</h2>
      <h2 class="separation">:</h2>
      <h2 class="minutes">{{ secondes }}</h2>
      <h2 class="separation">:</h2>
      <h2 class="secoonds">{{ ms }}</h2>
  </div>
    <h4 class="info" v-bind:class="{ start : start, stop : stop, pause : pause}">{{ infoStart }}</h4>
  <div class="inputOption">
    <input v-show="!timerStarting" v-on:click="startTimer" type="button" class="inputNumber buttonStart" value="Start">
    <input v-show="timerStarting" v-on:click="pauseTimer" type="button" class="inputNumber buttonStart" v-bind:value="valuePause">
    <input v-on:click="stopTimer" type="button" class="inputNumber buttonStart" value="Reset">
    <input v-on:click="toursTimer" type="button" class="inputNumber buttonStart" value="Tours">
  </div>

  <div class="listTours">
    <div class="tours" v-for="tour in tours">
      <p class="numberTours">Tours {{ tour.id }}</p>
      <p class="timerTours"> {{ tour.time() }} </p>
    </div>

  </div>
 </div>
 
 
 
 
 
 
 
 `,
});
