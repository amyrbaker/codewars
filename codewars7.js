function unusedDigits(...arg) {
    let arr = []
    for (let i = 0; i <= 9; i++) {
      if (!arg.join('').includes(i)) {
        arr.push(i)
      }
    }
    return arr.join('')
}

function vowelIndices(word){
    let arr = []
    for (let i = 0; i < word.length; i++) {
      if ('aeiouy'.includes(word[i].toLowerCase())) {
        arr.push(i + 1)
      }
    }
    return arr
}

function arrAdder(arr) {
    let str = ''
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr.length; j++) {
        str += arr[j][i]
      }
      str += ' '
    }
    return str.trim()
}

function mxdiflg(a1, a2) {
    let a1Length = a1.map(w => w.length).sort((a, b) => a - b)
    let a1MM = [a1Length[0], a1Length[a1Length.length - 1]]
    let a2Length = a2.map(w => w.length)
    let a2MM = [Math.min(...a2Length), Math.max(...a2Length)]
    console.log(a1MM, a2MM)
    return (a1.length === 0 || a2.length === 0) ? -1 : Math.max(Math.abs(a1MM[0] - a2MM[0]), Math.abs(a1MM[0] - a2MM[1]), Math.abs(a1MM[1] - a2MM[0]), Math.abs(a1MM[1] - a2MM[1]))
}

const xMarksTheSpot = (input) => {
    let arr = []
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[0].length; j++) {
        if (input[i][j] === 'x') {
          arr.push(i)
          arr.push(j)
        }
      }
    }
    return arr.length != 2 ? [] : arr
}

function solve(n) {
    let count = 0
    let bills = [500, 200, 100, 50, 20, 10]
    let amount = n
    for (let i = 0; i < bills.length; i++) {
      if (amount >= bills[i]) {
        amount -= bills[i]
        count ++
        i--
      }
    }
    return (count === 0 || amount !== 0) ? -1 : count
}

function sumin(n) {
  let sum = n
  let current = n
  for (let i = n - 1; i > 0; i--) {
    current += i
    sum += current
  }
  return sum
}
function sumax(n) {
let sum = n**2
let current = sum
for (let i = n - 1; i > 0; i--) {
  current -= i
  sum += current
}
return sum 
}
function sumsum(n) {
return sumin(n) + sumax(n)
}

function solve(s){
  let upper = 0, lower = 0, nums = 0, chars = 0
  s.split('').forEach(char => {
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char) ? upper++ :
    'abcdefghijklmnopqrstuvwxyz'.includes(char) ? lower++ :
    '0123456789'.includes(char) ? nums++ : chars++
    })
  return [upper, lower, nums, chars]
}

function barista(coffees){
  return (coffees
    .sort((a, b) => a - b)
    .map((e, i) => e * (coffees.length - i))
    .reduce((a, c) => a + c, 0)) 
    + (((coffees.length - 1) * coffees.length) / 2) * 2
}

function momentOfTimeInSpace(moment) {
  let arr = moment.split('').filter(e => '123456789'.includes(e))
  let time = arr.reduce((a, c) => a + +c, 0)
  let space = moment.length - arr.length
  return [time < space, time == space, time > space]
}

function openOrSenior(data){
  return data.map(e => (e[0] >= 55 && e[1] > 7) ? 'Senior' : 'Open')
}

var findDigit = function(num, nth){
  return nth <= 0 ? -1 :
    nth > Math.abs(num).toString().length ? 0 :
    +Math.abs(num).toString()[Math.abs(num).toString().length - nth]
}

function accum(s) {
	return s.split('').map((e, ind) => {
    let str = e.toUpperCase()
    for (let i = 1; i < ind + 1; i++) {
      str += e.toLowerCase()
    }
    return str
  }).join('-')
}

String.prototype.toJadenCase = function () {
  return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
};

function findShort(s){
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}

function XO(str) {
  return str.toLowerCase().split('o').length === str.toLowerCase().split('x').length
}

function isIsogram(str){
  return str.toLowerCase().split('').filter((e, i) => str.toLowerCase().indexOf(e) == i).length === str.length
}

function longest(s1, s2) {
  return (s1 + s2).split('').filter((e, i) => (s1 + s2).indexOf(e) === i).sort().join('')
}

function DNAStrand(dna){
  return dna.split('').map(e => e === 'A' ? 'T' : e === 'T' ? 'A' : e === 'C' ? 'G' : 'C').join('')
}

function nbYear(p0, percent, aug, p) {
  console.log(p0, percent, aug, p)
    let pop = p0
    let years = 0
    while (pop < p) {
      pop = Math.floor(pop + pop * (percent / 100) + aug)
      years++
    }
    return years
}

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && b + c > a
}

function findNextSquare(sq) {
  return Math.floor(Math.sqrt(sq)) ** 2 !== sq ? -1 :
    (Math.sqrt(sq) + 1) ** 2
}


function longest(words) {
  return words.sort((a,b) => b.length - a.length)[0].length
}

function giveChange(amount) {
  return [Math.floor(amount%100%50%20%10%5), Math.floor(amount%100%50%20%10/5), Math.floor(amount%100%50%20/10), Math.floor(amount%100%50/20), Math.floor(amount%100/50), Math.floor(amount/100)]
}

function solve(arr){  
  let alp = 'abcdefghijklmnopqrstuvwxyz'
  let words = arr.map(w => w.toLowerCase())
  let arr1 = []
  words.forEach(word => {
    let count = 0
    for (let i = 0; i < word.length; i++) {
      if (word[i] === alp[i]) {
        count++
      }
    }
    arr1.push(count)
  })
  return arr1
};

function chain(input, fs) {
  let func = fs[0](input)
  for (let i = 1; i < fs.length; i++) {
    func = fs[i](func)
  }
  return func
}

function root(x, n) {
  return x ** (1/n)
}

function sumFromString(str){
  let arr = str.split('')
    .map((e, i) => e = [e, i])
    .filter(e => '0123456789'.includes(e[0]))
  if (arr.length === 0) return 0
  if (arr.length === 1) return +arr[0][0]
  let str1 = arr[0][0]
  for (let i = 1; i < arr.length; i++) {
    arr[i][1] === arr[i - 1][1] + 1 ? str1 += arr[i][0] : str1 += ` ${arr[i][0]}`
  }
  return str1.split(' ').reduce((a, c) => +a + +c)
}

function dropCap(n) {
  return n.split(' ').map(w => w.length <= 2 ? w : w = w[0].toUpperCase() + w.slice(1, w.length).toLowerCase()).join(' ')
}

function stringMerge(string1, string2, letter){
  return string1.slice(0, string1.indexOf(letter) + 1) + string2.slice(string2.indexOf(letter) + 1)
}

function addBinary(a,b) {
  return (a + b).toString(2)
}

function sum(...args) {
  return args.reduce((a, c) => a + c)
}

function findSum(...args){
  return args.length === 0 ? 0 :
    args.length !== args.filter(e => e >= 0).length ? -1 :
    args.reduce((a, c) => a + c)
}

function toBinary(n){
  return (n >>> 0).toString(2)
}

function checkParity(parity, bin){
  let ones = bin.split('').filter(e => e == '1').length
  return (parity === 'even' && ones % 2 === 0) || (parity === 'odd' && ones % 2 !== 0) ? 0 : 1
}

function isAllPossibilities(x){
  return x.length === 0 ? false : x.sort((a, b) => a - b).join('') === [...Array(x.length).keys()].join('')
}

function roundToNext5(n){
  return n % 5 === 0 ? n :
    Math.ceil(n / 5) * 5
}

function rowSumOddNumbers(n) {
	let arr = []
  for (let i = n * (n - 1) + 1; i <= n * (n - 1) + 1 + (n - 1) * 2; i += 2) {
    arr.push(i)
  }
  return arr.reduce((a, c) => a + c)
}

function validatePIN (pin) {
  return (pin.length === 4 || pin.length === 6) && pin.match(/^[0-9]+$/) != null
}

function printerError(s) {
  return s.split('').filter(e => !'abcdefghijklm'.includes(e)).length +'/'+ s.length
}

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

var number = function(busStops){
  return busStops.map(e => e.reduce((a, c) => a - c)).reduce((a, c) => a + c)
}

function oddOrEven(array) {
  return array.reduce((a, c) => a + c, 0) % 2 === 0 ? 'even' : 'odd'
}

function SeriesSum(n)
{
  if (n === 0) return '0.00'
  if (n === 1) return '1.00'
  let sum = 1
  for (let i = 4; i < 3 * n; i += 3) {
    sum += (1/i)
  }
  return sum.toFixed(2)
}

function removeSmallest(numbers) {
  let index = numbers.indexOf(Math.min(...numbers))
  console.log(numbers.slice(index + 1))
  return numbers.slice(0, index).concat(numbers.slice(index + 1))
}

function stray(numbers) {
  return numbers.filter(e => numbers.indexOf(e) === numbers.lastIndexOf(e))[0]
}

function getDivisorsCnt(n){
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      count ++
    }
  }
  return count
}

function calculateYears(principal, interest, tax, desired) {
  let years = 0, amount = principal
  while (amount < desired) {
    amount += amount * interest - amount * interest * tax 
    years++
  }
  return years
  
}

function arithmetic(a, b, operator){
  return operator === 'add' ? a + b :
    operator === 'subtract' ? a - b :
    operator === 'divide' ? a / b :
    a * b
}

var number=function(array){
  return array.map((e, i) => `${i + 1}: ${e}`)
}

function factorial(n)
{
  if (n < 0 || n > 12) throw RangeError
  return n === 0 ? 1 :
    [...Array(n).keys()].map(e => e + 1).reduce((a, c) => a * c, 1)
}

var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
};

function dontGiveMeFive(start, end)
{
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr.map(e => e.toString()).filter(e => !e.includes('5')).length
}

const sequenceSum = (begin, end, step) => {
  let arr = []
  for (let i = begin; i <= end; i += step) {
    arr.push(i)
  }
  return arr.reduce((a, c) => a + c, 0)
};

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((a, c) => a + +c, 0)
}

function removeUrlAnchor(url){
  return url.includes('#') ? url.slice(0, url.indexOf('#')) : url
}

var capitals = function (word) {
	return word.split('')
    .map((e, i) => [e, i])
    .filter(e => e[0] === e[0].toUpperCase())
    .map(e => e[1])
};

function noOdds( values ){
  return values.filter(e => e%2 === 0 )
}

function findSum(n) {
  return [...Array(n + 1).keys()].filter(e => !(e%3) || !(e%5)).reduce((a, c) => a + c, 0)
}

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length)
};

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let months = {'January' : 0, 'February' : 31, 'March' : 59, 'April' : 90, 'May' : 120, 'June' : 151, 'July' : 181, 'August': 212, 'September' : 243, 'October' : 273, 'November' : 304, 'December' : 334}
  let [todayMonth, todayDay, todayYear] = currentDate.split('').filter(e => e !== ',').join('').split(' ')
  let [expiredMonth, expiredDay, expiredYear] = expirationDate.split('').filter(e => e !== ',').join('').split(' ')
  let today = +months[todayMonth] + +todayDay
  let expired = +months[expiredMonth] + +expiredDay
  return (enteredCode === correctCode) && ((todayYear < expiredYear) || ((todayYear == expiredYear) && (today <= expired)))
}

function maxMultiple(divisor, bound){
  //   return Math.max(...[...Array(bound + 1).keys()].filter(e => !(e % divisor)))
    for (let i = bound; i > 0; i--) {
      if (!(i % divisor)) return i
    }
}

function evaporator(content, evap_per_day, threshold){ 
  let days = 0
  let amount = content
  while(amount >= threshold / 100 * content) {
    days++
    amount -= amount * evap_per_day / 100
  }
  return days
}

function smallEnough(a, limit){
  return a.every(e => e <= limit)
}

function angle(n) {
  return (n - 2) * 180
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let first = firstAttacker == fighter1.name ? 'fighter1' : 'fighter2'
  let f1H = fighter1.health
  let f2H = fighter2.health
  let f1D = fighter1.damagePerAttack
  let f2D = fighter2.damagePerAttack
  for (let i = 0; i <= Math.max(fighter1.health, fighter2.health); i++) {
    if (first == 'fighter1') {
      if (i % 2 === 0) {
        f2H -= f1D
        if (f2H <= 0) return fighter1.name
      } else {
        f1H -= f2D
        if (f1H <= 0) return fighter2.name
      }
    } else {
      if (i % 2 === 0) {
        f1H -= f2D
        if (f1H <= 0) return fighter2.name
      } else {
        f2H -= f1D
        if (f2H <= 0) return fighter1.name
      }
    }
    console.log(i, f1H, f2H)
  }
}

function reverseLetter(str) {
  return str.split('').filter(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e)).reverse().join('')
}

function fizzbuzz(n)
{
  return [...Array(n).keys()]
    .map(e => e + 1)
    .map(e => !(e % 3) && !(e % 5) ? 'FizzBuzz' 
         : !(e % 3) ? 'Fizz' 
         : !(e % 5) ? 'Buzz' 
         : e)
}

function gimme (triplet) {
  return triplet.map((e, i) => [e, i]).sort((a, b) => a[0] - b[0])[1][1]
}

function checkExam(array1, array2) {
  let score = 0;
   for (let i=0;i<array1.length;i++){
     if (array1[i] === array2[i]){
       score += 4;
     } else if (array2[i] === ''){
       score;
     } else {
       score -= 1;
     }
   }
   return score < 0 ? 0 : score;
 }

 function getEvenNumbers(numbersArray){
  return numbersArray.filter(e => !(e % 2))
}

function solve(s){
  let lower = s.split('').filter(e => e === e.toLowerCase()).length
  let upper = s.length - lower
  return upper > lower ? s.toUpperCase() : s.toLowerCase()
}

function capitalize(s){
  return [s.split('').map((e, i) => !(i % 2) ? e.toUpperCase() : e).join(''), s.split('').map((e, i) => (i % 2) ? e.toUpperCase() : e).join('')]
};

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) return `${count}<0`
    let arr = [...Array(count + 1).keys()]
    return arr.length === 1 ? '0=0' : arr.join('+') + ' = ' + arr.reduce((a, c) => a + c, 0)
  };

  return SequenceSum;

})();

function repeater(string, n){
  let str = ''
  for (let i = 1; i <= n; i++) {
    str += string
  }
  return str
}

function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}

function minValue(values){
  return +[...new Set(values)].sort((a, b) => a - b).join('')
}

function flattenAndSort(array) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr = arr.concat(array[i])
  }
  return arr.sort((a, b) => a - b)
}

function isPowerOfTwo(n){
  let i = 0
  while (2 ** i <= n) {
    if (2 ** i === n) return true
    i++
  }
  return false
}

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor(Math.sqrt(age1**2+age2**2+age3**2+age4**2+age5**2+age6**2+age7**2+age8**2) / 2)
}

function sumOfMinimums(arr) {
  return arr.map(array => array.sort((a, b) => a - b)[0]).reduce((a, c) => a + c, 0)
}

function sortGiftCode(code){
  return code.split('').sort().join('')
}

var greet = function(name) {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
};

function mygcd(x,y){
  
  for (let i = (!(x % y) || !(y % x)) ? Math.min(x, y) : Math.ceil(Math.min(x, y) / 2); i > 0; i--) {
    if (!(x % i) && !(y % i)) return i
  }
}

function factorial(n){
  return [...Array(n).keys()].reduce((a, c) => a * (c + 1), 1)
}

function isSortedAndHow(array) {
  let asc = [...array].sort((a, b) => a - b)
  return array.toString() === asc.toString() ? 'yes, ascending' 
    : array.toString() === asc.reverse().toString() ? 'yes, descending' 
    : 'no'
}









