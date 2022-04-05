function getAge(inputString){
    return +inputString[0]
}

function multiply(a, b) {
    return a * b
}

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
}

function firstNonConsecutive (arr) {
    for(let i=1; i<arr.length; i++) {
      if (arr[i] !== arr[i-1]+1) return arr[i]
    }
    return null
}

const flip=(d, a)=>{
  
    return (d=='R') ? a.sort((a,b) => a-b):a.sort((a,b) => b-a);
}

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
      this.info = `${this.name}s age is ${this.age}`
    }
    info() {
      return this.info
    }
}

function datingRange(age){
    if (age <= 14) {
      let min = age - .1 * age
      let max = age + .1 * age
      return `${Math.floor(min)}-${Math.floor(max)}`
    } else {
      let min = age / 2 + 7
      let max = 2 * age - 14
      return `${Math.floor(min)}-${Math.floor(max)}`
    }
}

function addLength(str) {
    return str.split(' ').map(w => `${w} ${w.length}`)
}

function charFreq(message) {
    let obj = {}
    for (let i = 0; i < message.length; i++) {
      !obj[message[i]] ? obj[message[i]] = 1 : obj[message[i]]++
    }
    return obj
}

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function(){
      return draft-1.5*crew > 20;
    }
}

function grader(score) {
    return score > 1 || score < .6 ? 'F'
      : score >= .9 ? 'A'
      : score >= .8 ? 'B'
      : score >= .7 ? 'C'
      : 'D'
}

function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

var repeatIt = function(str, n) {
    let repeat = ''
    for (let i = 1; i <= n; i++) {
      repeat += str
    }
    return typeof str != 'string' ? 'Not a string' : repeat
}

function multiply(number){
    return number * 5 ** Math.abs(number).toString().length
}

function evil(n) {
    return n.toString(2).split('').filter(n => n == 1).length % 2 === 0 ? 'It\'s Evil!' : 'It\'s Odious!'
}

function duckDuckGoose(players, goose) {
    return players[(goose - 1) % players.length].name
}

function squareOrSquareRoot(array) {
    return array.map(e => Math.floor(Math.sqrt(e)) ** 2 == e ? Math.sqrt(e) : e ** 2) 
}

function sumArray(array) {
    return !array || array.length <= 1 ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((a, c) => a + c, 0)
}

function excludingVatPrice(price){
    console.log(price)
      return price == null ? -1 : +(price / 1.15).toFixed(2);
}

function joinStrings(string1, string2){
    return `${string1} ${string2}`
}

function myFirstKata(a, b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") {
      return false;
    } else {
      return a % b + b % a;
    }
}

function getNumberFromString(s) {
    return +s.split("").filter(e=>"0123456789".includes(e)).join("");
}

function validateCode (code) {
    return '123'.includes(code.toString()[0])
}

