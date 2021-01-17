const navDatas = [
  {
    name: "Random Int",
    isSelected: false,
    href: "index.html",
  },
  {
    name: "Chronomètre",
    isSelected: false,
    href: "timer.html",
  },
  {
    name: "Minuteurs",
    isSelected: false,
    href: "minuteur.html",
  },
  {
    name: "Random word",
    isSelected: false,
    href: "randomWord.html",
  },
];

Vue.component("navi", {
  data() {
    return {
      pages: navDatas,
      current: "",
    };
  },
  methods: {
    redirect(href) {
      window.location.replace(href);
    },
  },
  template: `
    <nav>
      <ul>
        <li
          v-for="page in pages"
          v-bind:key="page.name"
          v-on:click="redirect(page.href)"
        >
          <a href="#">
            {{page.name}}
          </a>
        </li>
      </ul>
    </nav>
  `,
});
