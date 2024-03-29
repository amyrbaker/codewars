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

function sumTriangularNumbers(n) {
  if (n < 0) return 0
  let arr = [1]
  for (let i = 1; i < n; i++) {
    arr.push(arr[i - 1] + i + 1)
  }
  return arr.reduce((a, c) => a + c, 0)
}

function f(n){
  return typeof n === 'number' && n > 0 && !(n % 1) ? (n * (n + 1)) / 2 : false
};

function gps(s, x) {
  let diffs = []
  for (let i = 0; i < x.length - 1; i++) {
    diffs.push(x[i + 1] - x[i])
  }
  return diffs.length === 0 ? 0 : Math.floor(Math.max(...diffs.map(e => e * 3600 / s)))
}

function digits(n) {
  return (n + '').length
}

function bump(x){
  return x.split('').filter(e => e === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead'
}

function findLongest(array){
  let map = array.map(e => (e + '').length)
  let max = Math.max(...map)
  let index = map.indexOf(max)
  return array[index]
}

function solution(pairs){
  let arr = []
  for (let key in pairs) {
    arr.push(`${key} = ${pairs[key]}`)
  }
  return arr.join(',')
}

function adjacentElementsProduct(array) {
  return array.reduce((a, c, i, arr) => arr[i] * arr[i + 1] > a ? arr[i] * arr[i + 1] : a, array[0] * array[1])
}

function alphabetWar(fight)
{
   let letters = {'w' : 4, 'p' : 3, 'b' : 2, 's' : 1, 'm' : 4, 'q' : 3, 'd' : 2, 'z' : 1}
   let left = []
   let right = []
   for (let i = 0; i < fight.length; i++) {
     if ('wpbs'.includes(fight[i])) left.push(fight[i])
     if ('mqdz'.includes(fight[i])) right.push(fight[i])
   }
  let leftScore = left.map(e => letters[e]).reduce((a, c) => a + c, 0)
  let rightScore = right.map(e => letters[e]).reduce((a, c) => a + c, 0)
  return leftScore > rightScore ? 'Left side wins!' : leftScore < rightScore ? 'Right side wins!' : 'Let\'s fight again!'
}

// TODO: implement the four functions specified.
function head(arr) {
  return arr[0]
}
function tail(arr) {
  return arr.slice(1)
}
function init(arr) {
  return arr.slice(0, -1)
}
function last(arr) {
  return arr[arr.length - 1]
}

function overTheRoad(address, n){
  return n*2+1-address
}

function multiplyAll(arr) {
  let another = function(num) {
    return arr.map(e => e * num)
  }
  return another
}

function sumCubes(n){
  return [...Array(n).keys()].map(e => e + 1).reduce((a, c) => a + c ** 3, 0)
}

function seven(m) {
  let count = 0
  let num = m.toString()
  while (num.length > 2) {
    num = (Number(num.slice(0, -1)) - Number(num.slice(-1)) * 2).toString()
    count++
  }
  return [Number(num), count]
}

function wordsToMarks(string){
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  return string.split('').reduce((a, c) => a + alph.indexOf(c) + 1, 0)
}

function largestPairSum (numbers) {
  return numbers.sort((a, b) => b - a)[0] + numbers.sort((a, b) => b - a)[1]
}

function countRedBeads(n) {
  return n < 2 ? 0 : 2 * (n - 1)
}

var flatten = function (array){
  return array.reduce((a, c) => a.concat(c), [])
}

function explode(s) {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    str += s[i].repeat(Number(s[i]))
  }
  return str
}

function vertMirror(strng) {
  return strng.split('\n').map(e => e.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
  return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
  return fct(s)
}

function reverseNumber(n) {
  return n.toString()[0] === '-' ?
    +(n * -1).toString().split('').reverse().join('') * -1 :
    +n.toString().split('').reverse().join('')
}

function averages(numbers) {
  console.log(numbers)
  let avg = []
  if (numbers === null || numbers.length <= 1) return []
  for (let i = 0; i < numbers.length - 1; i++) {
    avg.push((numbers[i] + numbers[i + 1]) / 2)
  }
  return avg
}

function isRubyComing(list) {
  return list.map(e => e.language).includes('Ruby')
}

function greetDevelopers(list) {
  list.forEach(person => {
    person['greeting'] = `Hi ${person.firstName}, what do you like the most about ${person.language}?`
  })
  return list
}

function generateShape(integer){
  return [...new Array(integer).fill('+'.repeat(integer))].join('\n')
}

function automorphic(n){
  return +(n**2).toString().slice(-n.toString().length) === n ? 'Automorphic' : 'Not!!'
}

function solve(arr) {
  return [...new Set(arr.reverse())].reverse()
}

function count(array){
  return array.reduce((a, c) => {
    a[c] ? a[c]++ : a[c] = 1
    return a
  }, {}) 
}

function foldTo(distance) {
  let count = 0
  let thickness = .0001
  while (thickness < distance) {
    thickness *= 2
    count++
  }
  return distance < 0 ? null : count
}

function toNumberArray(stringarray){
  return stringarray.map(e => +e)
}

function balancedNum(number){
  let str = number.toString()
  let left = str.slice(0, Math.ceil(str.length / 2 - 1))
  let leftSum = left.split('').reduce((a, c) => a + +c, 0)
  let right = str.length <= 2 ? '' : str.slice(-Math.floor((str.length - 1) / 2))
  let rightSum = right.split('').reduce((a, c) => a + +c, 0)
  return leftSum === rightSum ? 'Balanced' : 'Not Balanced'
}

function menFromBoys(arr){
  console.log(arr)
  arr = [...new Set(arr)]
  let evens = arr.filter(e => !(e % 2))
  let odds = arr.filter(e => e % 2)
  return evens.sort((a, b) => a - b).concat(odds.sort((a, b) => b - a))
}

function maxDiff(list) {
  return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0
};

function getFirstPython(list) {
  let index = list.map(e => e.language).indexOf('Python')
  if (index === -1) return 'There will be no Python developers'
  return `${list[index].firstName}, ${list[index].country}`
}

function switcheroo(x){
  return x.split('').map(e => e === 'a' ? 'b' : e === 'b' ? 'a' : e).join('')
}

var orderedCount = function (text) {
  let arr = []
  for (let i = 0; i < text.length; i++) {
    if (!arr.map(e => e[0]).includes(text[i])) arr.push([text[i], 1])
    else {
      let index = arr.map(e => e[0]).indexOf(text[i])
      arr[index][1]++
    }
  }
  return arr
}

function strong(n) {
  return n.toString().split('').reduce((a, c) => a + factorial(+c), 0) === n ? 'STRONG!!!!' : 'Not Strong !!'
}
                                       
function factorial(n) {
  let total = 1
  for (let i = n; i > 1; i--) {
    total *= i
  }
  return total
} 

function divCon(x){
  let nums = x.filter(e => typeof e === 'number').reduce((a, c) => a + c, 0)
  let strs = x.filter(e => typeof e === 'string').reduce((a, c) => a + +c, 0)
  return nums - strs
}

function alternateCase(s) {
  return s.split('').map(e => e.toLowerCase() === e ? e.toUpperCase() : e.toLowerCase()).join('')
}

reverse = function(array) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr.unshift(array[i])
  }
  return arr
}

function sevenAte9(str) {
  let removed = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '9' && str[i - 1] === '7' && str[i + 1] === '7') continue
    else removed += str[i]                                   
  }
  return removed
}

function movie(card, ticket, perc) {
  let times = 1
  let discount = ticket * perc
  let B = card + discount
  while (ticket * times <= Math.ceil(B)) {
    times++
    discount *= perc
    B += discount
  }
  return times
};

function calc(x){
  let total1 = x.split('').map(e => +e.charCodeAt(0)).join('')
  let one = total1.split('').reduce((a, c) => a + +c, 0)
  let total2 = total1.split('').map(e => e === '7' ? '1' : e).reduce((a, c) => a + +c, 0)
  return one - total2
}

function pairs(ar){
  let count = 0
  for (let i = 0; i < ar.length - 1; i+= 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) count++
  }
  return count
};

function differenceOfSquares(n){
  let arr = [...new Array(n).keys()].map(e => e + 1)
  let one = (arr.reduce((a, c) => a + c, 0)) ** 2
  let two = arr.map(e => e ** 2).reduce((a, c) => a + c, 0)
  return one - two
}

function maxTriSum(numbers){
  return [...new Set(numbers)].sort((a, b) => b - a).slice(0, 3).reduce((a, c) => a + c, 0)
}

function squares(x, n) {
  if (n < 1) return []
  let arr = [x]
  while (arr.length < n) {
    arr.push(arr[arr.length - 1] ** 2)
  }
  return arr
}

function tidyNumber(n){
  let num = n.toString().split('')
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] > num[i + 1]) return false
  }
  return true
}

function disariumNumber(n){
  let num = n.toString().split('').map((e, i) => e ** (i + 1)).reduce((a, c) => a + c, 0)
  return n === num ? 'Disarium !!' : 'Not !!'
}

function arrayLeaders(numbers){
  let arr = []
  numbers.push(0)
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers.slice(i + 1).reduce((a, c) => a + c, 0)) arr.push(numbers[i])
  }
  return arr
}

function encode(str,  n){
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let num = n.toString().split('').map(e => +e)
  return str.split('').map((e, i) => alph.indexOf(e) + 1 + num[i % num.length])
}

function nthSmallest(arr, pos){
  return arr.sort((a, b) => a - b)[pos - 1]
}

function containAllRots(strng, arr) {
  for (let i = 0; i < strng.length; i++) {
    if (!arr.includes(strng.slice(i) + strng.slice(0, i))) return false
  }
  return true
}

function removeRotten(bagOfFruits){
  if (!bagOfFruits) return []
  return bagOfFruits.map(e => e.slice(0, 6) === 'rotten' ? e.slice(6).toLowerCase() : e)
}

function outed(meet, boss){
  let arr = Object.entries(meet).map(e => e[0] === boss ? e[1] *= 2 : e[1])
  return arr.reduce((a, c) => a + c, 0) / arr.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}

function incrementer(nums) { 
  return nums.map((e, i) => +(e + i + 1).toString().slice(-1))
}

function capitalize(s,arr){
  return s.split('').map((e, i) => arr.includes(i) ? e.toUpperCase() : e).join('')
};

function isNarcissistic(n) {
  let num = n.toString().split('').map(e => +e)
  return num.map(e => e ** num.length).reduce((a, c) => a + c, 0) === n
}

var FilterString = function(value) {
  return +value.split('').filter(e => '0123456789'.includes(e)).join('')
}

const closestMultiple10 = num => {
  return Math.round(num / 10) * 10
};

function wordValue(a) {
  console.log(a)
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  return a.map((e, i) => (e.split('')
                          .map(e => alph.indexOf(e) + 1)
                          .reduce((a, c) => a + c, 0)) * (i + 1))
}

function wordValue(a) {
  console.log(a)
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  return a.map((e, i) => (e.split('')
                          .map(e => alph.indexOf(e) + 1)
                          .reduce((a, c) => a + c, 0)) * (i + 1))
}

function maxProduct(numbers, size){
  return numbers.sort((a, b) => b - a).slice(0, size).reduce((a, c) => a*c, 1)
}

function calculate(num1, operation, num2) {
  if (!'+-*/'.includes(operation) || (operation === '/' && num2 === 0)) return null
  if (operation === '+') return num1 + num2
  if (operation === '-') return num1 - num2
  if (operation === '*') return num1 * num2
  if (operation === '/') return num1 / num2
}

function sortMyString(s) {
  return `${s.split('').filter((e, i) => !(i % 2)).join('')} ${s.split('').filter((e, i) => i % 2).join('')}`
}

function jumpingNumber(n){
  let num = n.toString()
  for (let i = 0; i < num.length - 1; i++) {
    if (Math.abs(+num[i] - +num[i + 1]) !== 1) return 'Not!!'
  }
  return 'Jumping!!'
}

function boredom(staff){
  let depts = {'accounts' : 1, 'finance' : 2, 'canteen' : 10, 'regulation' : 3, 'trading' : 6, 'change' : 6, 'IS' : 8, 'retail' : 5, 'cleaning' : 4, 'pissing about' : 25}
  let score = 0
  for (let person in staff) {
    score += depts[staff[person]]
  }
  return score <= 80 ? 'kill me now' : score >= 100 ? 'party time!!' : 'i can handle this'
}

function alternate(n, firstValue, secondValue){
  return [...new Array(n).fill(firstValue)].map((e, i) => i % 2 ? secondValue : e)
}

const prevMultOfThree = n => {
  let str = n.toString()
  while (str.length > 0) {
    if (+str % 3 === 0) return +str
    else str = str.slice(0, str.length - 1)
  }
  return null
}

function separateTypes(input) {
  return input.reduce((a, c) => {
    a[typeof c] ? a[typeof c].push(c) : a[typeof c] = [c]
    return a
  }, {})
}

function getTheVowels(word) {
  let vowels = 'aeiou'
  let count = 0
  let arr = word.split('').filter(e => vowels.includes(e))
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === vowels[count % 5]) count++
  }
  return count
}

function robberEncode(sentence) {
  return sentence.split('')
          .map(e => !'bcdfghjklmnpqrstvwxyz'.includes(e.toLowerCase()) ? e : e + (e === e.toLowerCase() ? 'o' : 'O') + e)
          .join('')
}

function oddOrEven(n) {
  return n % 2 ? 'Either' : n % 4 ? 'Odd' : 'Even'
}

function grid(N) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  while (alph.length < N + N) alph += alph
  let grid = []
  if (N < 0) return null
  for (let i = 0; i < N; i++) {
    grid.push(alph.slice(i, i + N).split('').join(' '))
  }
  return grid.join('\n')
}

function lastSurvivor(letters, coords) {
  for (let i = 0; i < coords.length; i++) {
    letters = letters.slice(0, coords[i]) + letters.slice(coords[i] + 1)
  }
  return letters
}

function i(word) {
  if (!word.length 
      || word.split('').filter(e => 'aeiou'.includes(e.toLowerCase())).length >= word.length / 2
      || word[0] === word[0].toLowerCase() 
      || word[0].toLowerCase() === 'i') return 'Invalid word'
  return `i${word}`
}

function last(x){
  let arr = x.split(' ')
  if (arr.every(e => e === '')) return arr
  else return arr.sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]))
}

function min(arr, toReturn) {
  if (toReturn === 'value') return Math.min(...arr)
  else return arr.indexOf(Math.min(...arr))
}

function vaporcode(string) {
  return string.split('').filter(e => e !== ' ').map(e => e.toUpperCase()).join('  ');
}

function solve(s){
  let arr = []
  let v = ''
  for (let i = 0; i < s.length; i++) {
    if ('aeiou'.includes(s[i])) v += s[i]
    else if (v.length) {
      arr.push(v.length)
      v = ''
    }
  }
  if (v.length) arr.push(v.length)
  return Math.max(...arr)
}

function sumOfN(n) {
  let arr = [0]
  let add = n > 0 ? 1 : -1
  while (arr.length < Math.abs(n) + 1) {
    arr.push(arr[arr.length - 1] + add)
    if (n > 0) add++
    else if (n < 0) add--
  }
  return arr
};

function switcher(x){
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('') + '!? '
  return x.map(e => alph[+e - 1]).join('')
}

function meeting(x){
  return x.indexOf('O') === -1 ? 'None available!' : x.indexOf('O')
}

function countChar(string, char) {
  return string.split('').filter(e => e.toLowerCase() === char.toLowerCase()).length
}

function specialNumber(n){
  return n.toString().split('').every(e => +e < 6) ? 'Special!!' : 'NOT!!'
}

function catMouse(x){
  let cat = x.indexOf('C')
  let mouse = x.indexOf('m')
  return Math.abs(cat - mouse) - 1 <= 3 ? 'Caught!' : 'Escaped!'
}

function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / ((100 - salePercentage) / 100)).toFixed(2)
}

const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

function isSameLanguage(list) {
  return [...new Set(list.map(e => e.language))].length === 1
}

function toLeetSpeak(str) {
  let leet = {
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2',
  ' ' : ' '
}
  return str.split('').map(e => leet[e]).join('')
}

function crap(x, bags, cap){
  x = x.join(',')
  if (x.includes('D')) return 'Dog!!'
  let crap = x.split(',').filter(e => e === '@').length
  if (crap <= bags * cap) return 'Clean'
  return 'Cr@p'
}

var removeVowels = function(str){
  return str.split('').filter(e => !'aeiou'.includes(e)).join('')
}

function getSumOfDigits(integer) {
  var sum = 0;
  var digits =  Math.floor(integer).toString();
  for(var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}

function toTime(seconds) {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor(seconds % 3600 / 60)
  return `${hours} hour(s) and ${minutes} minute(s)`
}

function vowel2index(str) {
  return str.split('').map((e, i) => 'aeiou'.includes(e.toLowerCase()) ? i + 1 : e).join('')
}

function evensAndOdds(num){
  if (num % 2) return num.toString(16)
  return num.toString(2)
}

function validSpacing(s) {
  return (s && s.split(' ').includes('')) ? false : true
}

function getAverageAge(list) {
  return Math.round(list.reduce((a, c) => a + c.age, 0) / list.length)
}

function productArray(numbers){
  let arr = []
  for (let i = 0; i < numbers.length; i++) {
    arr.push(numbers.filter((e, ind) => ind !==i).reduce((a, c) => a * c, 1))
  }
  return arr
}

var splitInParts = function(s, partLength){
  let arr = []
  for (let i = 0; i < s.length; i += partLength) {
    arr.push(s.slice(i, i + partLength))
  }
  return arr.join(' ')
}

function solution(value){
  return `Value is ${value.toString().padStart(5, '0')}`
}

function generateIntegers(m, n) {
  return [...new Array(n - m + 1).keys()].map(e => e += m)
}

function solve(a,b){
  return (a + b).split('').filter(e => !(a.includes(e) && b.includes(e))).join('')
};

function lostSheep(friday,saturday,total){
  return total - friday.concat(saturday).reduce((a, c) => a + c, 0)
}

function minimumSteps(numbers, value){
  numbers = numbers.sort((a, b) => a - b)
  let steps = 0
  let sum = numbers.shift()
  while (sum < value) {
    steps++
    sum += numbers.shift()
  }
  return steps
}

function sumOfIntegersInString(s){
  let sum = 0
  let num = ''
  for (let i = 0; i < s.length; i++) {
    if ('0123456789'.includes(s[i])) num += s[i]
    else if (num.length) {
      sum += +num
      num = ''
    }
  }
  return num.length ? sum += + num : sum
}

function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1
}

function compare(s1, s2) {
  return score(s1) === score(s2)
}

function score(str) {
  if (!str) return 0
  else if (!str.split('').every(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e.toLowerCase()))) return 0
  else return str.toUpperCase().split('').map(e => e.charCodeAt(0)).reduce((a, c) => a + c, 0)
}

function maxGap (numbers){
  numbers = numbers.sort((a, b) => a - b)
  let max = 0
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] > max) max = numbers[i] - numbers[i - 1]
  }
  return max
}

var paintLetterboxes = function(start, end) {
  let digits = [...new Array(10).fill(0)]
  for (let i = start; i <= end; i++) {
    let num = i.toString()
    for (let j = 0; j < num.length; j++) {
      digits[+num[j]]++
    }
  }
  return digits
}

Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(e => !values_list.includes(e))
}

function longestWord(stringOfWords){
  return stringOfWords
    .split(' ')
    .filter((e, i, a) => e.length === Math.max(...a.map(e => e.length)))
    .reverse()[0]
}

function stantonMeasure(arr) {
  let ones = arr.filter(e => e === 1).length
  return arr.filter(e => e === ones).length
}

function modifiedSum(a, n) {
  return a.map(e => e ** n).reduce((a, c) => a + c, 0) - a.reduce((a, c) => a + c, 0)
}

var filterLucky=x=>{
  return x.filter(e => e.toString().includes('7'))
}

class Block{
  constructor(data){
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]
  }
  getWidth() {return this.width}
  getLength() {return this.length}
  getHeight() {return this.height}
  getVolume() {return this.width * this.length * this.height}
  getSurfaceArea() {return 2 * this.width * this.height + 2 * this.length * this.height + 2 * this.width * this.length}
}

function bingo(a) {
  return a.includes(2) && a.includes(9) && a.includes(14) && a.includes(7) && a.includes(15) ? 'WIN' : 'LOSE'
}

function calculate(str) {
  let nums = []
  let num = ''
  for (let i = 0; i < str.length; i++) {
    if ('0123456789'.includes(str[i])) num += str[i]
    else if (str[i] === 'p') {
      nums.push(+num)
      num = ''
      i += 3
    } else if (str[i] === 'm') {
      nums.push(+num)
      num = '-'
      i += 4
    }
  }
  if (num) nums.push(+num)
  return nums.reduce((a, c) => a + c, 0) + ''
}

function average(scores) {
  return Math.round(scores.reduce((a, c) => a + c, 0) / scores.length)
}

function greet(name) {
  return name ? `hello ${name}!` : null
}

function divisibleByThree(str){
  return !(str.split('').reduce((a, c) => a + +c, 0) % 3)
}

function reverseBits (n) {
  return parseInt(n.toString(2).split('').reverse().join(''), 2)
}

function fireFight(s){
  return s.split(' ').map(e => e === 'Fire' ? '~~' : e).join(' ')
}

function dbSort(a){
  return a.filter(e => typeof e === 'number').sort((a, b) => a - b)
    .concat(a.filter(e => typeof e === 'string').sort())
}

function newAvg(arr, newavg) {
  let goal = newavg * (arr.length + 1)
  let need = goal - arr.reduce((a, c) => a + c, 0)
  if (need <= 0) throw 'Expected New Average is too low'
  return Math.ceil(need)
}

function checkThreeAndTwo(array) {
  let o = array.reduce((a, c) => {
    a[c] ? a[c]++ : a[c] = 1
    return a
  }, {})
  return [2, 3].every(e => Object.values(o).includes(e))
}

String.prototype.vowel = function() {
  return 'aeiou'.includes(this.toLowerCase()) && this.length === 1
};

function isNice(arr){
  return arr.every(e => arr.includes(e + 1) || arr.includes(e - 1)) && arr.length > 0
}

function save(sizes, hd) {
  let files = 0
  let sum = 0
  for (let i = 0; i < sizes.length; i++) {
    if (sum + sizes[i] > hd) return files
    else {
      sum += sizes[i]
      files++
    }
  }
  return files
}

function duplicates(array){
  let obj = array.reduce((a, c) => {
    a[c] ? a[c]++ : a[c] = 1
    return a
  }, {})
  return Object.values(obj).map(e => Math.floor(e / 2)).reduce((a, c) => a + c, 0)
}

function getStrings(city){
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  return city.toLowerCase().split('').map((e, i, a) => {
    if (i === a.indexOf(e) && alph.includes(e)) return `${e}:${'*'.repeat(a.filter(l => l === e).length)}`
  }).filter(e => e !== undefined).join(',')
}

function product (string) {
  let arr = string.split('')
  return arr.filter(e => e === '?').length * arr.filter(e => e === '!').length
}

function findMissingNumber(sequence){
  if (sequence.length < 1) return 0
  let arr = sequence.split(' ').map(e => +e)
  if (arr.includes(NaN)) return 1
  arr = arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return i + 1
  }
  return 0
}

function makeString(s){
  return s.split(' ').map(e => e[0]).join('')
}

function tripleX(str){
  let firstX = str.indexOf('x')
  return firstX !== -1 && str.slice(firstX + 1, firstX + 3) === 'xx'
}

function palindrome(num) { 
  return typeof num === 'number' && num >= 0 ?
    num.toString() === num.toString().split('').reverse().join('') :
    'Not valid'
} 

function arithmeticSequenceElements(a, d, n) {
	let arr = []
  while (arr.length < n) {
    if (arr.length === 0) arr.push(a)
    else arr.push(arr[arr.length - 1] + d)
  }
  return arr.join(', ')
}

function getMinMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
};

function initializeNames(name){
  let arr = name.split(' ')
  if (arr.length > 2) arr = arr.map((e, i) => i === 0 || i === arr.length - 1 ? e : `${e[0]}.`)
  return arr.join(' ')
}

function insertDash(num) {
  return num
    .toString()
    .split('')
    .map((e, i, a) => e % 2 && i !== a.length - 1 && a[i + 1] % 2 ? e + '-' : e)
    .join('')
}

function evenLast(numbers) {
  return numbers[numbers.length - 1] * numbers.filter((e, i) => !(i % 2)).reduce((a, c) => a + c, 0) || 0
}

const findAll = (array, n) => {
  let arr = []
  array.forEach((e, i) => {if (e === n) arr.push(i)})
  return arr
}

function scale(strng, k, n) {
  if (strng === '') return ''
  let arr = strng.split('\n')
    .map(e => e.split('').map(l => l.repeat(k)).join(''))
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= n; j++) {
      newArr.push(arr[i])
    }
  }
  return newArr.join('\n')
}

function getMissingElement(superImportantArray){
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, c) => a + c, 0) - superImportantArray.reduce((a, c) => a + c, 0)
}

function nextHappyYear(year){
  for (let i = year + 1; ; i++) {
    let arr = i.toString().split('')
    let set = new Set(arr)
    if ([...set].length === 4) return i
  }
}

String.prototype.isLetter = function() {
  return /[A-Z]/.test(this.toUpperCase()) && this.length === 1
}

Array.prototype.numberOfOccurrences = function(arg) {
  return this.filter(e => e === arg).length
}

const whosOnline = (friends) => {
  friends = friends.reduce((a, c) => {
      if (c.status === 'online' && c.lastActivity > 10) c.status = 'away'
      a[c.status] ? a[c.status].push(c.username) : a[c.status] = [c.username]
      return a
    }, {})
  return friends
}

function flyBy(lamps, drone){
  return lamps.split('').map((e, i) => i < drone.length ? 'o' : e).join('')
}

function bandNameGenerator(str) {
  return str[0] === str[str.length - 1] ? str[0].toUpperCase() + str.slice(1) + str.slice(1)
    : `The ${str[0].toUpperCase() + str.slice(1)}`
}

function isLucky(n) {
  return n.toString().split('').reduce((a, c) => a + +c, 0) === 0 || 
    n.toString().split('').reduce((a, c) => a + +c, 0) % 9 === 0
}

function twoDecimalPlaces(number) {
  return +number.toString()
    .split('.')
    .map((e, i, a) => i === a.length - 1 ? e.slice(0, 2) : e)
    .join('.')
}

function nicknameGenerator(name){
  return name.length < 4 ? 'Error: Name too short' : 
    !'aeiou'.includes(name[2]) ? name.slice(0, 3) :
    name.slice(0, 4)
}

function swap (string) {
  return string.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? e.toUpperCase() : e).join('')
}

function findScreenHeight(width, ratio) {
  let height = width * +ratio.split(':')[1] / +ratio.split(':')[0]
  return `${width}x${height}`
}

function elevatorDistance(array) {
  let floors = 0
  for (let i = 1; i < array.length; i++) {
    floors += Math.abs(array[i] - array[i - 1])
  }
  return floors
}

function findAdmin(list, lang) {
  return list.filter(e => e.language === lang && e.githubAdmin === 'yes')
}

function getAges(sum,difference){
  let one = (sum - difference) / 2
  let two = (difference + sum) / 2
  if (sum < 0 || difference < 0 || one < 0 || two < 0) return null
  return [one, two].sort((a, b) => b - a)
};

function countLettersAndDigits(input) {
  return input.split('')
    .filter(e => 'abcdefghijklmnopqrstuvwxyz1234567890'.includes(e.toLowerCase()))
    .length
}

function mostFrequentItemCount(collection) {
  return collection.length === 0 ? 0 : 
    Math.max(...Object.values(collection.reduce((a, c) => {return a[c] ? a[c]++ : a[c] = 1, a}, {})))
}

function extraPerfect(n){
  return [...new Array(n + 1).keys()].filter(e => e % 2)
}

function solve(arr){
  let a = []
  let len = arr.length
  arr = arr.sort((a, b) => b - a)
  while (a.length < len) {
    if (a.length % 2 === 0) {
      a.push(arr[0])
      arr.shift()
    } else {
      a.push(arr[arr.length - 1])
      arr.pop()
    }
  }
  return a
};

function args_count(...args) {
  return [...args].length
}

function evenOrOdd(str) {
  let evens = str.split('').filter(e => !(e % 2)).reduce((a, c) => a + +c, 0)
  let odds = str.split('').filter(e => e % 2).reduce((a, c) => a + +c, 0)
  if (evens > odds) return 'Even is greater than Odd'
  else if (odds > evens) return 'Odd is greater than Even'
  else return 'Even and Odd are the same'
}

function one(arr, fun){
  return arr.map(e => fun(e)).filter(e => e === true).length === 1
}

function lastDigit(n, d) {
  if (d > n.toString().length) return n.toString().split('').map(e => +e)
  else return n.toString().split('').slice(n.toString().length - d).map(e => +e)
}

function orderFood(list) {
  return list.reduce((a, c) => {
    a[c.meal] ? a[c.meal]++ : a[c.meal] = 1
    return a
  }, {})
}

function gordon(a){
  return a.toUpperCase().split('').map(e => {
    return e === 'A' ? '@' : 'EIOU'.includes(e) ? '*' : e
  }).join('').split(' ').map(e => `${e}!!!!`).join(' ')
}

function killer(suspectInfo, dead) {
  for (let p in suspectInfo) {
    let arr = suspectInfo[p].filter(e => dead.includes(e))
    if (arr.length === dead.length) return p
  }
}

function shorter_reverse_longer(a,b){
  if (a.length === b.length || a.length > b.length) return `${b}${a.split('').reverse().join('')}${b}`
  else return `${a}${b.split('').reverse().join('')}${a}`
}

function product(values) {
  return values && values.length ? values.reduce((a, c) => a * c, 1) : null
}

function moveTen(s){
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  return s.split('').map(e => alph[(alph.indexOf(e) + 10) % 26]).join('')
}

function uniqueSum(lst){
  return lst.length ? Object.keys(lst.reduce((a, c) => (a[c] ? a[c]++ : a[c] = 1, a), {}))
    .reduce((a, c) => a + +c, 0) : null
}

function liftoff(instructions){
  return `${instructions.sort((a, b) => b - a).join(' ')} liftoff!`
}

function createDict(keys, values){
  let obj = {}
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = i < values.length ? values[i] : null
  }
  return obj
}

function mergeArrays(a, b) {
  let arr = []
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) arr.push(a[i])
    if (b[i]) arr.push(b[i])
  }
  return arr
}

function splitTheBill(x) {
  let avg = Object.values(x).reduce((a, c) => a + c, 0) / Object.keys(x).length
  for (let p in x) {
    x[p] = Math.round((x[p] - avg) * 100) / 100
  }
  return x
}

function dotCalculator (equation) {
  let first = 0
  let second = 0
  let sign = ''
  for (let i = 0; i < equation.length; i++) {
    if (equation[i] === '.' && sign === '') first++
    else if (equation[i] === '.') second++
    else if ('+-*/'.includes(equation[i])) sign += equation[i]
  }
  let total = sign === '+' ? first + second : 
              sign === '-' ? first - second : 
              sign === '*' ? first * second : first / second
  return '.'.repeat(total)
}

function well(x){
  let arr = []
  for (let i = 0; i < x.length; i++) {
    arr = arr.concat(x[i])
  }
  let count = arr.filter((e => typeof e === 'string' && e.toLowerCase() === 'good')).length
  return count === 0 ? 'Fail!' : count > 2 ? 'I smell a series!' : 'Publish!'
}

function change(string){
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
  for (let i = 0; i < alph.length; i++) {
    if (string.toLowerCase().includes(alph[i])) alph[i] = 1
    else alph[i] = 0
  }
  return alph.join('')
}

function sumOfABeach(beach) {
  let count = 0
  let str = beach.toLowerCase()
  while (str.indexOf('sand') !== -1) {
    count++
    str = str.slice(0, str.indexOf('sand')) + str.slice(str.indexOf('sand') + 4)
  }
  while (str.indexOf('water') !== -1) {
    count++
    str = str.slice(0, str.indexOf('water')) + str.slice(str.indexOf('water') + 5)
  }
  while (str.indexOf('fish') !== -1) {
    count++
    str = str.slice(0, str.indexOf('fish')) + str.slice(str.indexOf('fish') + 4)
  }
  while (str.indexOf('sun') !== -1) {
    count++
    str = str.slice(0, str.indexOf('sun')) + str.slice(str.indexOf('sun') + 3)
  }
  return count
}

function broken(x){
  return x.split('').map(e => e === '1' ? '0' : '1').join('')
}

function solution(string,limit){
  return limit < string.length ? `${string.slice(0, limit)}...` : string
}

function filterEvenLengthWords(words) {
  return words.filter(e => e.length % 2 === 0)
}

function freqSeq(str, sep) {
  let arr = str.split('')
  return arr.map(e => arr.filter(x => x === e).length).join(sep)
}

function timeCorrect(timestring) {
  if (!timestring) return timestring
  if (!(timestring.indexOf(':') === 2 && timestring.lastIndexOf(':') === 5 && timestring.length === 8 && timestring.split('').filter(e => '0123456789'.includes(e)).length === 6)) return null
  let time = timestring.split(':')
  if (time[2] >= 60) {
    time[1] = +time[1] + Math.floor(time[2] / 60)
    time[2] = time[2] % 60
  }
  if (time[1] >= 60) {
    time[0] = +time[0] + Math.floor(time[1] / 60)
    time[1] = time[1] % 60
  }
  if (time[0] >= 24) time[0] %= 24
  return time.map(e => e.toString().padStart(2, '0')).join(':')
}

const catchSignChange = arr => {
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] < 0 && arr[i - 1] >= 0) || (arr[i] >= 0 && arr[i - 1] < 0)) count++
  }
  return count
};

function searchNames( logins ){
  return logins.filter(e => e[0][e[0].length - 1] === '_')
}

function isVeryEvenNumber(n) {
  let num = n.toString()
  while (num.length > 1) {
    num = num.split('').reduce((a, c) => a + +c, 0).toString()
  }
  return !(+num % 2)
}

function scrollingText(text){
  let arr = []
  for (let i = 0; i < text.length; i++) {
    arr.push(text.slice(i) + text.slice(0, i))
  }
  return arr.map(e => e.toUpperCase())
}

function betweenExtremes(numbers) {
  //   return Math.max(...numbers) - Math.min(...numbers)
    return numbers.sort((a, b) => a - b)[numbers.length - 1] - numbers.sort((a, b) => a - b)[0]
  }

  function solve(s){
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let arr = s.split('').map(e => alph.indexOf(e)).sort((a, b) => a - b)
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + 1 !== arr[i + 1]) return false
    }
    return true
  }

  function unscrambleEggs(word){
    return word.split('egg').join('')
  }

function pattern(n){
    let arr = []
    for (let i = 1; i <= n; i++) {
      arr.push(`1${'*'.repeat(i - 1)}${i > 1 ? i : ''}`)
    }
    return arr.join('\n')
}

function ArithmeticSequenceSum(a, r, n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += a + r * i
  }
  return sum
}

function remove (string) {
  return string.split(' ').map(e => {
    while (e[e.length - 1] === '!') e = e.slice(0, e.length - 1)
    return e
  }).join(' ')
}

function isDivisible(...args){
  let first = [...args][0]
  let rest = [...args].slice(1)
  return rest.every(e => first % e === 0)
}

function consecutive(arr) {
  let count = 0
  arr = arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) count += arr[i + 1] - arr[i] - 1
  }
  return count
}

function calcType(a, b, res) {
  if (a + b === res) return 'addition'
  else if (a - b === res) return 'subtraction'
  else if (a * b === res) return 'multiplication'
  else if (a / b === res) return 'division'
}

function multiples(s1,s2,s3){
  let arr = []
  for (let i = 1; i < s3; i++) {
    if (i % s1 === 0 && i % s2 === 0) arr.push(i)
  }
  return arr
}

function howManyTimes(annualPrice, individualPrice) {
  return Math.ceil(annualPrice / individualPrice)
}

function fizzBuzzCuckooClock(time) {
  let [hour, minute] = time.split(':')
  if (minute === '00') return 'Cuckoo '.repeat(hour % 12 === 0 ? 12 : hour % 12).trim()
  else if (minute === '30') return 'Cuckoo'
  else if (minute % 3 === 0 && minute % 5 === 0) return 'Fizz Buzz'
  else if (minute % 3 === 0) return 'Fizz'
  else if (minute % 5 === 0) return 'Buzz'
  else return 'tick'
}

function mean(lst){
  return [lst.filter(e => '0123456789'.includes(e)).reduce((a, c) => a + +c, 0) / 10, 
          lst.filter(e => !'0123456789'.includes(e)).join('')]
}

function makeValley(arr) {
  let left = []
  let right = []
  arr = arr.sort((a, b) => b - a)
  for (let i = 0; i < arr.length; i++) {
    if (!(i % 2)) left.push(arr[i])
    else right.unshift(arr[i])
  }
  return left.concat(right)
}

function makePassword(phrase) {
  return phrase.split(' ')
    .map(e => e[0].toLowerCase() === 'i' ? 1 : 
         e[0].toLowerCase() === 'o' ? 0 : 
         e[0].toLowerCase() === 's' ? 5 : e[0])
    .join('')
}

function nthChar(words){
  return words.map((e, i) => e[i]).join('')
 }

 function countArara(n) {
  return ('adak '.repeat(Math.floor(n / 2)) + 'anane'.repeat(n % 2)).trim()
}

function capital(capitals){
  return capitals.map(e => `The capital of ${e.state || e.country} is ${e.capital}`)
}

function listToArray(list) {
  let arr = []
  while (list.next) {
    arr.push(list.value)
    list = list.next
  }
  arr.push(list.value)
  return arr
}

var vampire_test = function(a, b){
  let prod = (a * b).toString().split('')
  let digits = a.toString().split('').concat(b.toString().split(''))
  for (let i = 0; i < digits.length; i++) {
    let ind = prod.indexOf(digits[i])
    if (ind === -1) return false
    prod = prod.slice(0, ind).concat(prod.slice(ind + 1))
  }
  return true
}

const arrCheck = value => value.every(e => Array.isArray(e))

function remove (string) {
  let ind
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== '!') {
      ind = i + 1
      break
    }
  }
  return string.slice(0, ind).split('').filter(e => e !== '!').join('') + string.slice(ind)
}

function rakeGarden(garden) {
  return garden.split(' ')
    .map(e => (e === 'gravel' || e === 'rock') ? e : 'gravel')
    .join(' ')
}

function spongeMeme(sentence) {
  return sentence.split('').map((e, i) => i % 2 ? e.toLowerCase() : e.toUpperCase()).join('')
}

function duplicates(arr) {
  let a = []
  let dups = arr.filter(e => arr.indexOf(e) !== arr.lastIndexOf(e))
  let obj = {}
  for (let i = 0; i < dups.length; i++) {
    if (!obj[dups[i]]) obj[dups[i]] = 1
    else if (obj[dups[i]] === 1) {a.push(dups[i]), obj[dups[i]]++}
  }
  return a
}

function pendulum(values) {
  let arr = []
  values = values.sort((a, b) => a - b)
  for (let i = 0; i < values.length; i++) {
    if(i % 2) arr.push(values[i])
    else arr.unshift(values[i])
  }
  return arr
}

function solve(arr){
  return arr.filter((e, i) => e > Math.max(...arr.slice(i + 1)))
};

function dominator(arr) {
  let obj = arr.reduce((a, c) => {
    a[c] ? a[c]++ : a[c] = 1
    return a
  }, {})
  for (let x in obj) {
    if (obj[x] > arr.length / 2) return +x
  }
  return -1
}

function noRepeat(str) {  
  return str.split('').filter(e => str.indexOf(e) === str.lastIndexOf(e))[0]
}

function numberJoy(n) {
  let s = n.toString().split('').reduce((a, c) => a + +c, 0)
  return n === s * s.toString().split('').reverse().join('')
}

function smallEnough(a, limit){
  return a.every(e => e <= limit)
}

class Dictionary {
  constructor() {
    this.dict = {}
  }
  
  newEntry(key, value) {
    this.dict[key] = value
  }
  
  look(key) {
    return this.dict[key] || `Can't find entry for ${key}`
  }
}

var calculate = function calculate(a, o, b) {
  if(o === "+") return a + b;
  else if(o === "-") return a - b;
  else if(o === "/" && b !== 0) return a / b;
  else if(o === "*") return a * b
  return null 
 }

 function solve(s,g){
  for (let i = 1; i <= s; i++) {
    let a = i, b = s - i
    if (a % g === 0 && b % g === 0) return [a, b].sort((a, b) => a - b)
  }
  return -1
}

function tailSwap(arr) {
  arr = arr.map(e => e.split(':'))
  return [arr[0][0] + ':' + arr[1][1], arr[1][0] + ':' + arr[0][1]]
}

function counterEffect(hitCount) {
  return hitCount.split('').map(e => [...new Array(+e + 1).keys()])
}

function caffeineBuzz(n){
  if (n % 3 === 0 && n % 4 === 0) return 'CoffeeScript'
  else if (n % 3 === 0 && n % 2 === 0) return 'JavaScript'
  else if (n % 3 === 0) return 'Java'
  else return 'mocha_missing!'
}

function evenChars(string) {
  if (string.length < 2 || string.length > 100) return 'invalid string'
  return string.split('').filter((e, i) => i % 2)
}

var circleArea = function(radius) {
  if (typeof radius !== 'number' || radius <= 0) return false
  return +(Math.PI * radius * radius).toFixed(2)
};

function solve(a){
  return a.filter(e => e % 2 === 0).length - a.filter(e => e % 2).length
};

function generateIntegers(n) {
  return [...new Array(n+1).keys()]
}


















