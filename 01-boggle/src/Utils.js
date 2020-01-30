const { dictionary } = require("./trie.js");

function getWordScore(word) {
  if (dictionary.isWord(word)) {
    console.log("SCORE OF WORD IS: ", scoreOf(word));
    return scoreOf(word);
  }
  return 0;
}

function scoreOf(word) {
  let { length } = word;
  if (length < 3) return 0;
  switch (length) {
    case 3:
      return 1;
    case 4:
    case 5:
    case 6:
      return length - 3;
    case 7:
      return 5;
    default:
      return 11;
  }
}

let die = [
  ["rifobx", "ifehey", "denows", "utoknd"],
  ["hmsrao", "lupets", "acitoa", "ylgkue"],
  ["qbmjoa", "ehispn", "vetign", "baliyt"],
  ["ezavnd", "ralesc", "uwilrg", "pacemd"]
];

function getNewBoard(n) {
  if (!n) n = 4;
  let board = [];
  for (let row = 0; row < n; row++) {
    let rowArr = [];
    for (let char = 0; char < n; char++) {
      let randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
      rowArr.push(randomChar);
    }
    board.push(rowArr);
  }
  board;
  return board;
}

module.exports = {
  getWordScore,
  getNewBoard
};
