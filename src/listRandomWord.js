Vue.component("listrandom", {
  props: ["word"],
  data() {
    return {
      wordStyle: {
        color: findWordColor(),
        fontSize: "24px",
      },
      settingsOnlyMode: false,
    };
  },
  methods: {
    findWordColor() {
      switch (this.word.id) {
        case 1:
          return "#ecef2e";
        case 2:
          return "#efa92e";
        case 3:
          return "#f05b24";
        default:
          return "#b691ff";
      }
    },
  },
  template: `
    <div class="blockWord">
      <p v-show="!settingsOnlyMode" v-bind:style="wordStyle">{{ word.id }}. {{ word.word }}</p>
      <p v-show="settingsOnlyMode" v-bind:style="wordStyle">{{ word.word }}</p>
    </div>
  `,
});
