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

function fuelPrice(litres, pricePerLitre) {
    return litres >= 10 ? +(litres * (pricePerLitre - .25)).toFixed(2)
      : litres >= 8 ? +(litres * (pricePerLitre - .2)).toFixed(2)
      : litres >= 6 ? +(litres * (pricePerLitre - .15)).toFixed(2)
      : litres >= 4 ? +(litres * (pricePerLitre - .1)).toFixed(2)
      : litres >= 2 ? +(litres * (pricePerLitre - .05)).toFixed(2)
      : +(litres * pricePerLitre).toFixed(2)
}

function yearDays(year)
{
  return year % 4 === 0 && (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) ? `${year} has 366 days` : `${year} has 365 days`
}

function leo(oscar){
    switch (oscar) {
        case 88:
          return 'Leo finally won the oscar! Leo is happy'
          break
        case 86:
          return 'Not even for Wolf of wallstreet?!'
          break
        default:
          return oscar < 88 ? 'When will you give Leo an Oscar?' : 'Leo got one already!'
    }
}

function shortenToDate(longDate) {
    return longDate.split(",")[0];
}

function aliasGen(first, last){
    return first[0].toLowerCase().match(/[a-z]/i) && last[0].toLowerCase().match(/[a-z]/i) ? 
      `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
      : 'Your name must start with a letter from A - Z.'
}

function slope(points)
{
  return points[0] === points[2] ? 'undefined' : ((points[3] - points[1]) / (points[2] - points[0])).toString()
}

function barTriang(p1, p2, p3){
    return [+((p1[0]+p2[0]+p3[0])/3).toFixed(4),
            +((p1[1]+p2[1]+p3[1])/3).toFixed(4)];
}

function Cube(n = 0) {
    let side = n
    this.getSide = function() {return side}
    this.setSide = function(n) {
      if (isNaN(n) === true) side = 0
      else side = Math.abs(n);
      return side
    };
    
};

function arr2bin(arr){
    return arr.map(e => typeof e !== 'number' ? e = 0 : e).reduce((a, c) => a + c, 0).toString(2)
}

function changeMe(moneyIn){
    let str
    if (moneyIn === '20p') {
      str = '10p 10p'
    } else if (moneyIn === '50p') {
      str = '20p 20p 10p'
    } else if (moneyIn === '£1') {
      str = '20p 20p 20p 20p 20p'
    } else if (moneyIn === '£2') {
      str = '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
    } else if (moneyIn === '£5') {
      str = '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
    } else {
      str = moneyIn
    }
    return str
}

function cutCube(volume,n){
    return (Math.floor(Math.cbrt(volume)) ** 3 === volume) && (Math.floor(Math.cbrt(volume / n)) ** 3 === volume / n)
    
}

function blackAndWhite(arr){
    return !Array.isArray(arr) ? 'It\'s a fake array' :
      arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1 ? 'It\'s a black array' :
      'It\'s a white array'
}

function bigToSmall(arr) {
    return [].concat(...arr).sort((a, b) => b - a).join('>');
}

function fiveLine(a){
    let s = a.trim()
    return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`
}

function firstToLast(str,c){
    return str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.search(c);
    
}

function rainAmount (mm) {
    if (mm < 40) {
      return `You need to give your plant ${40 - mm}mm of water`;
    } else {
      return "Your plant has had more than enough water for today!";
    }
}

function cutIt(arr){
    let length = arr[0].length
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < length) {
        length = arr[i].length
      }
    }
    return arr.map(e => e.substr(0, length))
    
}

function sameCase(a, b){
    return !'abcdefghijklmnopqrstuvwxyz'.includes(a.toLowerCase()) || !'abcdefghijklmnopqrstuvwxyz'.includes(b.toLowerCase()) ? -1 :
      ('abcdefghijklmnopqrstuvwxyz'.includes(a) && 'abcdefghijklmnopqrstuvwxyz'.includes(b)) || ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(a) && 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(b)) ? 1 :
    0
}

function magNumber(info){
    let nums = {
      'PT92' : 17,
      'M4A1' : 30, 
      'M16A2' : 30, 
      'PSG1' : 5
    }
    return Math.ceil(info[1] * 3 / nums[info[0]])
}

function bloodAlcoholContent(drinks, weight, sex, time){
    let ratio = {'male':.73, 'female':.66}
    return +(((drinks['ounces'] * drinks['abv']) * 5.14 / weight * ratio[sex]) - .015 * time).toFixed(4)
}

function countWords(str) {
    return str.trim().split(/\s+/).filter(e => e).length
}

function sumSquares(array) {
    return array.map(e => e ** 2).reduce((a, c) => a + c)
}

Math.roundTo = function (number, precision) {
    return +number.toFixed(precision)
}

function howManySmaller(arr,n){
    return arr.map(e => +e.toFixed(2)).filter(e => e < n).length
    
}

function whatNumberIsIt(n){
    return n === Number.MAX_VALUE ? 'Input number is Number.MAX_VALUE' :
      n === Number.MIN_VALUE ? 'Input number is Number.MIN_VALUE' :
      isNaN(n) ? 'Input number is Number.NaN' :
      n === Number.POSITIVE_INFINITY ? 'Input number is Number.POSITIVE_INFINITY' :
      n === Number.NEGATIVE_INFINITY ? 'Input number is Number.NEGATIVE_INFINITY' :
      `Input number is ${n}`
    
}

function giveMeFive(obj){
  let five = [];
  
  for (let key in obj) {
    if (key.length === 5) five.push(key);
    if (obj[key].length === 5) five.push(obj[key]);
  }
  
  return five;
}

function greaterThanLessThan (a,b,c) {
  return (a < b ? 1 : 0) < c
}



