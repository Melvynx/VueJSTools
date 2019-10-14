function getRandomInt(max, min) {
  max = Number(max) + 1;
  min = Number(min);
  newMax = max-min;
  random = Math.floor(Math.random() * Math.floor(newMax));
  result = random + min;
  return result;
}
function randomizText(string) {
  let arrayRandomized = string.split("");
   let arrayFinish = [];
   for (let i = 0; i <= arrayRandomized.length; i++) {
    let rand = arrayRandomized[Math.floor(Math.random() * arrayRandomized.length)];
    arrayFinish.push(rand);
   }
  return arrayFinish.join("");
}
const filtreWord = function (array, text) {
  if (!text) {
    return array;
  }
  return array.filter((ar) => ar.titre.toLowerCase().indexOf(text.toLowerCase()) !== -1);
};
function twoNumberMaxSplit(string) {
  let arrayString = string.split("");
  let arrayFinish = [];
  arrayFinish.push(arrayString[1]);
  arrayFinish.push(arrayString[2]);
  let stringFinish = arrayFinish.join("");
  return stringFinish;
}
function tryNewWord(word) {
  wordL = word.length;
  if (wordL <= 1) {
    return false;
  }
  if (wordL >= 50) {
    return false;
  }
  return true;
}
class toursTimer {
  constructor(minutes, secondes, ms, tab) {
    this.id = findTheBiggestID(tab);
    this.minutes = minutes;
    this.secondes = secondes;
    this.ms = ms;
  }
  time() {
    return this.minutes+":"+this.secondes+":"+this.ms;
  }
};
const findTheBiggestID = function (array) {
  const maxExistingId = Math.max(...array.map((item) => item.id));
  return Math.max(maxExistingId, 0) + 1;
};


const blockPage = new Vue({
  el: "#blockPage",
  data: {
    words: [{id: 0, word: "banane"}],
  },
  methods: {
  }
})