let labelNumberOneText = "Number 1...";
let labelNumberTwoText = "Number 2...";
let valueSubmitRandomizText = "Randomized !";
Vue.component('random', {
  data() {
    return {
      inputNumberOne: 0,
      inputNumberTwo: 1,
      labelNumberOne: labelNumberOneText,
      labelNumberTwo: labelNumberTwoText,
      wrongNumber: false,
      wrongNumber2: false,
      resultRandom: "",
      valueSubmitRandomiz: valueSubmitRandomizText,
      newNumber: false,
      chargingNumber: false,
      compteur0: 0,
      compteur1: 1,      
      resultCompteur0: "",
      resultCompteur1: "",
    }
  },
  methods: {
    catchNumberOne() {
      if (this.inputNumberOne != "0" || this.inputNumberOne != " ") {
        this.inputNumberOnse = Number(this.inputNumberOne);
      }
        
      one = Number(this.inputNumberOne);
      two = Number(this.inputNumberTwo);
      if (one > 1000) {
        this.inputNumberOne = 1000;
        this.labelNumberOne = "Maximume : 1000";
        this.wrongNumber = true;
        setTimeout(() => {
        this.wrongNumber = false;
        this.labelNumberOne = labelNumberOneText;
        }, 5000);
      }
      if (one < 0) {
        this.inputNumberOne = 0;
        this.labelNumberOne = "Minimume : 0";
        this.wrongNumber = true;
        setTimeout(() => {
        this.wrongNumber = false;
        this.labelNumberOne = labelNumberOneText;
        }, 5000);
      }
      if (two <= one) {
        
        this.inputNumberTwo = Number(this.inputNumberOne) + 1;
        this.labelNumberTwo = "Number 2 must be bigger Number 1.";
        this.wrongNumber2 = true;
        setTimeout(() => {
        this.wrongNumber2 = false;
        this.labelNumberTwo = labelNumberTwoText;
        }, 5000);
      }
    }, 
    catchNumberTwo() {
      if (this.inputNumberTwo != "0" || this.inputNumberTwo != " ") {
        this.inputNumberTwo = Number(this.inputNumberTwo);
      }
      one = Number(this.inputNumberOne);
      two = Number(this.inputNumberTwo);
      if (two > 1000) {
        this.inputNumberTwo = 1000;
        this.labelNumberTwo = "Maximume : 1000";
        this.wrongNumber2 = true;
        setTimeout(() => {
        this.wrongNumber2 = false;
        this.labelNumberTwo = labelNumberTwoText;
        }, 5000);
      }
      if (two < one) {
        this.labelNumberTwo = "Number 2 must be bigger Number 1.";
        this.wrongNumber2 = true;
        setTimeout(() => {
        this.wrongNumber2 = false;
        this.labelNumberTwo = labelNumberTwoText;
        }, 5000);
      }
    },
    randomizNumber() {
      charge1 = getRandomInt(this.inputNumberTwo, this.inputNumberOne);
      charge2 = getRandomInt(this.inputNumberTwo, this.inputNumberOne);
      charge3 = getRandomInt(this.inputNumberTwo, this.inputNumberOne);
      charge4 = getRandomInt(this.inputNumberTwo, this.inputNumberOne);
      charge5 = getRandomInt(this.inputNumberTwo, this.inputNumberOne);
      charge6 = getRandomInt(this.inputNumberTwo, this.inputNumberOne);
      charge7 = getRandomInt(this.inputNumberTwo, this.inputNumberOne);
      chargeString2 = ["##", "#ß", "¥ß", "§$", "#%", "%?"];
      chargeString = [charge1, charge2, charge3, charge4, charge5, charge6, charge7];
      this.chargingNumber = true;
      for(let i = 0; i < chargeString.length; i++) {
        setTimeout(() => {
          this.resultRandom = chargeString[i];
          console.log(chargeString[i])
          if (chargeString[i] == 1) {
            this.resultCompteur1 = this.resultCompteur1 + "u";
          } 
          if (chargeString[i] == 0) {
            this.resultCompteur0 = this.resultCompteur0 + "o";
          }
        }, 10*(i*3));
      }
      console.log("---------")
      setTimeout(() => {
        this.chargingNumber = false;
        this.resultRandom = getRandomInt(this.inputNumberTwo, this.inputNumberOne);
        console.log(this.inputNumberOne+" et "+this.inputNumberTwo+" est égal ="+this.resultRandom);
        this.valueSubmitRandomiz = randomizText(valueSubmitRandomizText);

        //Feathure for add underline when randomiz
        this.newNumber = true;
        setTimeout(() => {
          this.newNumber = false;
        }, 100);
      }, 260);

      
    },
    findNumber() { 

    }
  },
    template: `
    <div>
      <div class="randomBlock">
        <h1>Random Number</h1>
        <p class="subtitle">Choose 2 number to randomized</p>
        <p class="align"><label v-bind:class="{ wrongNumber: wrongNumber }" class="labelNumber1 labelNumber">{{ labelNumberOne }}</label><input type="number" v-on:keyup="catchNumberOne" class="inputNumber inputNumer1" v-model="inputNumberOne"></p>
        
        <p class="align"><label v-bind:class="{ wrongNumber: wrongNumber2 }" class="labelNumber2 labelNumber">{{ labelNumberTwo }}</label><input type="number" v-on:keyup="catchNumberTwo" class="inputNumber inputNumer1" v-model="inputNumberTwo"></p>

        <p class="align"><input class="submitRandomizer inputNumber" v-on:click="randomizNumber" type="submit" v-bind:value="valueSubmitRandomiz"></input></p>
        <h2 class="resultRandom" v-bind:class="{ newNumber : newNumber, chargingNumber : chargingNumber }"> {{ resultRandom }} </h2>
      </div>
      <p>
       1: {{ resultCompteur1 }}
      </p>

      <p>
       0: {{ resultCompteur0 }}
      </p>
    </div>
  
  
  
  
  
  
  `,
})