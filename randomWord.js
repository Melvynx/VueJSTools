Vue.component('randomword', {
  props: [''],
  data() {
    return {
      words : [],
      wordsRandoms : [{id : 0, word: "didier"}],
      
      isAddingWord: true,
      valueAddWord: "",
      heightList: "50" + "px",
      addingWord: true,
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10,
      textInfoErreur: "Erreur",
      infoErreur: false,
      transisRandomizerAgain: false,
    }
  }, 
  methods: {
    click(){
      words.push(new createWord("Michel", blockPage.words))
      console.log(blockPage.words);
    },
    deleteWord(word) {
      x = this.words.length;
      console.log(x);
      for (let i=0; i < x; i++) {
        if (this.words[i] == word){
          this.words.splice(i, 1);
        }
      }
      this.tryHeightList();
    },
    addWord() {
      if (tryNewWord(this.valueAddWord, this.words)) {
        this.words.push(this.valueAddWord);
        this.valueAddWord = "";
      } else {
        this.textInfoErreur = "La valeur doit être comprise entre 1 et 50 caractères et ne doit pas déjà exisité.";
        this.infoErreur = true;

        
        setTimeout(() => {
          this.infoErreur = false;
        }, 5000);
      }
      
    },
    tryHeightList() {
      ref = 60;
      size = this.words.length;
      if (size % 2 == 0) {
        this.heightList = ref * (size / 10) + "px";  
        console.log(this.heightList)
      }
    },
    startRandomWord() {
      if (this.words.length > 1 && this.words.length < 1000) {
        randomArray = randomizArray(this.words);
        this.wordsRandoms = randomArray;
        this.isAddingWord = false;
      }else {
        this.textInfoErreur = "On ne peut pas randomizer une seul et unique valeur !(ou rien :p)";
        this.infoErreur = true;
        setTimeout(() => {
          this.infoErreur = false;
        }, 5000);

      }
    },
    reset() {
      this.words = ["tu", "as", "perdu","la tête", "?"];
    },
    turnOffListMode() {
      this.isAddingWord = true;
    },
    randomizAgain() {
      randomArray = randomizArray(this.words);
      this.wordsRandoms = randomArray;

      this.transisRandomizerAgain = true;
      console.log(this.transisRandomizerAgain);
      setTimeout(() => {
        this.transisRandomizerAgain = false;
      }, 500);
    }
    
  },
    template: `
    <div class="randomWordBlock">
      <h1 v-on:click="reset">Random a list of Word !</h1>
      <p class="pRandomWord">
        Vous pourrez ici ajouter plusieurs mot ou chaine de mot, pour ensuite les randomizé.
        <br /> Il vous sera donnée la premières 
        <span class="pRandomWordFirst"> 
          réponses !
        </span>.
      </p>
      
      <div v-show="isAddingWord"  v-bind:style="{ height : heightList }">
      <transition-group name="list-complete" tag="p" class="listWord">
        <div v-for="word in words" class="forWord list-word list-complete-item" v-bind:key="word">
          <p class="wordAlone" v-on:click="deleteWord(word, words)">{{ word }}<img src="crossWord.svg" class="svgCrossWord"></p>
        </div>
      </transition-group>
      </div>
      <transition name="fade">
      <div class="blockListWord" v-show="!isAddingWord">
        <div class="randomWord" v-on:click="randomizAgain">
        <transition-group name="flip-list" tag="p">
          <listrandom v-for="word in wordsRandoms" v-bind:word="word" v-bind:key="word.word">
          </listrandom>
        </transition-group>
        </div>
        <div class="blockButtonListWord">
          <button v-on:click="turnOffListMode" class="buttonBackToAddWord">Modifier/Ajouter</button>
          <button v-on:click="randomizAgain" v-bind:class="{ transitionDown : transisRandomizerAgain }" class="buttonListWord">Randomiz again</button>
        </div>
      </div>
      </transition>
      <div class="blockAddWord" v-show="isAddingWord">
      <transition name="msgErreur">
      <p class="infoErreur" v-if="infoErreur">{{ textInfoErreur }}</p>
      </transition>
        <div class="addWord">
          <input class="addWordText" type="text" v-model="valueAddWord" v-on:keyup="tryHeightList" v-on:keyup.enter="addWord" />
          <input class="addWordSubmit" type="submit" value="Add" v-on:click="addWord" />
        </div>
        <input class="startRandom" type="Submit" value="Randomizzzz" v-on:click="startRandomWord">
        </div>
      </div>
  `,
  })
  