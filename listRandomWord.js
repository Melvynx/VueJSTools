Vue.component('listrandom', {
  props: ['word'],
  data() {
    return {
      styleWord: {
        color: "#b691ff",
        fontSize: "25px",
      }
    }
  },
  methods: {
    styleWordFun() {
      console.log("sos");
      if (this.word.id == 1) {
        this.styleWord.color = "#ecef2e";   
      }
      if (this.word.id == 2) {
        this.styleWord.color = "#efa92e";        
      }
      if (this.word.id == 3) {
        this.styleWord.color = "#f05b24";        
      }
      if (this.word.id > 3) {
        this.styleWord.color = "#b691ff";
      }
    }
  },
    template: `
    <div class="blockWord" v-bind:style="styleWordFun()">
      <p v-bind:style="styleWord">{{ word.id }}. {{ word.word }}</p>
    </div>
  `,
  })