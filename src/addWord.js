Vue.component("addWord", {
  props: {
    isAddingWord: Boolean,
    words: Array,
  },
  data() {
    return {};
  },
  methods: {
    deleteWord(word) {
      const wordsLength = this.words.length;
      console.log(wordsLength);
      for (let i = 0; i < wordsLength; i++) {
        if (this.words[i] == word) {
          this.words.splice(i, 1);
        }
      }
    },
    addWord() {
      if (tryNewWord(this.valueAddWord, this.words)) {
        this.words.push(this.valueAddWord);
        this.valueAddWord = "";
      } else {
        this.textInfoErreur =
          "La valeur doit être comprise entre 1 et 50 caractères et ne doit pas déjà exisité.";
        this.infoErreur = true;

        setTimeout(() => {
          this.infoErreur = false;
        }, 5000);
      }
    },
  },
  template: `
<div v-show="isAddingWord" v-bind:style="{ height : heightList }">
  <transition-group name="list-complete" tag="p" class="listWord">
    <div
      v-for="word in words"
      class="forWord list-word list-complete-item"
      v-bind:key="word"
    >
      <p class="wordAlone" v-on:click="deleteWord(word, words)">
        {{ word }}<img src="crossWord.svg" class="svgCrossWord" />
      </p>
    </div>
  </transition-group>

  <transition name="msgErreur">
    <p class="infoErreur" v-if="infoErreur">{{ textInfoErreur }}</p>
  </transition>
  <div class="addWord">
    <input
      class="addWordText"
      type="text"
      v-model="valueAddWord"
      v-on:keyup.enter="addWord"
    />
    <button
      class="addWordSubmit"
      value="Add"
      v-on:click="addWord"
    >Add</button>
  </div>
  <button
    class="startRandom"
    type="Submit"
    value="Randomizzzz"
    v-on:click="startRandomWord"
  >Randomizzzz</button>
</div>
  `,
});
