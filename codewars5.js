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

function landPerimeter(arr) {
  let perim = 0
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[0].length; x++) {
      if (arr[y][x] === 'X') {
        let touching = 0
        if (x + 1 < arr[0].length && arr[y][x + 1] === 'X') touching++
        if (x - 1 >= 0 && arr[y][x - 1] === 'X') touching++
        if (y + 1 < arr.length && arr[y + 1][x] === 'X') touching++
        if (y - 1 >= 0 && arr[y - 1][x] === 'X') touching++
        perim += 4 - touching
      }
    }
  }
  return `Total land perimeter: ${perim}`
}

function superStreetFighterSelection(fighters, position, moves){
  let arr = []
  let pos = position
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'up' && pos[0] > 0 && fighters[pos[0] - 1][pos[1]] !== '') pos[0]--
    if (moves[i] === 'down' && pos[0] < fighters.length - 1 && fighters[pos[0] + 1][pos[1]] !== '') pos[0]++
    if (moves[i] === 'left') {
      if (fighters[pos[0]][(pos[1] - 1 + fighters[0].length) % fighters[0].length] !== '') pos[1] = (pos[1] - 1 + fighters[0].length) % fighters[0].length
      else {
        while (fighters[pos[0]][(pos[1] - 1 + fighters[0].length) % fighters[0].length] === '') {
          pos[1] = (pos[1] - 1 + fighters[0].length) % fighters[0].length
        }
        pos[1] = (pos[1] - 1 + fighters[0].length) % fighters[0].length
      }
    }
    if (moves[i] === 'right') {
      if (fighters[pos[0]][(pos[1] + 1) % fighters[0].length] !== '') pos[1] = (pos[1] + 1) % fighters[0].length
      else {
        while (fighters[pos[0]][(pos[1] + 1) % fighters[0].length] === '') {
          pos[1] = (pos[1] + 1) % fighters[0].length
        }
        pos[1] = (pos[1] + 1) % fighters[0].length
      }
    }
    arr.push(fighters[pos[0]][pos[1]])
  }
  return arr
}

function fight(robot1, robot2, tactics) {
  let sorted = [robot1, robot2].sort((a, b) => b.speed - a.speed)
  let first = sorted[0]
  let second = sorted[1]
  let turn = 1
  while (first.health > 0 && second.health > 0 && (first.tactics.length > 0 || second.tactics.length > 0)) {
    if (turn % 2) {
      if (first.tactics.length > 0) {
        let move = first.tactics[0] 
        let damage = tactics[move] 
        second.health -= damage
        first.tactics.shift()
      }
      turn++
    } else {
      if (second.tactics.length > 0) {
        let move = second.tactics[0]
        let damage = tactics[move]
        first.health -= damage
        second.tactics.shift()
      }
      turn++
    }
  }
  if (first.health === second.health) return 'The fight was a draw.'
  return [first, second].sort((a, b) => b.health - a.health)[0].name + ' has won the fight.'
}

function encodeResistorColors(ohmsString) {
  let colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white']
  let numArr = ohmsString.split(' ')[0].split('')
  let num = numArr.includes('k') ? numArr.slice(0, numArr.length - 1).join('') * 1000 : 
    numArr.includes('M') ? numArr.slice(0, numArr.length - 1).join('') * 1000000 :
    +numArr.join('')
  let exp = 0
  while (num / 10 >= 10) {
    exp++
    num /= 10
  }
  return `${colors[Math.floor(num / 10)]} ${colors[num % 10]} ${colors[exp]} gold`
}

function tour(friends, fTowns, distTable) {
  let visit = friends.filter(e => fTowns.map(e => e[0]).includes(e))
    .map(e => fTowns[fTowns.map(e => e[0]).indexOf(e)][1])
  let firstDist = distTable[distTable.indexOf(visit[0]) + 1]
  let lastDist = distTable[distTable.indexOf(visit[visit.length - 1]) + 1]
  let totalDist = firstDist + lastDist
  for (let i = 0; i < visit.length - 1; i++) {
    let dist = Math.sqrt((distTable[distTable.indexOf(visit[i + 1]) + 1]) ** 2 - (distTable[distTable.indexOf(visit[i]) + 1]) ** 2)
    totalDist += dist
  }
  return Math.floor(totalDist)
}

function alphabetWar(battlefield) {
  console.log(battlefield)
  if (!battlefield.includes('#')) return battlefield.split('').filter(e => e !== '[' && e !== ']').join('')
  else if (battlefield.indexOf('#') === battlefield.lastIndexOf('#')) return sheltered(battlefield).split('').filter(e => e !== '[' && e !== ']' && e !== '#').join('')
  else if (battlefield.indexOf('[') === battlefield.lastIndexOf('[')) return ''
  else {
    let filtered = sheltered(battlefield)
    let start = starts(filtered)
    let end = ends(filtered)
    let survived = ''
    for (let i = 0; i < start.length; i++) {
      if (filtered.slice(start[i], end[i]).indexOf('#') === filtered.slice(start[i], end[i]).lastIndexOf('#')) survived += filtered.slice(start[i], end[i])
    }
    return survived.split('').filter(e => e !== '[' && e !== ']' && e !== '#').join('')
  }
}

function sheltered(str) {
    let filtered = ''
    let sheltered = false
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') filtered += str[i]
      else if (str[i] === '[') {
        filtered += str[i]
        sheltered = true
      } else if (str[i] === ']') {
        filtered += str[i]
        sheltered = false
      } else if (sheltered) {
        filtered += str[i]
      }
    }
  return filtered
}

function starts(str) {
  let start = str.split('').map((e, i) => [e, i]).filter(e => e[0] === ']').map(e => e[1])
  start.pop()
  start.unshift(0)
  return start
}

function ends(str) {
  let end = str.split('').map((e, i) => [e, i]).filter(e => e[0] === '[').map(e => e[1])
  end.shift()
  end.push(str.length)
  return end
}

function code(s) {
  let len = s.length
  let n = Math.ceil(Math.sqrt(len))
  s += String.fromCharCode(11).repeat(n ** 2 - len)
  let arr = []
  for (let i = 0; i < n; i++) {
    let str = ''
    for (let j = i; j < s.length; j += n) {
      str += s[j]
    }
    arr.push(str)
  }
  return arr.map(e => e.split('').reverse().join('')).join('\n')
}

function decode(s) {
  let arr = s.split('\n').map(e => e.split('').reverse().join(''))
  console.log(arr)
  let str = ''
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      str += arr[j][i]
    }
  }
  return str.split('').filter(e => e !== String.fromCharCode(11)).join('')
}

const deNico = (key, m) => { 
  let sorted = key.split('').sort().join('')
  key = key.split('').map(e => sorted.indexOf(e) + 1)
  let arr = []
  for (let i = 0; i < key.length; i++) {
    let str = ''
    for (let j = i; j < m.length; j += key.length) {
      str += m[j]
    }
    arr.push(str)
  }
  let decode = []
  for (let i = 0; i < key.length; i++) {
    decode.push(arr[key[i] - 1])
  }
  let str = ''
  for (let i = 0; i < decode[0].length; i++) {
    for (let j = 0; j < decode.length; j++) {
      if (decode[j][i]) str += decode[j][i]
    }
  }
  return str.trimEnd()
}

let region = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! \'()$%&"'
function encrypt(text) {
  if (text === '' || text === null) return text
  if (!text.split('').every(e => region.indexOf(e) !== -1)) throw new Error('error')
  let caseSwap = text.split('').map((e, i) => i % 2 ? swapCase(e) : e).join('')
  let str = region[76 - region.indexOf(text[0])]
  for (let i = 1; i < caseSwap.length; i++) {
    let diff = region.indexOf(caseSwap[i - 1]) - region.indexOf(caseSwap[i])
    str += region[(diff + 77) % 77]
  }
  return str
}                                    
                                    
function decrypt(encryptedText) {
  if (encryptedText === '' || encryptedText === null) return encryptedText
  if (!encryptedText.split('').every(e => region.includes(e))) throw new Error('error')
  let str = region[76 - region.indexOf(encryptedText[0])]
  let indexes = encryptedText.split('').map(e => region.indexOf(e))
  for (let i = 1; i < indexes.length; i++) {
    let index = indexes[i]
    let diff = index - 77
    let prevIndex = region.indexOf(str[str.length - 1])
    let newIndex = prevIndex - diff
    str += region[newIndex % 77] 
  }
  return str.split('').map((e, i) => i % 2 ? swapCase(e) : e).join('')
}

function swapCase(l) {
  if (l === l.toLowerCase()) return l.toUpperCase()
  return l.toLowerCase()
}

function consecKprimes(k, arr) {
  let count = 0
  return arr.map(e => primeFactors(e)).filter((e, i, a) => e === k && a[i + 1] === k).length
}

function primeFactors(n) {
  let count = 0
  let num = n
  for (let i = 2; i <= num; i++) {
    if (!isPrime(i)) continue
    while (num % i === 0) {
      count++
      num /= i
    }
  }
  return count
}

function isPrime(n) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

function escape(carpark){
  if (carpark[carpark.length - 1][carpark[0].length - 1] === 2) return []
  let result = []
  carpark[carpark.length - 1][carpark[0].length - 1] = 1
  let yourFloor
  for (let i = 0; i < carpark.length; i++) {
    if (carpark[i].includes(2)) yourFloor = i
  }
  let yourIndex = carpark[yourFloor].indexOf(2)
  
  for (let i = yourFloor; i < carpark.length; i++) {
    let stair = carpark[i].indexOf(1)
    let down = 0
    if (yourIndex > stair) result.push(`L${yourIndex - stair}`)
    if (yourIndex < stair) result.push(`R${stair - yourIndex}`)
    if (i !== carpark.length - 1) result.push(`D${1}`)
    yourIndex = stair
  }
  let final = []
  let nums = 0
  for (let i = 0; i < result.length; i++) {
    if (result[i][0] === 'D') {
      nums += +result[i][1]
    }
    if (result[i][0] !== 'D') {
      if (nums > 0) {
        final.push(`D${nums}`)
        nums = 0
      }
      final.push(result[i])
    }
    if (i === result.length - 1 && nums > 0) final.push(`D${nums}`)
  }
  return final
}

var numberToPrice = function(number) {
  if (typeof number !== 'number') return 'NaN'
  if (!number.toString().includes('.')) number = number.toString() + '.00'
  let [dol, cents] = number.toString().split('.')
  let neg = false
  if (number < 0) {
    neg = true
    dol = dol.slice(1)
  }
  let arr = []
  for (let i = 0; i < dol.length; i += 3) {
    arr.unshift(dol.split('').reverse().slice(i, i + 3).reverse())
  }
  let formattedDol = arr.map(e => e.join('')).join(',')
  let formattedCents = cents.length >= 2 ? cents.slice(0, 2) : cents.padEnd(2, '0')
  if (neg) formattedDol = '-' + formattedDol
  return `${formattedDol}.${formattedCents}`
}



//still working
var peakHeight = function(mountain) {
  let count = 1
  while (mountain.map(e => e.join('')).join('').split('').includes('^')) {
    for (let i = 0; i < mountain.length; i++) {
      if (i === 0 || i === mountain.length - 1) mountain[i] = mountain[i].map(e => e === '^' ? e = count : e)
      else {
        let first = mountain[i].indexOf('^')
        mountain[i][first] = count
        let second = (i === 1 ? mountain[i - 1].lastIndexOf(count) : mountain[i - 1].lastIndexOf('^') + 1)
        if (mountain[i][second + 1] === '^') mountain[i] = mountain[i].map((e, i) => e === '^' && i > second ? e = count : e)
        else mountain[i] = mountain[i].map((e, i) => e === '^' && i >= second - 1 ? e = count : e)
      }
    }
    mountain.shift()
    mountain.pop()
    console.log(mountain)
    count++                                                           
  }
  return Math.max(...mountain[0])
}









