Vue.component("randomword", {
  props: {
    bite: String,
  },
  data() {
    return {
      isAddingWord: false,
    };
  },
  methods: {
    taper() {
      console.log(this.bitc)
    }
  },
  template: `
<div class="randomWordBlock">
  <!-- Composent Base -->
  <h1 v-on:click="reset">Random a list of Word !</h1>
  <p class="pRandomWord">
    Vous pourrez ici ajouter plusieurs mot ou chaine de mot, pour ensuite
    les randomizé.
    <br />
    Il vous sera donnée la premières
    <span class="pRandomWordFirst"> réponses ! </span>.
  </p>



</div>
  `
});
