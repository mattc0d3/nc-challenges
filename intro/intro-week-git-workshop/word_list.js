const wordList = [
  "another",
  "word",
  "in",
  "my",
  "amazing",
  "array",
  "because",
  "it",
  "is",
  "excellent",
  "original",
  "introduce",
  "nail",
  "friendship",
  "myth",
  "lily",
  "campaign",
  "pride",
  "diplomat",
  "deficit",
  "contain",
  "experience",
  "lease",
  "key",
  "fine",
  "umbrella",
  "fame",
  "record",
  "blast",
  "revenge",
  "crevice",
  "flourish",
  "fish",
  "remember",
  "lesson",
  "promotion",
  "defeat",
  "to",
  "flowers",
  "knit",
  "magnitude",
  "why",
  "engine",
  "realism",
  "close",
  "effect",
  "fly",
  "tire",
  "slab",
  "coup",
  "zero",
  "hostility",
  "pier",
  "rhythm",
];

// Tasks
// 1.
const firstThreeWords = wordList.slice(0, 3)
console.log("firstThreeWords: ", firstThreeWords)

// 2.
const lastThreeWords = wordList.slice(wordList.length - 3, wordList.length)
console.log("lastThreeWords: ", lastThreeWords)

// 3 .
const wordCount = wordList.length
console.log("wordCount: ", wordCount)

// 4.
const twoLetterWords = wordList.filter(word => /^.{2}$/.test(word))
console.log("twoLetterWords: ", twoLetterWords)

// 5.
let longestWord = ""
let longestLength = 0
wordList.forEach(word => {
  if (word.length > longestLength) {
    longestLength = word.length
    longestWord = word
  }
})
console.log("longestWord: ", longestWord)

// 6.
const containsC = wordList.filter(word => /c+/g.test(word))
console.log("containsC: ", containsC)

// 7. 
const reversedWords = wordList.reverse()
console.log("reversedWords: ", reversedWords)

// Regex Tasks
// 1.
const noVowels = wordList.filter(word => /^[^aeiou]+$/i.test(word))
console.log("noVowels: ", noVowels)

// 2.
const repeatedLetters = wordList.filter(word => /(.)+\1/.test(word))
console.log("repeatedLetters: ", repeatedLetters)

module.exports = wordList;
