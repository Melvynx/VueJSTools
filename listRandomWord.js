Vue.component('listrandom', {
  props: ['word'],
  data() {
    return {
      styleWord: {
        color: "#b691ff",
        fontSize: "18px",
      }
    }
  },
  methods: {
    styleWordFun() {
      if (this.word.id == 1) {
        this.styleWord.color = "#ecef2e";        
        this.styleWord.fontSize = "30px";        
      }
      if (this.word.id == 2) {
        this.styleWord.color = "#efa92e";        
        this.styleWord.fontSize = "26px";        
      }
      if (this.word.id == 3) {
        this.styleWord.color = "#f05b24";        
        this.styleWord.fontSize = "22px";        
      }

    }
  },
    template: `
    <div class="blockWord" v-bind:style="styleWordFun()">
      <p v-bind:style="styleWord">{{ word.id }}. {{ word.word }}</p>
    </div>
  `,
  })