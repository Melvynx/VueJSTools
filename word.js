Vue.component('word', {
  props: ['word'],
  data() {
    return {
      
    }
  },
  methods: {
    test() {
      $emit('deleteWord('+this.word+')')
    }
  },
  template: `
  <div class="listWord" v-on:click="test">
    {{ word }}
    
  </div>
  `,
  })