Vue.component('navi', {
  data() {
    return {
      random: "Random Int",
      timer: "Chronomètre",
      minuteurs: "Minuteurs",
      tictactoe: "TIC TAC TOE",
      randomWord: "Random Word",

      selectedMinuteurs: false,
      selectedTimer: false,
      selectedRandom: false,
      selectedTictactoe: false,
      selectedRandomWord: false,

      timerPage: "timer.html",
      randomPage: "index.html",
      minuteurPage: "minuteur.html",
      tictactoePage: "tictactoe.html",
      randomWordPage: "randomWord.html",
    }
  },
  methods: {
    redirectionTimer() {
        window.location.replace(this.timerPage);
        this.allSelectedOff()
        this.selectedTimer = true;
    },
    redirectionRandom() {
        window.location.replace(this.randomPage);
        this.allSelectedOff();
        console.log("salut");
        this.selectedRandom = true;
    },
    redirectionMinuteur() {
        window.location.replace(this.minuteurPage);
        this.allSelectedOff();
        this.selectedMinuteurs = true;
    },
    redirectionTicTacToe() {
        window.location.replace(this.tictactoePage);
        this.allSelectedOff();
        this.selectedTictactoe = true;
    },
    redirectionRandomWord() {
      window.location.replace(this.randomWordPage);
      this.allSelectedOff();
      this.selectedRandomWord = true;
    },
    allSelectedOff() {
      this.selectedMinuteurs = false;
      this.selectedRandom = false;
      this.selectedTictactoe = false;
      this.selectedTimer = false;
      this.selectedRandomWord = false;
    }
  },
    template: `
    <nav>
      <ul>
        <li v-on:click="redirectionRandom" v-bind:class="{ selected : selectedRandom }"><a href="#">{{ random }}</a></a></li>
        <li v-on:click="redirectionTimer" v-bind:class="{ selected : selectedTimer }"><a href="#">{{ timer }}</a></li>
        <li v-on:click="redirectionMinuteur" v-bind:class="{ selected : selectedMinuteurs }"><a href="#">{{ minuteurs }}</a></li>
        <li v-on:click="redirectionTicTacToe" v-bind:class="{ selected : selectedTictactoe }"><a href="#">{{ tictactoe }}</a></li>
        <li v-on:click="redirectionRandomWord" v-bind:class="{ selected  : selectedRandomWord }"><a href="#">{{ randomWord }}</a></li>
      </ul>
    </nav>
  `,
})
