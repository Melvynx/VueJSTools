Vue.component('randomword', {
  props: [''],
  data() {
    return {
      words : ["banane", "pied", "frange","qoqasien perdu"],
      valueAddWord: "",
      heightList: "50" + "px",
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
        console.log("--- "+this.words[i]+"---"+word);
        if (this.words[i] == word){
          console.log("ok");
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
    reset() {
      this.words = ["banane", "pied", "frange","qoqasien perdu"];
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
      
      <div class="listWord" v-bind:style="{ height : heightList }">
        <div v-for="word in words" class="forWord">
          <p class="wordAlone" v-on:click="deleteWord(word)">{{ word }}<img src="crossWord.svg" class="svgCrossWord"></p>
        </div>
      </div>
      
      <div class="addWord">
        <input class="addWordText" type="text" v-model="valueAddWord" v-on:keyup="tryHeightList" v-on:keyup.enter="addWord" />
        <input class="addWordSubmit" type="submit" value="Add" v-on:click="addWord" />
      </div>
    </div>
  `,
  })