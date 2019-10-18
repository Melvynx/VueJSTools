Vue.component('randomword', {
  props: [''],
  data() {
    return {
      words : [],
      wordsRandoms : ["Didier", "pascal"],
      
      isAddingWord: true,
      valueAddWord: "",
      heightList: "50" + "px",
      addingWord: true,
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
      if (tryNewWord(this.valueAddWord)) {
        if (this.words.length < 100) {
          this.words.push(this.valueAddWord);
          this.valueAddWord = "";
        } else {

        }
      } else {
        
      }
      
      
    },
    tryHeightList() {
      ref = 60;
      size = this.words.length;
      if (size % 2 == 0) {
        this.heightList = ref * (size / 4) + "px";  
        console.log(this.heightList)
      }
    },
    startRandomWord() {
      randomArray = randomizArray(this.words);
      this.wordsRandoms = randomArray;
      this.isAddingWord = false;
    },
    reset() {
      this.words = ["tu", "as", "perdu","la tête", "?"];
    },
    turnOffListMode() {
      this.isAddingWord = true;
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
      
      <div v-show="isAddingWord" class="listWord" v-bind:style="{ height : heightList }">
        <div v-for="word in words" class="forWord">
          <p class="wordAlone" v-on:click="deleteWord(word, words)">{{ word }}<img src="crossWord.svg" class="svgCrossWord"></p>
        </div>
      </div>
      <div class="blockListWord" v-show="!isAddingWord">
        <div class="randomWord">
          <listrandom v-for="word in wordsRandoms" v-bind:word="word" v-bind:key="word.id">
          </listrandom>
          
        </div>
        <div class="blockButtonListWord">
          <button v-on:click="turnOffListMode" class="buttonListWord">Modifier/Ajouter</button>
          <button v-on:click="startRandomWord" class="buttonListWord">Randomiz again</button>
        </div>
      </div>
      <div class="blockAddWord" v-show="isAddingWord">
        <div class="addWord">
          <input class="addWordText" type="text" v-model="valueAddWord" v-on:keyup="tryHeightList" v-on:keyup.enter="addWord" />
          <input class="addWordSubmit" type="submit" value="Add" v-on:click="addWord" />
        </div>
        <input class="startRandom" type="Submit" value="Randomizzzz" v-on:click="startRandomWord">
        </div>
      </div>
  `,
  })