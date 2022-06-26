function dirReduc(arr){
    let array = [...arr]
    for (let i = 0; i <= arr.length / 2; i++) {
      for (let j = 0; j < array.length; j++) {
        if ((array[j] === 'NORTH' && array[j + 1] === 'SOUTH') || (array[j] === 'SOUTH' && array[j + 1] === 'NORTH') || (array[j] === 'EAST' && array[j + 1] === 'WEST') || (array[j] === 'WEST' && array[j + 1] === 'EAST')) {
          array.splice(j, 2)
        }
      }
    }
    return array
}

function rot13(message){
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    return message
      .split(' ')
      .map(w => w.split('').map(e => alph.includes(e.toLowerCase()) ? (e === e.toLowerCase() ? alph[((alph.indexOf(e) + 13) % 26)] : alph.toUpperCase()[((alph.toUpperCase().indexOf(e) + 13) % 26)]) : e).join(''))
      .join(' ')
}

function pigIt(str){
    return str.split(' ').map(e => e.length === 1 && !'abcdefghijklmnopqrstuvwxyz'.includes(e.toLowerCase()) ? e : e.slice(1) + e[0] + 'ay').join(' ')
}

function productFib(prod){
  let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
  if (fibs[fibs.length - 2] * fibs[fibs.length - 1] >= prod) {
    for (let i = 0; i < fibs.length; i++) {
      if (fibs[i] * fibs[i + 1] === prod) return [fibs[i], fibs[i + 1], true]
      if (fibs[i] * fibs[i + 1] > prod && fibs[i] * fibs[i - 1] < prod) return [fibs[i], fibs[i + 1], false]
    }
  }
  if (fibs[fibs.length - 2] * fibs[fibs.length - 1] < prod) {
    while (fibs[fibs.length - 2] * fibs[fibs.length - 1] < prod) {
      fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1])
      for (let i = 0; i < fibs.length; i++) {
      if (fibs[i] * fibs[i + 1] === prod) return [fibs[i], fibs[i + 1], true]
      if (fibs[i] * fibs[i + 1] > prod && fibs[i] * fibs[i - 1] < prod) return [fibs[i], fibs[i + 1], false]
      }
    }
  }
}

function incrementString (strng) {
  let index = strng.length
  for (let i = 0; i < strng.length; i++) {
    if (`0123456789`.includes(strng[i])) {
      index = i
      break
    }
  }
  let wordPart = strng.slice(0, index)
  let numberPart = strng.slice(index)
  let newNumberPart = (+numberPart + 1).toString().padStart(numberPart.length, '0')
  return wordPart + newNumberPart
}

function domainName(url){
  let slash = url.indexOf('//')
  let dot = url.indexOf('www.')
  let start
  if (slash === -1 && dot === -1) start = 0
  else if ((dot === slash + 2) || (slash === -1)) start = dot + 4
  else start = slash + 2
  let short = url.slice(start)
  let end = short.indexOf('.')
  return short.slice(0, end)
}

var maxSequence = function(arr){
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let subarrSum = arr.slice(i, j).reduce((a, c) => a + c, 0)
      if (subarrSum > sum) sum = subarrSum
    }
  }
  return sum
}

function primeFactors(n){
  console.log(n)
  let arr = []
  for (let i = 2; i <= n; i++) {
    let count = 0
    while (!(n % i)) {
      count++
      n /= i
    }
    arr.push([i, count])
    if (n === 1) break
  }
  return arr.filter(e => e[1] !== 0)
    .map((e, i, a) => `(${a[i][0]}` + (a[i][1] === 1 ? ')' : `**${a[i][1]})`))
    .join('')
  
}

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection,
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemCount() / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex >= this.pageCount()) return -1
  else if (pageIndex === this.pageCount() - 1) return this.itemCount() % this.itemsPerPage
  else return this.itemsPerPage
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex >= this.itemCount() || itemIndex < 0) return -1
  else return Math.floor((itemIndex + 1) / this.itemsPerPage)
}

function validate(password) {
  console.log(password)
  let len = password.length, lower = false, upper = false, num = false, alphnum = true
  for (let i = 0; i < len; i++) {
    if ('0123456789'.includes(password[i])) num = true
    else if (!'abcdefghijklmnopqrstuvwxyz'.includes(password[i].toLowerCase())) alphnum = false
    else if (password[i] === password[i].toLowerCase()) lower = true
    else if (password[i] === password[i].toUpperCase()) upper = true
    
  }
  return len >= 6 && lower && upper && num && alphnum
}

function listSquared(m, n) {
  let returnArr = []
  for (let i = m; i <= n; i++) {
    let arr = []
    for (let j = 1; j <= i; j++) {
      if (!(i % j)) arr.push(j)
    }
    if (!(Math.sqrt(arr.map(e => e ** 2).reduce((a, c) => a + c, 0)) % 1)) returnArr.push([i, arr.map(e => e ** 2).reduce((a, c) => a + c, 0)])
  }
  return returnArr
}

function alphanumeric(string){
  if (string.length < 1) return false
  for (let i = 0; i < string.length; i++) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(string[i].toLowerCase()) || '0123456789'.includes(string[i])) continue
    else return false
  }
  return true
}

function gap(g, m, n) {
  let first = 0, second = 0
  for (let i = m; i <= n; i++) {
    let prime = true
    for (let j = 2; j < i / 2; j++) {
      if (!(i % j)) {
        prime = false
        break
      }
    }
    if (prime && first === 0) first = i
    else if (prime && i - first === g) {
      second = i
      break
    }
    else if (prime) first = i
  }
  if (first !== 0 && second !== 0) return [first, second]
  return null
}

function SnakesLadders() {
  this.ladders = [[2, 38], [7, 14], [8, 31], [15, 26], [21, 42], [28, 84], [36, 44], [51, 67], [71, 91], [78, 98], [87, 94]]
  this.snakes = [[99, 80], [95, 75], [92, 88], [89, 68], [74, 53], [64, 60], [62, 19], [49, 11], [46, 25], [16, 6]]
  this.player1 = 0
  this.player2 = 0
  this.turn = 0
  this.playing = true
};

SnakesLadders.prototype.play = function(die1, die2) {
  if (this.playing = false || this.player1 === 100 || this.player2 === 100) return 'Game over!'
  let total = die1 + die2
  if (this.turn % 2 === 0) {
    this.player1 += total
    if (this.player1 === 100) {
      this.playing = false
      return 'Player 1 Wins!'
    }
    if (this.player1 > 100) this.player1 = 200 - this.player1
    if (this.ladders.map(e => e[0]).includes(this.player1)) this.player1 = this.ladders[this.ladders.map(e => e[0]).indexOf(this.player1)][1]
    if (this.snakes.map(e => e[0]).includes(this.player1)) this.player1 = this.snakes[this.snakes.map(e => e[0]).indexOf(this.player1)][1]
    if (die1 !== die2) this.turn++
    return `Player 1 is on square ${this.player1}`
  } else {
    this.player2 += total
    if (this.player2 === 100) {
      this.playing = false
      return 'Player 2 Wins!'
    }
    if (this.player2 > 100) this.player2 = 200 - this.player2
    if (this.ladders.map(e => e[0]).includes(this.player2)) this.player2 = this.ladders[this.ladders.map(e => e[0]).indexOf(this.player2)][1]
    if (this.snakes.map(e => e[0]).includes(this.player2)) this.player2 = this.snakes[this.snakes.map(e => e[0]).indexOf(this.player2)][1]
    if (die1 !== die2) this.turn++
    return `Player 2 is on square ${this.player2}`
  }
}

function reduce(arr) {
  return arr.map(e => {
    for (let i = 2; i <= e[0]; i++) {
      while (e[0] % i === 0 && e[1] % i === 0) {
        e[0] /= i
        e[1] /= i
      }
    }
    return e
  })
}

function commonDenominator(arr) {
  let denoms = arr.map(e => e[1])
  let maxDenom = Math.max(...denoms)
  let commonDenom
  for (let i = 1; i <= denoms.reduce((a, c) => a * c, 1) / maxDenom; i++) {
    let testNum = maxDenom * i
    for (let j = 0; j < denoms.length; j++) {
      if (testNum % denoms[j]) {
        testNum = 0
        break
      }
    }
    if (testNum) {
      commonDenom = testNum
      break
    }
  }
  return commonDenom
}

function convertFrac(lst){
  let reduced = reduce(lst)
  let commonDenom = commonDenominator(lst)
  let converted = lst.map(e => [e[0] * commonDenom / e[1], commonDenom])
  return converted.map(e => `(${e.join(',')})`).join('')
}

function isPrime(n) {
  for (let i = 2; i <= Math.ceil(n / 2); i++) {
    if (n % i === 0) return false
  }
  return true
}


function decomp(n) {
  let primes = []
  for (let j = n; j > 1; j--) {
    let num = j
    if (isPrime(num)) {
      primes.push(num)
    } else {
      for (let i = 2; i <= num; i++) {
        if (!isPrime(i)) continue
        while (num % i === 0) {
          primes.push(i)
          num /= i
        }
      }
    }
  }
  primes = primes.reduce((a, c) => {return a[c] ? a[c]++ : a[c] = 1, a}, {})
  let returnStr = []
  for (let key in primes) {
    if (primes[key] === 1) returnStr.push(+key)
    else returnStr.push(`${key}^${primes[key]}`)
  }
  return returnStr.join(' * ')
}

function mixedFraction(s){
  let fraction = s.split('/')
  let negative = false
  if (+fraction[0] < 0 && +fraction[1] < 0) fraction = fraction.map(e => e * -1)
  if (+fraction[0] < 0) {
    fraction = [fraction[0].slice(1), fraction[1]]
    negative = true
  }
  if (+fraction[1] < 0) {
    fraction = [fraction[0], fraction[1].slice(1)]
    if (+fraction[0] !== 0) negative = true
  }
  if (+fraction[1] === 0) throw new Error('ZeroDivisionError')
  let a = Math.floor(fraction[0] / fraction[1])
  let b = fraction[0] % fraction[1]
  let c = fraction[1]
  for (let i = 2; i <= b; i++) {
    while(!(b % i) && !(c % i)) {
      b /= i
      c /= i
    }
  }
  let reduced = a === 0 && b === 0 ? '0' : (a === 0 ? '' : `${a}`) + (b === 0 ? '' : ` ${b}/${c}`)
  return negative ? '-' + reduced.trim() : reduced.trim()
}

function removeNb (n) {
  let options = []
  let array = [...new Array(n).keys()].map(e => e + 1)
  let sum = array.reduce((a, c) => a + c, 0)
  for (let i = 0; i < array.length; i++) {
    let a = array[i]
    let b = (sum - a) / (a + 1)
    if (b === Math.floor(b) && b <= n) options.push([a, b])
  }
  return options
}

function findUniq(arr) {
  let changed = arr.map(e => e.split(' ').join('').split('').map(e => e.toLowerCase()).sort().join(''))
  let shortest = Math.min(...changed.map(e => e.length))
  if (shortest === 0) shortest = 1
  changed = changed.map(e => e.slice(0, shortest))
  let index = changed.indexOf(changed.filter(e => changed.indexOf(e) === changed.lastIndexOf(e))[0])
  return arr[index]
}

function smallest(n) {
  let options = []
  let arr = n.toString().split('').map(e => +e)
  for (let i = 0; i < arr.length; i++) {
    let digit = arr[i]
    let rest = arr.filter((e, ind) => ind !== i)
    for (let j = 0; j <= rest.length; j++) {
      let newNum = rest.slice(0, j).concat(digit).concat(rest.slice(j))
      options.push([+newNum.join(''), i, j])
    }
  }
  let smallest = options.sort((a, b) => a[0] - b[0])[0][0]
  options = options.filter(e => e[0] === smallest)
  let smallestI = options.sort((a, b) => a[1] - b[1])[0][1]
  options = options.filter(e => e[1] === smallestI)
  return options.sort((a, b) => a[2] - b[2])[0]
}

var whoEatsWho = function(zoo) {
  let eating = {
    'antelope' : ['grass'],
    'big-fish' : ['little-fish'],
    'bug' : ['leaves'],
    'bear' : ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
    'chicken' : ['bug'], 
    'cow' : ['grass'],
    'fox' : ['chicken', 'sheep'],
    'giraffe' : ['leaves'],
    'lion' : ['antelope', 'cow'],
    'panda' : ['leaves'],
    'sheep' : ['grass']
  }
  let arr = [zoo]
  zoo = zoo.split(',')
  for (let i = 0; i < zoo.length; i++) {
    let eater = zoo[i]
    let left = zoo[i - 1]
    let right = zoo[i + 1]
    console.log(eater, left, right, i)
    if (left !== undefined && eating[eater] && eating[eater].includes(left)) {
      zoo.splice(i - 1, 1)
      i = -1
      arr.push(`${eater} eats ${left}`)
    }
    else if (right !== undefined && eating[eater] && eating[eater].includes(right)) {
      zoo.splice(i + 1, 1)
      i = -1
      arr.push(`${eater} eats ${right}`)
    }
  }
  return arr.concat(zoo.join(','))
}

function movingShift(s, shift) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let code = ''
  let count = shift
  //loops through string, finds index of character, adds the current count and finds new char
  //adds new char to code and increases count each time
  //if char is not a letter, keeps the same and still increases count
  for (let i = 0; i < s.length; i++) {
    let letterIndex = alph.indexOf(s[i].toLowerCase())
    let newIndex = (letterIndex + count) % 26
    let newLetter = letterIndex === -1 ? s[i] : s[i].toLowerCase() === s[i] ? alph[newIndex] : alph[newIndex].toUpperCase()
    code += newLetter
    count++
  }
  //determines lengths to split the code
  //if even splits, fills array with number, else uses algorithm to create array of lengths
  let lengths
  if (code.length % 5 === 0) lengths = [...new Array(5).fill(code.length / 5)]
  else {
    let ceilLen = Math.ceil(code.length / 5)
    lengths = [...new Array(3).fill(ceilLen)]
    let remainingLength = code.length - (ceilLen) * 3
    if (remainingLength >= ceilLen) {
      lengths.push(ceilLen)
      lengths.push(remainingLength - ceilLen)
    } else {
      lengths.push(remainingLength)
      lengths.push(0)
    }
  }
  //loops through array of lengths and adds slice to final result array while removing that part from the array
  let result = []
  let arr = code.split('')
  for (let i = 0; i < lengths.length; i++) {
    result.push(arr.slice(0, lengths[i]).join(''))
    arr = arr.slice(lengths[i])
  }
  return result
}

function demovingShift(arr, shift) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let count = shift
  let code = arr.join('')
  console.log(code)
  let str = ''
  for (let i = 0; i < code.length; i++) {
    let letterIndex = alph.indexOf(code[i].toLowerCase())
    let newIndex = (letterIndex + 26 - count % 26) % 26
    let char = letterIndex === -1 ? code[i] : code[i] === code[i].toLowerCase() ? alph[newIndex] : alph[newIndex].toUpperCase()
    str += char
    count ++
  }
  return str
}

Math.round = function(number) {
  if (number % 1 >= .5) return Math.ceil(number)
  else return Math.floor(number)
};

Math.ceil = function(number) {
  return number % 1 ? Math.floor(number) + 1 : number
};

Math.floor = function(number) {
  return number - number % 1
};

function workOnStrings(a,b){
  let first = a.split(''), second = b.split('')
  for (let i = 0; i < second.length; i++) {
    first = first.map(e => e.toLowerCase() === second[i].toLowerCase() ? swapCase(e) : e)
  }
  for (let i = 0; i < first.length; i++) {
    second = second.map(e => e.toLowerCase() === first[i].toLowerCase() ? swapCase(e) : e)
  }
  return first.concat(second).join('')
}

function swapCase(l) {
  return l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase()
}

function solequa(n) {
  let results = []
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    let x, y
    if (n % i === 0) {
      y = (n / i - i) / 4
      x = i + ((n / i - i) / 2)
      if (y % 1 === 0 && x % 1 === 0) results.push([x, y])
    }
  }
  return results
}

function iterPi(epsilon) {
	let count = 0
  let denom = 1
  let pos = true
  let approx = 0
  while (Math.abs(Math.PI - approx) >= epsilon) {
    pos ? approx += 4 / denom : approx -= 4 / denom
    count++
    denom += 2
    pos = !pos
  }
  return [count, +approx.toFixed(10)]
}

function prefill(n, v = undefined) {
  if (n * 1 != n || n === Infinity || n === -Infinity || n % 1 !== 0 || n < 0 || typeof n == 'boolean') throw TypeError(`${n} is invalid`)
  return [...new Array(+n).fill(v)]
}

function phone(strng, num) {
  let arr = strng.split('\n')
  let person = arr.filter(e => e.includes(num))
  if (person.length > 1) return `Error => Too many people: ${num}`
  if (person.length === 0) return `Error => Not found: ${num}`
  person = person[0].split('')
  let nameStart = person.indexOf('<')
  let nameEnd = person.indexOf('>')
  let name = person.slice(nameStart + 1, nameEnd).join('')
  let address = person.join('')
    .split(`<${name}>`).join('')
    .split(`+${num}`)
    .map(e => e.trim())
    .filter(e => e.length !== 0)
    .join('').split('')
    .map(e => e === '_' ? e = ' ' : e)
    .filter(e => e !== ';' && e !== '/' && e !== '$' && e !== '!' && e !== '*' && e !== '?' && e !== ':' && e !== ',')
    .join('')
    .trim()
    .split(' ')
    .filter(e => e.length)
    .join(' ')
  return `Phone => ${num}, Name => ${name}, Address => ${address}`
}

function cubeOdd(arr) {
  return arr.every(e => typeof e === 'number') ? 
    arr.map(e => e ** 3).filter(e => e % 2).reduce((a, c) => a + c, 0) : undefined
}

function damagedOrSunk (board, attacks){
  let boat1 = board.map(e => e.join('')).join('').split('').filter(e => e === '1').length
  let boat2 = board.map(e => e.join('')).join('').split('').filter(e => e === '2').length
  let boat3 = board.map(e => e.join('')).join('').split('').filter(e => e === '3').length
  let boatsStart = [boat1, boat2, boat3]
  let boats = [...boatsStart].filter(e => e > 0)
  for (let i = 0; i < attacks.length; i++) {
    let square = board[board.length - attacks[i][1]][attacks[i][0] - 1]
    if (square === 1) boats[0]--
    if (square === 2) boats[1]--
    if (square === 3) boats[2]--
  }
  let sunk = boats.filter(e => e === 0).length
  let damaged = boats.filter((e, i) => e !== 0 && e !== boatsStart[i]).length
  let notTouched = boats.filter((e, i) => e !== 0 && e === boatsStart[i]).length
  let points = sunk * 1 + damaged * 0.5 + notTouched * -1
  return {'sunk' : sunk, 'damaged' : damaged, 'notTouched' : notTouched, 'points' : points}
}

function  closest(strng) {
  if (strng === '') return []
  let arr = strng.split(' ').map((e, i) => [e.toString().split('').reduce((a, c) => a + +c, 0), i, +e])
  let sorted = arr.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  let first = sorted[0]
  let second = sorted[1]
  let diff = second[0] - first[0]
  for (let i = 2; i < sorted.length; i++) {
    if (sorted[i][0] - sorted[i - 1][0] < diff) {
      first = sorted[i - 1]
      second = sorted[i]
      diff = second[0] - first[0]
    }
  }
  return first[0] === second[0] ? [first, second].sort((a, b) => a[1] - b[1]) : [first, second]
}

function number2words(n){
  if (n < 1000) return hundreds(n)
  else {
    let first = Math.floor(n / 1000)
    let second = n % 1000
    return second !== 0 ? `${hundreds(first)} thousand ${hundreds(second)}` : `${hundreds(first)} thousand`
  }
}

function hundreds(n) {
  let num = n.toString()
  let digits = {0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine',
               10 : 'ten', 11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen',
               20 : 'twenty', 30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty', 70 : 'seventy', 80 : 'eighty', 90 : 'ninety',}
  if (digits[n]) return digits[n]
  let hundreds = Math.floor(n / 100)
  let tens = Math.floor(num.slice(-2) / 10) * 10
  let ones = n % 10
  if (hundreds === 0) return `${digits[tens]}-${digits[ones]}`
  else {
    if (tens === 0 && ones === 0) return `${digits[hundreds]} hundred`
    if (tens === 10) return `${digits[hundreds]} hundred ${digits[tens + ones]}`
    if (tens === 0) return `${digits[hundreds]} hundred ${digits[ones]}`
    if (ones === 0) return `${digits[hundreds]} hundred ${digits[tens]}`
    else return `${digits[hundreds]} hundred ${digits[tens]}-${digits[ones]}`
  }
}

function bestMatch(ALAHLYGoals, zamalekGoals) {
  let arr = []
  for (let i = 0; i < zamalekGoals.length; i++) {
    let diff = ALAHLYGoals[i] - zamalekGoals[i]
    arr.push([diff, zamalekGoals[i], i])
  }
  arr = arr.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2])
  return arr[0][2]
}

function sortByName(ary) {
  ary = ary.map(e => [numberName(e), e])
  console.log(ary.slice(99))
  return ary.sort((a, b) => a[0].localeCompare(b[0])).map(e => e[1])
}

function numberName(n) {
  let ones = 'zero one two three four five six seven eight nine'.split(' ')
  let tens = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ')
  let teens = 'ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ')
  let hundred = Math.floor(n / 100)
  let ten = Math.floor(n % 100 / 10)
  let one = n % 100 % 10
  if (n < 10) return ones[n]
  else if (n < 20) return teens[n % 10]
  else if (n < 100) return one === 0 ? tens[ten - 2] : `${tens[ten - 2]} ${ones[one]}`
  else {
    if (one === 0 && ten === 0) return `${ones[hundred]} hundred`
    else if (ten === 1) return `${ones[hundred]} hundred ${teens[one]}`
    else if (one === 0) return `${ones[hundred]} hundred ${tens[ten - 2]}`
    else if (ten === 0) return `${ones[hundred]} hundred ${ones[one]}`
    else return `${ones[hundred]} hundred ${tens[ten - 2]} ${ones[one]}`
  }
}

function rolldiceSumProb(arr, totalSides){
  let total = 6 ** totalSides
  let count = 0
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      if (totalSides >= 3) {
        for (let k = 1; k <= 6; k++) {
          if (totalSides >= 4) {
            for (let x = 1; x <= 6; x++) {
              if (totalSides >= 5) {
                for (let y = 1; y <= 6; y++) {
                  if (i + j + k + x + y === arr) count++
                }
              }
              else if (i + j + k + x === arr) count++
            }
          }
          else if (i + j + k === arr) count++
        }
      }
      else if (i + j === arr) count ++
    }
  }
  return count / total
}










