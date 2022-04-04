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

