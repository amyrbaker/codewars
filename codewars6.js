function createPhoneNumber(numbers){
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`
}

function likes(names) {
    return names.length === 0 ? 'no one likes this' 
      : names.length === 1 ? `${names[0]} likes this`
      : names.length === 2 ? `${names[0]} and ${names[1]} like this`
      : names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`
      : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

function findOdd(A) {
    let obj = A.reduce((a, c) => {
      return a[c] ? a[c]++ : a[c] = 1, a
    }, {})
    for(let key in obj) {
      if (obj[key] % 2) return +key
    }
}

function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e))
}

function duplicateCount(text){
    return text.toLowerCase('').split('')
      .filter((e, i, a) => i !== a.indexOf(e))
      .filter((e, i, a) => i === a.indexOf(e))
      .length
}

function duplicateEncode(word){
    return word.toLowerCase()
      .split('')
      .map((e, i) => (word.toLowerCase().indexOf(e) === i) && (word.toLowerCase().lastIndexOf(e) === i) ? '(' : ')')
      .join('')
}

function isValidWalk(walk) {
    let pos = [0, 0]
    walk.forEach(e => {
      if (e === 'e') pos[0]++
      if (e === 'w') pos[0]--
      if (e === 'n') pos[1]++
      if (e === 's') pos[1]--
    })
    return walk.length === 10 && pos.join('') === '00'
}

function persistence(num) {
    let arr = num.toString().split('')
    let count = 0
    while (arr.length != 1) {
      arr = arr.reduce((a, c) => a * c, 1).toString().split('')
      count++
    }
   return count
}

function alphabetPosition(text) {
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    return text.toLowerCase().split('').filter(e => alph.includes(e)).map(e => e = alph.split('').indexOf(e) + 1).join(' ')
}

var uniqueInOrder=function(iterable){
    return typeof iterable === 'string' ? 
      iterable.split('').filter((e, i) => e !== iterable[i - 1]) : 
      iterable.filter((e, i) => e !== iterable[i - 1])
}

function toCamelCase(str){
    return str.split(/[-_]+/).map((e, i) => {
      return i === 0 ? e : e[0].toUpperCase() + e.slice(1)
    }).join('')
}

function order(words){
    let arr = []
    let wordArr = words.split(' ')
    for (let i = 1; i <= words.length; i++) {
      wordArr.forEach(e => {
        if (e.includes(i + '')) arr.push(e)
      })
    }
    return arr.join(' ')
}

function tribonacci(signature,n){
    if (n <= 3) return signature.slice(0, n)
    let arr = [...signature].concat([...Array(n - 3).fill(1)])
    for (let i = 3; i < arr.length; i++) {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3]
    }
    return arr
}

function isPangram(string){
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let check = alph.split('').map(l => string.toLowerCase().includes(l) ? true : false)
    return !check.includes(false)
}

function digPow(n, p){
    let red = n.toString().split('').map((e, i) => e ** (p + i)).reduce((a, c) => a + c, 0)
    return red % n === 0 ? red / n : -1
}

function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i).reduce((a, c) => a + c, 0)
    let right = arr.slice(i + 1).reduce((a, c) => a + c, 0)
    if (left === right) return i
  }
  return -1
}

function solution(str){
  let string = str.length % 2 === 0 ? str : str + '_'
   let arr = []
   for (let i = 0; i < string.length; i += 2) {
     arr.push(string.slice(i, i + 2))
   }
  return arr
}

function findUniq(arr) {
  return arr.find(e => arr.indexOf(e) === arr.lastIndexOf(e))
}

function comp(array1, array2){
  return array1 === null || array2 === null ? false : 
    array1.sort((a, b) => a - b).map(e => e ** 2).join('') === array2.sort((a, b) => a - b).join('')
}

function sortArray(array) {
  let odds = [...array].filter(e => e % 2).sort((a, b) => a - b)
  let arr = [...array]
  for (let i = 0; i < array.length; i++) {
    if (arr[i] % 2) {
      arr[i] = odds[0]
      odds.shift()
    }
  }
  return arr
}

function findNb(m) {
  let total = 0
  let n = 1
  while(total < m) {
    total += n**3
    if (total === m) return n
    n++
  }
  return -1
}

function deleteNth(arr,n){
  let newArr = []
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1
      newArr.push(arr[i])
    } else {
      if (obj[arr[i]] < n) {
        obj[arr[i]]++
        newArr.push(arr[i])
      } else {
        obj[arr[i]] ++
      }
    }
  }
  return newArr
}

function high(x){
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let xArr = x.split(' ')
  let scoreArr = []
  xArr.forEach(w => {
    let score = 0
    for (let i = 0; i < w.length; i++) {
      score += (alph.indexOf(w[i]) + 1)
    }
    scoreArr.push(score)
  })
  let highScore = Math.max(...scoreArr)
  let index = scoreArr.indexOf(highScore)
  return xArr[index]
}

function bouncingBall(h,  bounce,  window) {
  if (!(h > 0 && bounce > 0 && bounce < 1 && window < h)) return -1
  let count = 1
  let newHeight = h * bounce
  while (newHeight > window) {
    count += 2
    newHeight *= bounce
  }
  return count
}

function countSmileys(arr) {
  return arr.filter(e => [':)', ':D', ';)', ';D', ':-)', ':~)', ':-D', ':~D', ';-)', ';~)', ';-D', ';~D'].includes(e)).length
}

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return ''
  let arr = []
  for (let i = 0; i < strarr.length - k + 1; i++) {
    arr.push(strarr.slice(i, i + k).join(''))
  }
  let lengths = [...arr].map(e => e.length)
  return arr[lengths.indexOf(Math.max(...lengths))]
}

function solution(string) {
  let uppers = [0]
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) uppers.push(i)
  }
  console.log(uppers)
  let str = []
  for (let i = 0; i < uppers.length; i++) {
    str.push(string.slice(uppers[i], uppers[i + 1]))
  }
  return str.join(' ')
}

function count (string) {  
  return string.split('').reduce((a, c) => {
    return a[c] ? a[c]++ : a[c] = 1, a
  }, {})
}

function wave(str){
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
  }
  return arr
}

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j]
    }
  }
}

function sumDigPow(a, b) {
  let arr = [...Array(b - a + 1).keys()].map(e => ((e + a) + '').split(''))
  return arr.filter(e => {
    return e.join('') == e.reduce((a, c, i) => a + c ** (i + 1), 0)
  }).map(e => +e.join(''))
}

String.prototype.camelCase=function(){
  return !this.length ? this.split(' ').join('') : this.trim().split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join('')
}

function queueTime(customers, n) {
  let arr = [...Array(n).fill(0)]
  for (let i = 0; i < customers.length; i++) {
    let shortIndex = arr.indexOf(Math.min(...arr))
    arr[shortIndex] += customers[i]
  }
  return Math.max(...arr)
}

function isValidIP(str) {
  let arr = str.split('.').filter(e => e >= 0 && e <= 255)
  let arr1 = arr.map(e => +e).join('.')
  return arr.length === 4 && str === arr1
}

function titleCase(title, minorWords) {
  let minors = minorWords === undefined ? [] : minorWords.toLowerCase().split(' ')
  console.log(minors)
  return !title ? title : 
    title.split(' ')
      .map((e, i) => {
        return i !== 0 && minors.includes(e.toLowerCase()) ? e.toLowerCase() 
          : e[0].toUpperCase() + e.slice(1).toLowerCase()
        })
      .join(' ')
}

multiplicationTable = function(size) {
  let smallArr = [...Array(size).keys()].map(e => e + 1)
  let largeArr = [...Array(size).fill(smallArr)].map((e, i) => e.map(e => e * (i + 1)))
  return largeArr
}

function encode(string) {
  let vowelStr = 'aeiou'
  return string.split('').map(e => vowelStr.includes(e) ? vowelStr.indexOf(e) + 1 : e).join('')
}

function decode(string) {
  let vowels = {'1' : 'a', '2' : 'e', '3' : 'i', '4' : 'o', '5' : 'u'}
  return string.split('').map(e => vowels[e] ? vowels[e] : e).join('')
}

function diamond(n){
  if (!(n % 2) || n < 0) return null
  let arr = []
  for (let i = 0; i <= (n - 1) / 2; i++) {
    let str = ' '.repeat(((n - 1) / 2) - i) + '*'.repeat(i * 2 + 1)
    arr.push(str)
  }
  let newArr = [...arr]
  for (let i = arr.length - 2; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr.join('\n') + '\n'
}

function encrypt(text, n) {
  if (text === null) return null
  let str = text
  while (n > 0) {
    let evens = []
    let odds = []
    for (let i = 0; i < str.length; i++) {
      !(i % 2) ? evens.push(str[i]) : odds.push(str[i])
    }
    str = odds.concat(evens).join('')
    n--
  }
  return str
}

function decrypt(encryptedText, n) {
  let str = encryptedText
  while (n > 0) {
    let string = ''
    let first = str.slice(0, Math.floor(str.length / 2))
    let last = str.slice(Math.floor(str.length / 2))
    for (let i = 0; i < last.length; i++) {
      string = string + last[i] + (first[i] || '')
    }
    str = string
    n--
  }
  return str
}

function validPhoneNumber(phoneNumber){
  return phoneNumber.length === 14 && phoneNumber[0] === '(' 
    && phoneNumber[4] === ')' && phoneNumber[5] === ' '
    && phoneNumber[9] === '-' && typeof +phoneNumber.slice(1, 4) === 'number'
}

var encryptThis = function(text) {
  console.log(text)
  return arr = text.split(' ').map(e => {
    let first = e.charCodeAt(0)
    let secLast = [e[1], e[e.length - 1]]
    if (e.length <= 2) return first + (e[1] || '')
    return first + secLast[1] + e.slice(2, e.length - 1) + secLast[0]
  }).join(' ')
}

function cleanString(s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') arr.pop()
    else arr.push(s[i])
  }
  return arr.join('')
}

function highestRank(arr){
  let obj = arr.reduce((a, c) => (a[c] ? a[c]++ : a[c] = 1, a), {})
  let max = 1 
  let high = []
  for (let key in obj) {
    if (obj[key] >= max) {
      max = obj[key]
      high.push(key)
    }
  }
  return Math.max(...high.map(e => +e))
}

function whiteBlackAreas(cols, rows) {
  if (cols.length < 2 && rows.length < 2) return [cols[0] * rows[0], 0]
  let evenCols = cols.filter((e, i) => !(i % 2)).reduce((a, c) => a + c)
  let oddCols = cols.filter((e, i) => (i % 2)).reduce((a, c) => a + c)
  let evenRows = rows.filter((e, i) => !(i % 2)).reduce((a, c) => a + c)
  let oddRows = rows.filter((e, i) => (i % 2)).reduce((a, c) => a + c)
  let white = evenCols * evenRows + oddCols * oddRows
  let black = evenCols * oddRows + oddCols * evenRows
  return [white, black]
  
// Following timed out so had to rewrite
//   let white = 0
//   let area = cols.reduce((a, c) => a + c) * rows.reduce((a, c) => a + c)
//   for (let i = 0; i < cols.length; i++) {
//     for (let j = 0; j < rows.length; j++) {
//       if ((!(i % 2) && !(j % 2)) || (i % 2 && j % 2)) white += cols[i] * rows[j]
//     }
//   }
//   return [white, area - white]
}

function assembleString(array){
  if (!array.length) return ''
  let arr = [...Array(array[0].length).fill('#')]
  array.forEach(a => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== '*') arr[i] = a[i]
    }
  })
  return arr.join('')
}

function isbnConverter(isbn) {
  let removeLast = isbn.slice(0, -1)
  let addPrefix = '978-' + removeLast
  let addMults = addPrefix.split('-').join('').split('')
    .map((e, i) => !(i % 2) ? +e : e * 3)
    .reduce((a, c) => a + c, 0)
  let checkDigit = addMults % 10 === 0 ? 0 : 10 - addMults % 10
  let addCheckDigit = addPrefix + `${checkDigit}`
  return addCheckDigit
}

function minPermutation(n) {
  if (n === 0) return n
  let numArr = Math.abs(n).toString().split('')
  let zeros = numArr.filter(e => +e === 0).join('')
  let nonZeros = numArr.filter(e => +e !== 0).sort((a, b) => a - b)
  let numb = `${nonZeros[0]}${zeros}${nonZeros.slice(1).join('')}`
  return n < 0 ? -1 * +numb : +numb
}

function getDay(day, isLeap){
  let months = {1 : 'January', 2 : 'February', 3 : 'March', 4 : 'April', 5 : 'May', 6 : 'June', 7 : 'July', 8 : 'August', 9 : 'September', 10 : 'October', 11 : 'November', 12 : 'December'}
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (isLeap) days[1] = 29
  let currentMonth = 1
  while (day > days[currentMonth - 1]) {
    day -= days[currentMonth - 1]
    currentMonth++
  }
  return `${months[currentMonth]}, ${day}`
}

function removeParentheses(s){
  let str = ''
  let adding = true
  let openParen = 0
  let closeParen = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openParen++
      if (adding) adding = !adding
    } else if (s[i] === ')') {
      closeParen++
      if (openParen === closeParen) adding = !adding
    } else if (adding) str += s[i]
  }
  return str
}

function moreZeros(s){
  let arr = [...new Set(s.split(''))]
  let ascii = arr.map(e => e.charCodeAt())
  let binary = ascii.map(e => e.toString(2))
  let filtered = binary.filter(e => {
    let ones = 0
    let zeros = 0
    for (let i = 0; i < e.length; i++) {
      e[i] === '1' ? ones++ : zeros++
    }
    return zeros > ones
  })
  return filtered.map(e => String.fromCharCode(parseInt(e, 2)))
}

function partsSums(ls) {
  let sum = ls.reduce((a, c) => a + c, 0)
  let arr = [sum]
  for (let i = 0; i < ls.length; i++) {
    sum = sum - ls[i]
    arr.push(sum)
  }
  return arr
}

function revrot(str, sz) {
  if (sz <= 0 || !str.length || sz > str.length) return ''
  let arr = []
  for (let i = 0; i < str.length; i += sz) {
    arr.push(str.slice(i, i + sz))
  }
  return arr.filter(e => e.length === sz).map(e => {
    let splitArr = e.split('')
    if (!(splitArr.reduce((a, c) => a + c ** 3, 0) % 2)) return splitArr.reverse().join('')
    else return e.slice(1) + e[0]
  }).join('')
}

function stockList(l, m){
  if (!l.length || ! m.length) return ''
  let arr = []
  m.forEach(letter => {
    let count = l.filter(e => e[0] === letter).map(e => e.split(' ')[1]).reduce((a, c) => a + +c, 0)
    arr.push(`(${letter} : ${count})`)
  })
  return arr.join(' - ')
}

function thirt(n) {
  let seq = [1, 10, 9, 12, 3, 4]
  let num = n
  let sum = 0
  while (sum !== num) {
    let numArr = num.toString().split('').map(e => +e)
    for (let i = numArr.length - 1; i >= 0; i--) {
      sum += numArr[i] * seq[(numArr.length - 1 - i) % 6]
    }
    if (sum === num) return sum
    else {
      num = sum
      sum = 0
    }
  }
}

function meeting(s) {
  return s.split(';')
    .map(e => `(${e.split(':').reverse().join(', ').toUpperCase()})`)
    .sort()
    .join('')
}

function dataReverse(data) {
  let bytes = []
  for (let i = 0; i < data.length; i += 8) {
    bytes.push(data.slice(i, i + 8))
  }
  return bytes.reverse().reduce((a, c) => a.concat(c), [])
}

function solve(s) {
  let arr = []
  let vowels = 'aeiou'
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i])) str += s[i]
    if (vowels.includes(s[i]) || i === s.length - 1) {
      arr.push(str)
      str = ''
    }
  }
  return Math.max(...arr.map(e => {
    let sum = 0
    for (let i = 0; i < e.length; i++) {
      sum += alph.indexOf(e[i]) + 1
    }
    return sum
  }))
};

function foldArray(array, runs)
{
  let arr = [...array]
  let result = []
  while (runs > 0) {
    for (let i = 0; i <= Math.ceil(arr.length / 2) - 1; i++) {
      i !== arr.length - 1 - i ? result.push(arr[i] + arr[arr.length - 1 - i]) : result.push(arr[i])
    }
    arr = result
    result = []
    runs--
  }
  return arr
}

function streetFighterSelection(fighters, position, moves){
  let arr = []
  moves.forEach(move => {
    if (move === 'up' && position[0] === 1) position[0]--
    else if (move === 'up' && position[0] !== 1) position[0]
    else if (move === 'down' && position[0] === 0) position[0]++
    else if (move === 'down' && position[0] !== 0) position[0]
    else if (move === 'left' && position[1] === 0) position[1] = (fighters[0].length - 1)
    else if (move === 'left') position[1]--
    else if (move === 'right') position[1] = (position[1] + 1) % fighters[0].length 
    arr.push(fighters[position[0]][position[1]])
  })
  return arr
}

function Xbonacci(signature,n){
  if (n < signature.length) return signature.slice(0, n)
  let arr = [...signature]
  for (let i = 1; i <= n - signature.length; i++) {
    arr.push(arr.slice(-signature.length).reduce((a, c) => a + c, 0))
  }
  return arr
}

function upArray(arr){
  console.log(arr)
  if (!arr.every(num => num >= 0 && num <= 9) || !arr.length) return null
  else if (arr.length < 15) {
    let arrNum = +arr.join('')
    arrNum++
    let newArr = arrNum.toString().split('').map(e => +e)
    return newArr
  } 
  else if (arr[arr.length - 1] !== 9){
    arr[arr.length - 1]++
    return arr
  }
  else {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i - 1] !== 9) {
        arr[i] = 0
        arr[i - 1]++
        return arr
      } else {
        arr[i] = 0
      }
    }
  }
}

function dashatize(num) {
  let numStr = Math.abs(num).toString().split('')
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 && numStr[i + 1] % 2) numStr[i] = `-${numStr[i]}`
    else if (numStr[i] % 2) numStr[i] = `-${numStr[i]}-`
  }
  let arr = numStr.join('').split('')
  if (arr[0] === '-') arr.shift()
  if (arr[arr.length - 1] === '-') arr.pop()
  return arr.join('')
}

Array.prototype.square = function() {
  return this.map(e => e ** 2)
}
Array.prototype.cube = function() {
  return this.map(e => e ** 3)
}
Array.prototype.average = function() {
  return this.length ? this.reduce((a, c) => a + c, 0) / this.length : NaN
}
Array.prototype.sum = function() {
  return this.reduce((a, c) => a + c, 0)
}
Array.prototype.even = function() {
  return this.filter(e => !(e % 2))
}
Array.prototype.odd = function() {
  return this.filter(e => e % 2)
}

function presses(phrase) {
  let keypad = [['1'], ['A','B','C','2'], ['D','E','F','3'],
                ['G','H','I','4'], ['J','K','L','5'], ['M','N','O','6'],
                ['P','Q','R','S','7'], ['T','U','V','8'], ['W','X','Y','Z','9'],
                ['*'], [' ','0'], ['#']]
  let sum = 0
  for (let i = 0; i < phrase.length; i++) {
    let arrIndex
    for (let j = 0; j < keypad.length; j++) {
      if (keypad[j].includes(phrase[i].toUpperCase())) {
        arrIndex = j
        break
      }
    }
    sum += keypad[arrIndex].indexOf(phrase[i].toUpperCase()) + 1
  }
  return sum
}

function kebabize(str) {
  console.log(str)
  let arr = str.split('').filter(e => !'0123456789'.includes(e))
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) arr[i] = `-${arr[i].toLowerCase()}`
  }
  return arr.join('')[0] === '-' ? arr.join('').slice(1) : arr.join('')
}

longestPalindrome=function(s){
  let arrRev = s.split('').reverse()
  let len = s.length
  for (let i = len; i >= 0; i--) {
    for (let j = 0; j <= len - i; j++) {
      if (s.slice(j, j + i) === arrRev.slice(len - i - j, len - j).join('')) return i
    }
  }
}

function stat(strg) {
  if (!strg.length) return ''
  let arr = strg.split(', ').map(e => e.split('|')).map(arr => arr[0] * 3600 + arr[1] * 60 + +arr[2])
  let sorted = arr.sort((a, b) => a - b)
  let len = arr.length
  let range = Math.max(...arr) - Math.min(...arr),
      average = arr.reduce((a, c) => a + c, 0) / len, 
      median = len % 2 ? sorted[Math.floor(len / 2)] :
                (sorted[len / 2] + sorted[len / 2 - 1]) / 2
  let values = [range, average, median].map(val => {
    let hours = Math.floor(val / 3600)
    val = val % 3600
    let mins = Math.floor(val / 60)
    let secs = Math.floor(val % 60)
    return `${String(hours).padStart(2, '0')}|${String(mins).padStart(2, '0')}|${String(secs).padStart(2, '0')}`
  })
  return `Range: ${values[0]} Average: ${values[1]} Median: ${values[2]}`
}


function to_nato(words) {
  console.log(words)
	let arr = words.toLowerCase().split('').filter(e => e !== ' ')
  let converted = arr.map(e => NATO[e] || e)
  return converted.join(' ')
}

function reverse(str){
  return str.trim().split(' ').map((e, i) => i % 2 ? e.split('').reverse().join('') : e).join(' ')
}

function mazeRunner(maze, directions) {
  console.log(maze, directions)
  let posX, posY
  for (let i = 0; i < maze.length; i++) {
    if (maze[i].includes(2)) posY = i
  }
  posX = maze[posY].indexOf(2)
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === 'N') posY--
    if (directions[i] === 'S') posY++
    if (directions[i] === 'E') posX++
    if (directions[i] === 'W') posX--
    if (posY < 0 || posY > maze.length - 1 || posX < 0 || posX > maze.length - 1 || maze[posY][posX] === 1) return 'Dead'
    else if (maze[posY][posX] == 3) return 'Finish'
  }
  return 'Lost'
}

function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays) 
  if (!Array.isArray(arrayOfArrays) || !arrayOfArrays.length || arrayOfArrays.includes(null)) return 0
  let lengths = arrayOfArrays.map(e => e.length).sort((a, b) => a - b)
  if (lengths.includes(0)) return 0
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) return lengths[i] + 1
  }
}

function decipherThis(str) {
  let arr = str.split(' ')
  let first = arr.map(e => {
    let num = ''
    let letters = ''
    for (let i = 0; i < e.length; i++) {
      if ('0123456789'.includes(e[i])) num += e[i]
      else letters += e[i]
    }
    let firstLetter = String.fromCharCode(+num)
    let secondLetter = letters.length ? letters[0] : ''
    let lastLetter = letters.length > 1 ? letters[letters.length - 1] : ''
    return firstLetter + lastLetter + letters.slice(1, letters.length - 1) + secondLetter
  })
  return first.join(' ')
}; 

function getOrder(input) {
  let menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
  let arr = []
  let str = ''
  for (let i = 0; i < input.length; i++) {
    str += input[i]
    if (menu.includes(str)) {
      arr.push([str, menu.indexOf(str) + 1])
      str = ''
    }
  }
  return arr.sort((a, b) => a[1] - b[1]).map(e => e[0][0].toUpperCase() + e[0].slice(1)).join(' ')
}

function matrixAddition(a, b){
  let arr = []
  for (let i = 0; i < a.length; i++) {
    let insideArr = []
    for (let j = 0; j < a[0].length; j++) {
      insideArr.push(a[i][j] + b[i][j])
    }
    arr.push(insideArr)
  }
  return arr
}

function longestRepetition(s) {
  console.log(s)
  if (!s.length) return ['', 0]
  let char
  let longest = 0
  let str = s[0]
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      str += s[i]
      if (str.length > longest) {
        longest = str.length
        char = s[i - 1]
      }
    }
    else {
      if (str.length > longest) {
        longest = str.length
        char = s[i - 1]
        str = s[i]
      } else {
        str = s[i]
      }
    }
  }
  return [char,longest]
}

class FileNameExtractor {
  static extractFileName (dirtyFileName) {
      let under = dirtyFileName.indexOf('_')
      let dot = dirtyFileName.lastIndexOf('.')
      return dirtyFileName.slice(under + 1, dot)
  }
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let temp = head, count = 0
  while (temp !== null) {
    count++
    temp = temp.next
  }
  return count
}

function count(head, data) {
  let temp = head, count = 0
  while (temp !== null) {
    console.log(temp)
    if (temp.data == data) count++
    temp = temp.next
  }
  return count
}

var countDeafRats = function(town) {
  let arr = []
  let str = ''
  for (let i = 0; i < town.length; i++) {
    if (town[i] === 'P') arr.push('P')
    else if (town[i] === '~' || town[i] === 'O') {
      str += town[i]
      if (str.length === 2) {
        arr.push(str)
        str = ''
      }
    }
  }
  let mapped = arr.map(e => e === 'O~' ? 'L' : e === '~O' ? 'R' : e)
  let piper = mapped.indexOf('P')
  let filtered = mapped.filter((e, i) => (e === 'R' && piper < i) || (e === 'L' && piper > i))
  return filtered.length
}

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let car = startPriceOld, has = car, needs = startPriceNew, month = 0, loss = percentLossByMonth
  while (has < needs) {
    month++
    loss = Math.floor(month / 2) * 0.5 + percentLossByMonth
    car = car * (1 - loss / 100)
    has = car + savingperMonth * month
    needs = needs * (1 - loss / 100)
  }
  return [month, Math.round(has - needs)]
}

function createFunctions(n) {
  var callbacks = [];

  for (var i=0; i<n; i++) {
    let j = i
    callbacks.push(function() {
      return j;
    });
  }
  return callbacks;
}

function ipToInt32(ip){
  return arr = parseInt(ip.split('.')
                        .map(e => (+e).toString(2)
                        .padStart(8, '0'))
                        .join(''), 2)
}

function beggars(values, n){
  let begArr = [...Array(n).fill(0)]
  for (let i = 0; i < values.length; i++) {
    begArr[i % n] += values[i]
  }
  return begArr
}

sortme = function( names ){

  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
}

function balance(left,right){
  let leftTotal = left.split('').reduce((a, c) => a + (c === '!' ? 2 : 3), 0)
  let rightTotal = right.split('').reduce((a, c) => a + (c === '!' ? 2 : 3), 0)
  return leftTotal > rightTotal ? 'Left' : leftTotal < rightTotal ? 'Right' : 'Balance'
}

function bingo(ticket, win){
  let wins = 0
  for (let i = 0; i < ticket.length; i++) {
    for (let j = 0; j < ticket[i][0].length; j++) {
      if (ticket[i][0].charCodeAt(j) === ticket[i][1]) {
        wins++
        break
      }
    }
  }
  return wins >= win ? 'Winner!' : 'Loser!'
}

function isPrime(x) {
  for (let i = 2; i <= x / 2; i++) {
    if (!(x % i)) return false
  }
  return true
}

function step(g, m, n) {
  for (let i = m; i <= n; i++) {
    if (isPrime(i) && isPrime(i + g)) return [i, i + g]
  }
  return null
}

function twosDifference(input){
  let arr = input.sort((a, b) => a - b)
  let returnArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + 2)) returnArr.push([arr[i], arr[i] + 2])
  }
   return returnArr
 }

 function isIntArray(arr) {
  if (Array.isArray(arr) && (arr.length === 0 || arr.every(i => Number.isInteger(i)))) return true
  return false;
}

function partlist(arr) {
  let returnArr = []
  for (let i = 1; i < arr.length; i++) {
    returnArr.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
  }
return returnArr
}

function probability(length, num){
  let start = length === 1 ? 0 : +('1' + [...Array(length - 1).fill(0)].join(''))
  let end = +[...Array(length).fill(9)].join('')
  let totalNums =  end - start + 1
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!(i % num)) {
      count++
      i += num - 1
    }
  }
  return count / totalNums * 100
}

let hypertensive = function(patients) {
  patients = patients.map(e => e.map(a => a.split('/')))
  let count = 0
  for (let i = 0; i < patients.length; i++) {
    if (patients[i].some(e => e[0] >= 180 && e[1] >= 110)) count++
    else if (patients[i].length < 2) continue
    else {
      let sys = 0
      let dia = 0
      for (let j = 0; j < patients[i].length; j++) {
        sys += +patients[i][j][0]
        dia += +patients[i][j][1]
      }
      if (sys / patients[i].length >= 140 || dia / patients[i].length >= 90) count++
    }
  }
  return count
}

function getBestCombination(time) {
  console.log(time)
  let one = time <= 60 ? time + '' : `${Math.floor(time / 60)}${(time % 60).toString().padStart(2, '0')}`
  let oneDigits = one.split('').filter((e, i, arr) => {return i === 0 || e !== arr[i - 1]})
  let mins = Math.floor(((Math.floor(time / 100)) * 100) / 60)
  let secs = time - ((Math.floor(((Math.floor(time / 100)) * 100) / 60)) * 60)
  if (secs > 99) {
    mins++
    secs -= 60
  } else if (secs < 40) {
    mins--
    secs += 60
  }
  let two = time <= 99 ? time + '' : `${mins}${(secs).toString().padStart(2, '0')}`
  let twoDigits = two.split('').filter((e, i, arr) => {return i === 0 || e !== arr[i - 1]})
  console.log(one, two, oneDigits, twoDigits)
  return oneDigits.length < twoDigits.length ? one : 
    oneDigits.length > twoDigits.length ? two :
    two.length < one.length ? two : one
}

function swap(s, n){
  let bin = n.toString(2)
  let len = bin.length
  let str = ''
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (!('abcdefghijklmnopqrstuvwxyz'.includes(s[i].toLowerCase()))) {
      str += s[i] 
      count++
    }
    else if (+bin[(i - count) % len] === 1 && s[i] === s[i].toLowerCase()) str += s[i].toUpperCase()
    else if (+bin[(i - count) % len] === 1 && s[i] === s[i].toUpperCase()) str += s[i].toLowerCase()
    else str += s[i]
  }
  return str
}

function pillCount(prob) {
  let returnArr = []
  for (let i = 0; i < prob.length; i++) {
    let id = prob[i][0]
    let firstDay = new Date(prob[i][3])
    let lastDay = new Date(prob[i][2])
    let days = (firstDay.getTime() - lastDay.getTime()) / (1000 * 60 * 60 * 24) + 1
    let hours = days * 24
    let ok = true
    for (let j = 0; j < prob[i][1].length; j++) {
      let pillsTaken = prob[i][1][j][1] - prob[i][1][j][2]
      let timesPerDay = 24 / (prob[i][1][j][3][8] === '6' ? 6 : prob[i][1][j][3][8] === '1' ? 12 : 24)
      let pillsAllowed = +prob[i][1][j][3][0] * timesPerDay * days
      if (pillsTaken > pillsAllowed) {
        ok = false
        break
      }
    }
    if (ok) returnArr.push(`The pill count is good for Probationer #${id}`)
    else returnArr.push(`Probationer #${id} took too many of their pills!`)
  }
  return returnArr
}

function numPrimorial(n){
  let total = 2
  let num = 3
  while (n > 1) {
    let prime = true
    for (let i = 2; i < num; i++) {
      if (!(num % i)) {
        prime = false
        break
      }
    }
    if (prime) {
      total *= num
      num++
      n--
    } else {
      num++
    }
  }
  return total
}

function sortTheInnerContent(words){
  console.log(words)
  return words.split(' ').map(e => {
    return e.length <= 3 ? e :
      e[0] + e.slice(1, e.length - 1).split('').sort().reverse().join('') + e[e.length - 1]
  }).join(' ')
}

function findChildren(dancingBrigade) {
	let upper = []
  let lower = []
  for (let i = 0; i < dancingBrigade.length; i++) {
    if (dancingBrigade[i] === dancingBrigade[i].toLowerCase()) lower.push(dancingBrigade[i])
    else upper.push(dancingBrigade[i])
  }
  upper = upper.sort()
  lower = lower.sort()
  let str = ''
  for (let i = 0; i < upper.length; i++) {
    str += upper[i]
    for (let j = 0; j < lower.length; j++) {
      if (lower[j] === upper[i].toLowerCase()) str += lower[j]
    }
  }
  return str
}

function travel(r, zipcode) {
  r = r.split(',').filter(e => e.slice(-zipcode.length) === zipcode)
  let streets = []
  let nums = []
  for (let i = 0; i < r.length; i++) {
    let space = r[i].indexOf(' ')
    nums.push(r[i].slice(0, space))
    streets.push(r[i].slice(space + 1, -zipcode.length - 1))
  }
  return `${zipcode}:${streets.join(',')}/${nums.join(',')}`
}

function swap(l) {
  if (l === l.toLowerCase()) return l.toUpperCase()
  else return l.toLowerCase()
}
function stringTransformer(str) {
return str.split(' ').map(e => e.split('')).map(e => e.map(l => swap(l)).join('')).reverse().join(' ')
}

function rank(st, we, n) {
  if (st.length === 0) return 'No participants'
  if (n > st.split(',').length) return 'Not enough participants'
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  st = st.split(',')
    .map((e, i) => [e, (e.length + e.split('').reduce((a, c) => a + (alph.indexOf(c.toLowerCase()) + 1), 0)) * we[i]])
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  return st[n - 1][0]
}

function findSenior(list) {
  list = list.sort((a, b) => b.age - a.age)
  let maxAge = list[0].age
  let ret = [list[0]]
  for (let i = 1; i < list.length; i++) {
    if (list[i].age === maxAge) ret.push(list[i])
    else break
  }
  return ret
}

function looseChange(cents){
  let money = cents <= 0 ? 0 : Math.floor(cents)
  let quarters = Math.floor(money / 25)
  money = money % 25
  let dimes = Math.floor(money / 10)
  money = money % 10
  let nickels = Math.floor(money / 5)
  let pennies = money % 5
  return {'Nickels' : nickels, 'Pennies' : pennies, 'Dimes' : dimes, 'Quarters' : quarters}
}

function allContinents(list) {
  let conts = []
  for (let i = 0; i < list.length; i++) {
    if (!(conts.includes(list[i].continent))) conts.push(list[i].continent)
  }
  return conts.length === 5
}

function autocomplete(input, dictionary){
  let start = input.split('').filter(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e.toLowerCase())).join('')
  let arr = []
  for (let i = 0; i < dictionary.length; i++) {
    if (arr.length === 5) return arr
    if (start === dictionary[i].toLowerCase().slice(0, start.length)) arr.push(dictionary[i])
  }
  return arr
}

function letterCount(s){
  return s.split('').reduce((a, c) => {return a[c] ? a[c]++ : a[c] = 1, a}, {})
}

//Not finalized
function add(x, y)
{
  if (x >= 0 && y >= 0) return [...new Array(x).fill(1)].concat([...new Array(y).fill(1)]).length
  else if (x < 0 && y < 0) return ([...new Array(Math.abs(x)).fill(1)].concat([...new Array(Math.abs(y)).fill(1)]).length) * Math.sign(x) 
  else {
    let arr = [...new Array(Math.max(Math.abs(x), Math.abs(y))).fill(1)]
    arr.splice(0, Math.min(Math.abs(x), Math.abs(y)))
    return (Math.abs(x) > y || Math.abs(y) > x) ? arr.length * Math.sign(Math.min(x, y)) : arr.length
  }    
}

function solution(n){
  return Math.round(n * 2) / 2
}

function simpleTransposition(text) {
  let row1 = []
  let row2 = []
  for (let i = 0; i < text.length; i++) {
    if (!(i % 2)) row1.push(text[i])
    else row2.push(text[i])
  }
  return row1.concat(row2).join('')
}

function findOddNames(list) {
  console.log(list)
  return list.filter(e => {
    return e.firstName.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 2
  })
}

function mean(town, strng) {
  let dataArr = strng.split('\n')
    .map(e => {
      return [e.slice(0, e.indexOf(':')), 
              e.slice(e.indexOf(':') + 1).split(',').map(e => e.split(' '))]
    })
  let cityIndex = dataArr.map(e => e[0]).indexOf(town)
  if (cityIndex === -1) return -1
  let avg = dataArr[cityIndex][1].map(e => +e[1]).reduce((a, c) => a + c) / 12
  return avg
}
function variance(town, strng) {
  let dataArr = strng.split('\n')
    .map(e => {
      return [e.slice(0, e.indexOf(':')), 
              e.slice(e.indexOf(':') + 1).split(',').map(e => e.split(' '))]
    })
  let cityIndex = dataArr.map(e => e[0]).indexOf(town)
  if (cityIndex === -1) return -1
  let avg = mean(town, strng)
  let variance = dataArr[cityIndex][1].map(e => +e[1]).map(e => (e - avg) ** 2).reduce((a, c) => a + c, 0) / 12
  return variance
}

function isAgeDiverse(list) {
  list = list.map(e => e.age)
  let diverse = true
  for (let i = 10; i <= 100; i += 10) {
    let filteredList
    if (i === 100) filteredList = list.filter(e => e >= i)
    else filteredList = list.filter(e => e >= i && e <= i + 9)
    if (filteredList.length === 0) {
      diverse = false
      break
    }
  }
  return diverse 
}

function maxBall(v0) {
  let vInMetersPerSec = v0 * (1 / 60) * (1 / 60) * 1000
  let previousHeight = 0
  for (let i = 1; i < 1000; i++) {
    let height = vInMetersPerSec * (i / 10) - .5 * 9.81 * (i / 10) * (i / 10)
    if (height > previousHeight) previousHeight = height
    else {
      return i - 1
      break
    }
  }
}

function isPrime(num) {
  let prime = true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false
      break
    }
  }
  return prime
}

function minimumNumber(numbers){
  let currentSum = numbers.reduce((a, c) => a + c, 0)
  let nextPrime = currentSum
  while (!isPrime(nextPrime)) {
      nextPrime++
  }
  return nextPrime - currentSum
}

function rot(strng) {
  let arr = strng.split('\n').reverse().map(e => e.split('').reverse().join('')).join('\n')
  return arr
}
function selfieAndRot(strng) {
  let arr = strng.split('\n')
  let dots = '.'.repeat(arr[0].length)
  arr = arr.join(dots + '\n')
  let reverseArr = strng.split('\n').reverse().map(e => e.split('').reverse().join('')).join('\n' + dots)
  return arr + dots + '\n' + dots + reverseArr
}
function oper(fct, s) {
  return fct(s)
}

function alphabetWar(fight){
  let points = fight.split('').filter((e, i, a) => {
    return e !== '*' && a[i - 1] !== '*' && a[i + 1] !== '*'
  }).reduce((a, c) => {
    return c === 'w' ? a[0] += 4 : c === 'p' ? a[0] += 3 : c === 'b' ? a[0] += 2 : 
    c === 's' ? a[0]++ : c === 'm' ? a[1] += 4 : c === 'q' ? a[1] += 3 : 
    c === 'd' ? a[1] += 2 : c === 'z' ? a[1]++ : a[0], a
  }, [0, 0])
  return points[0] > points[1] ? 'Left side wins!' : 
    points[0] < points[1] ? 'Right side wins!' : 
    'Let\'s fight again!'
}

function binaryToString(binary) {
  let bin = []
  for (let i = 0; i < binary.length; i += 8) {
    bin.push(binary.slice(i, i + 8))
  }
  bin = bin.map(e => String.fromCharCode(parseInt(e, 2)))
  return bin.join('')
}

function deepCount(arr) {
  let len = arr.length
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) len += deepCount(arr[i])
  }
  return len
}

function compose(f,g) {
  return (...args) => f(g(...args))
}

function game(n) {
  return n**2/2 % 1 === 0 ? [n**2/2] : [n**2, 2]
}

function fruit(reels, spins){
  let one = reels[0][spins[0]]
  let two = reels[1][spins[1]]
  let three = reels[2][spins[2]]
  let scores = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild']
  if (one === two && two === three) return (scores.indexOf(one) + 1) * 10
  else if (one !== two && one !== three && two !== three) return 0
  else if (one === two) {
    if (three === 'Wild') return (scores.indexOf(one) + 1) * 2
    else return scores.indexOf(one) + 1
  }
  else if (one === three) {
    if (two === 'Wild') return (scores.indexOf(one) + 1) * 2
    else return scores.indexOf(one) + 1
  }  
  else if (three === two) {
    if (one === 'Wild') return (scores.indexOf(two) + 1) * 2
    else return scores.indexOf(two) + 1
  }
}

function WhatIsTheTime(timeInMirror){
  let time = timeInMirror.split(':')
  let hour = 11 - time[0] % 12 === 0 ? 12 : 11 - time[0] % 12
  let minute = (60 - time[1]) % 60
  if (minute === 0) hour++
  return [hour, minute].map(e => e.toString().padStart(2, '0')).join(':')
}

function computeDepth (x){
  let depth = 0
  let digits = []
  while (digits.length < 10) {
    depth++
    let value = (x * depth).toString()
    for (let i = 0; i < value.length; i++) {
      if (!digits.includes(value[i])) digits.push(value[i])
    }
  }
  return depth
}

function blackOrWhiteKey(keyPressCount) {
  let keys = [1,2,1,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,2,1,1]
  let stop = keys[(keyPressCount - 1) % 88]
  return stop === 1 ? 'white' : 'black'
}

function highlight(code) {
  let str = ''
  let char = ''
  for (let i = 0; i < code.length; i++) {
    if (i !== code.length - 1 && (code[i] === code[i + 1] || '0123456789'.includes(code[i]) && '0123456789'.includes(code[i + 1]))) char += code[i]
    else {
      char += code[i]
      if (code[i] === 'F') str += `<span style="color: pink">${char}</span>`
      else if (code[i] === 'L') str += `<span style="color: red">${char}</span>`
      else if (code[i] === 'R') str += `<span style="color: green">${char}</span>`
      else if ('0123456789'.includes(code[i])) str += `<span style="color: orange">${char}</span>`
      else str += char
      char = ''
    }
  }
  return str
}

function sumFracts(l) {
  if (!l.length) return null
  let commondenom = l.map(e => e[1]).reduce((a, c) => a * c, 1)
  let num = l.map(e => e[0] * commondenom / e[1]).reduce((a, c) => a + c, 0)
  if (num / commondenom % 1 === 0) return num / commondenom
  else {
    return reduce([num, commondenom])
  }
}

function reduce([a, b]) {
  let num = a
  let denom = b
  for (let i = 2; i < Math.min(a, b); i++) {
    while (num % i === 0 && denom % i === 0) {
      num /= i
      denom /= i
    }
  }
  return [num, denom]
}

function lowestProduct(input) { 
  if (input.length < 4) return 'Number is too small'
  let prod = input.split('').slice(0, 4).reduce((a, c) => a * c, 1)
  for (let i = 1; i < input.length - 3; i++) {
    let slice = input.split('').slice(i, i + 4).reduce((a, c) => a * +c, 1)
    if (slice < prod) prod = slice
  }
  return prod
}

function isLanguageDiverse(list) {
  let langs = Object.values(list.reduce((a, c) => {
    a[c.language] ? a[c.language]++ : a[c.language] = 1
    return a
  }, {})).sort((a, b) => b - a)
  for (let i = 0; i < langs.length; i++) {
    let num = langs[i]
    let rest = langs.filter((e, ind) => ind !== i)
    for (let j = 0; j < rest.length; j++) {
      if (num > rest[j] * 2) return false
    }
  }
  return true
}

function rotate(str){
  let arr = []
  for (let i = 1; i < str.length; i++) {
    arr.push(str.slice(i) + str.slice(0, i))
  }
  if (str) arr.push(str)
  return arr
}

function addUsername(list) {
  list.forEach (person => {
    let date = new Date
    person.username = `${person['firstName'].toLowerCase()}${person['lastName'][0].toLowerCase()}${date.getFullYear() - person.age}`
  })
  return list
}

var whatTimeIsIt = function(angle) {
  let ratio = angle / 360 * 12
  let hour = Math.floor(ratio % 12).toString().padStart(2, '0')
  let minute = Math.floor(angle % 30 / 30 * 60).toString().padStart(2, '0')
  return `${hour === '00' ? '12' : hour}:${minute}`
}

String.prototype.ipv4Address=function(){
  let arr = this.split('.')
  if (arr.length === 4 &&
     arr.every(e => +e >= 0 && +e <= 255) &&
     arr.every(e => e === (+e).toString())) return true
  return false
}

function mostFrequentDays(year){
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  let feb = new Date(year, 2, 0).getDate();
  if (feb === 28) {
    let date = new Date(`January 1, ${year}`).getDay()
    if (date === 0) date = 7
    return [days[date - 1]]
  }
  else {
    let first = new Date(`January 1, ${year}`).getDay()
    if (first === 0) first = 7
    let second = new Date(`January 2, ${year}`).getDay()
    if (second === 0) second = 7
    if (first > second) [first, second] = [second, first]
    return [days[first - 1], days[second - 1]]
  }
}

var Harshad = ( function() {
  'use strict';
  return {
    isValid: function( number ) {
      return number % number.toString().split('').reduce((a, c) => a + +c, 0) === 0
    },
    
    getNext: function( number ) {
      number++
      while (number % number.toString().split('').reduce((a, c) => a + +c, 0) !== 0) {
        number++
      }
      return number
    },
    
    getSerie: function( count, start = 0) {
      let arr = []
      for (let i = start + 1; ; i++) {
        if (arr.length === count) break
        else if (i % i.toString().split('').reduce((a, c) => a + +c, 0) === 0) arr.push(i)
      }
      return arr
    }
  };

} () );

var numberFormat = function (number) {
  let arr = []
  let rev = number.toString().split('').reverse().join('')
  for (let i = 0; i < rev.length; i += 3) {
    arr.unshift(rev.slice(i, i + 3))
  }
  arr = arr.map(e => e.split('').reverse().join(''))
  return arr[0] === '-' ? `-${arr.slice(1).join(',')}` : arr.join(',')
};

function parseHTMLColor(color) {
  if (color[0] !== '#') color = PRESET_COLORS[color.toLowerCase()]
  color = color.slice(1)
  if (color.length === 3) color = color.split('').map(e => e.repeat(2)).join('')
  let rgb = []
  for (let i = 0; i < color.length; i += 2) {
    rgb.push(parseInt(color.slice(i, i + 2), 16))
  }
  return {r : rgb[0], g : rgb[1], b : rgb[2]}
}

function meeting(x, need){
  if (need === 0) return 'Game On'
  let chairs = x.map(e => e[1] >= e[0].length ? e[1] - e[0].length : 0)
  if (chairs.reduce((a, c) => a + c, 0) < need) return 'Not enough!'
  let rooms = []
  for (let i = 0; i < chairs.length; i++) {
    let total = rooms.reduce((a, c) => a + c, 0)
    if (total === need) return rooms
    else if (total + chairs[i] > need) rooms.push(need - total)
    else rooms.push(chairs[i])
  }
  return rooms
}

function arrange(strng) {
  let arr = strng.split(' ')
  for (let i = 0; i < arr.length - 1; i++) {
    if ((i % 2 === 0 && arr[i].length > arr[i + 1].length) || (i % 2 && arr[i].length < arr[i + 1].length)) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
  return arr.map((e, i) => i % 2 ? e.toUpperCase() : e.toLowerCase()).join(' ')
}

function shortestStepsToNum(num) {
  let count = 0
  while (num !== 1) {
    if (num % 2) {
      count++
      num -= 1
    } else {
      count++
      num /= 2
    }
  }
  return count
}

function nameInStr(str, name){
  let lowerStr = str.toLowerCase()
  let lowerName = name.toLowerCase()
  for (let i = 0; i < lowerName.length; i++) {
    let index = lowerStr.indexOf(lowerName[i])
    if (index === -1) return false
    lowerStr = lowerStr.slice(index + 1)
  }
  return true
}

function catalog(s, article) {
  let items = s.split('\n').filter(e => e.includes(article))
  if (!items.length) return 'Nothing'
  return items.map(e => {
    let name = e.slice(e.indexOf('<name>') + 6, e.indexOf('</name>'))
    let price = `$${e.slice(e.indexOf('<prx>') + 5, e.indexOf('</prx'))}`
    let qty = e.slice(e.indexOf('<qty>') + 5, e.indexOf('</qty>'))
    return `${name} > prx: ${price} qty: ${qty}`
  }).join('\r\n')
}

function askForMissingDetails(list) {
  let arr = list.filter(e => Object.values(e).includes(null))
  arr.forEach(person => {
    let missing = Object.entries(person).filter(e => e[1] === null)[0][0]
    person.question = `Hi, could you please provide your ${missing}.`
  })
  return arr
}

function ascendDescend(length, minimum, maximum) {
  if (maximum < minimum || length === 0) return ''
  if (maximum === minimum) return minimum.toString().repeat(length)
  let str = [minimum]
  let increase = true
  while (str.join('').length < length) {
    if (str[str.length - 1] === minimum) {
      str.push(str[str.length - 1] + 1)
      increase = true
    } else if (str[str.length - 1] === maximum) {
      str.push(str[str.length - 1] - 1)
      increase = false
    } else if (str[str.length - 1] !== maximum && increase) str.push(str[str.length - 1] + 1)
    else if (str[str.length - 1] !== maximum && !increase) str.push(str[str.length - 1] - 1)
  }
  return str.join('').slice(0, length)
}


const solution = mtrx => {
  let arrow, x
  for (let i = 0; i < mtrx.length; i++) {
    if (mtrx[i].indexOf('x') !== -1) x = [i, mtrx[i].indexOf('x')]
    if (mtrx[i].indexOf('^') !== -1) arrow = [i, mtrx[i].indexOf('^'), '^']
    if (mtrx[i].indexOf('>') !== -1) arrow = [i, mtrx[i].indexOf('>'), '>']
    if (mtrx[i].indexOf('v') !== -1) arrow = [i, mtrx[i].indexOf('v'), 'v']
    if (mtrx[i].indexOf('<') !== -1) arrow = [i, mtrx[i].indexOf('<'), '<']
  }
  if ((arrow[2] === '^' && arrow[1] === x[1] && arrow[0] > x[0]) ||
      (arrow[2] === '>' && arrow[0] === x[0] && arrow[1] < x[1]) ||
      (arrow[2] === 'v' && arrow[1] === x[1] && arrow[0] < x[0]) ||
      (arrow[2] === '<' && arrow[0] === x[0] && arrow[1] > x[1])) return true
  return false
 }

 function sortByBit(arr) {
  return arr.sort((a, b) => {
    return a.toString(2).split('').filter(e => e === '1').length - b.toString(2).split('').filter(e => e === '1').length || a - b
  })
}

function generateName(){
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let str = `${chars[random()]}${chars[random()]}${chars[random()]}${chars[random()]}${chars[random()]}${chars[random()]}`
  return str
}

function random() {
  return Math.floor(Math.random() * 62)
}

function recycle(array) {
  return [array.filter(e => e.material === 'paper' || e.secondMaterial === 'paper').map(e => e.type), 
          array.filter(e => e.material === 'glass' || e.secondMaterial === 'glass').map(e => e.type),
          array.filter(e => e.material === 'organic' || e.secondMaterial === 'organic').map(e => e.type),
          array.filter(e => e.material === 'plastic' || e.secondMaterial === 'plastic').map(e => e.type)]
}

var fizzBuzzCustom = function(stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) {
  return [...new Array(100).keys()].map(e => e + 1)
           .map(e => !(e % numOne) && !(e % numTwo) ? stringOne + stringTwo : !(e % numOne) ? stringOne : !(e % numTwo) ? stringTwo : e)
};

var findInArray = function(array, iterator) {
  for (let i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) return i
  }
  return -1
};

function makeSentence(parts) {
  return parts.reduce((a, c) => c === ',' ? a += c : c === '.' ? a : a += ` ${c}`, '').trim() + '.'
}

function validPass(password){
  return (password.length > 3 &&
          password.length < 20 && 
          password.split('').every(e => 'abcdefghijklmnopqrstuvwxyz1234567890'.includes(e.toLowerCase())) && 
          password.split('').some(e => '0123456789'.includes(e)) &&
          password.split('').some(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e))) ?
          'VALID' : 'INVALID'
}

function findTheBall(start, swaps) {
  let loc = start
  for (let i = 0; i < swaps.length; i++) {
    if (swaps[i].includes(loc)) loc = swaps[i][1 - swaps[i].indexOf(loc)]
  }
  return loc
}

function fridayTheThirteenths(start, end = start) {
  let dates = []
  for (let i = start; i <= end; i++) {
    for (let j = 0; j <= 11; j++) {
      if ((new Date(i, j, 13)).getDay() === 5) dates.push(`${j + 1}/13/${i}`)
    }
  }
  return dates.join(' ')
}

var Converter = {
  toAscii: function (hex) {
    let str = ''
    for (let i = 0; i < hex.length; i += 2) {
      str += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16))
    }
    return str
  },
  toHex: function (ascii) {
    return ascii.split('').map((e, i) => (+ascii.charCodeAt(i)).toString(16)).join('')
  }
}

function lenCurve(n) {
  let len = 0
  for (let i = 0; i < n; i++) {
    let x = i * (1/n)
    len += Math.sqrt((1/n) ** 2 + ((x + 1/n) ** 2 - x ** 2) ** 2)
  }
  return len
}

function posAverage(s) {
  let arr = s.split(', ')
  let totalPos = ((arr.length * (arr.length - 1)) / 2) * arr[0].length
  let common = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let one = arr[i]
      let two = arr[j]
      for (let k = 0; k < one.length; k++) {
        if (one[k] === two[k]) common++
      }
    }
  }
  return common / totalPos * 100
}

function permuteAPalindrome (input) { 
  let count = input.split('').reduce((a, c) => {a[c] ? a[c]++ : a[c] = 1; return a}, {})
  if (input.length % 2 === 0 && Object.values(count).every(e => e % 2 === 0)) return true
  else if (input.length % 2 && Object.values(count).filter(e => e % 2).length === 1) return true
  return false
}

function changer(str) { 
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let vowels = 'aeiou'
  return str.split('')
    .map(e => alph.includes(e.toLowerCase()) ? e = alph[(alph.indexOf(e.toLowerCase()) + 1) % 26] : e)
    .map(e => vowels.includes(e) ? e.toUpperCase() : e)
    .join('')
}

function longest(str) {
  let sub = str[0]
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < str.length - 1; i++) {
    let s = str[i]
    for (let j = i + 1; j < str.length; j++) {
      if (alph.indexOf(str[j]) >= alph.indexOf(s[s.length - 1])) s += str[j]
      else break
    }
    if (s.length > sub.length) sub = s
  }
  return sub
}

function stringBreakers(n, string){
  string = string.split(' ').join('')
  let arr = []
  for (let i = 0; i < string.length; i += n) {
    arr.push(string.slice(i, i + n))
  }
  return arr.join('\n')
}

function stringExpansion(s) {
  let str = ''
  let num = 1
  for (let i = 0; i < s.length; i++) {
    if ('0123456789'.includes(s[i])) num = +s[i]
    else str += s[i].repeat(num)
  }
  return str
}

function nextHigher(n) {
  let bits = n.toString(2).split('').filter(e => e === '1').length
  for (let i = n + 1; ; i++) {
    if (i.toString(2).split('').filter(e => e === '1').length === bits) return i
  }
}

function group(arr) {
  return arr.reduce((a, c) => {return a.map(e => e[0]).includes(c) ? a[a.map(e => e[0]).indexOf(c)].push(c) : a.push([c]), a}, [])
}

function divisibleCount(x, y, k) {
  return Math.floor(y / k) - Math.floor((x - 1) / k)
}

function mirror(text){
  let arr = text.split(' ').map(e => ` ${e.split('').reverse().join('')} `)
  let lineLength = Math.max(...arr.map(e => e.length))
  arr = arr.map(e => e.length < lineLength ? `*${e.padEnd(lineLength, ' ')}*` : `*${e}*`)
  arr.push('*'.repeat(lineLength + 2))
  arr.unshift('*'.repeat(lineLength + 2))
  return arr.join('\n')
}

function total(arr){
  return arr.filter((e, i) => isPrime(i)).reduce((a, c) => a + c, 0)
};

function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}

function countAdjacentPairs(searchString) {
  let count = 0
  let arr = searchString.split(' ').map(e => e.toLowerCase())
  let word = arr[0]
  let repeat = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === word && !repeat) {
      repeat++
      count++
    } else if (arr[i] !== word) {
      word = arr[i]
      repeat = 0
    }
  }
  return count
}

function money_value(s){
  let neg = s.includes('-') ? true : false
  let nums = ''
  for (let i = 0; i < s.length; i++) {
    if ('0123456789.'.includes(s[i])) nums += s[i]
  }
  nums = neg ? +nums * -1 : +nums
  return nums
}

function catMouse(x, j){
  if (!(x.includes('C') && x.includes('D') && x.includes('m'))) return 'boring without all three'
  let cat = x.indexOf('C')
  let dog = x.indexOf('D')
  let mouse = x.indexOf('m')
  console.log(x, j, cat, dog, mouse)
  if (Math.abs(cat - mouse) > j) return 'Escaped!'
  if ((dog > mouse && dog < cat) || (dog < mouse && dog > cat)) return 'Protected!'
  if (Math.abs(cat - mouse) <= j) return 'Caught!'
}

function bears(x, s){
  let bears = ''
  for (let i = 0; i < s.length - 1; i++) {
    if ((s[i] === 'B' && s[i + 1] === '8') || (s[i] === '8' && s[i + 1] === 'B')) {
      bears += s[i] + s[i + 1]
      i++
    }
  }
  return [bears, bears.length / 2 >= x]
}

function solve(arr){
  console.log(arr)
  arr = arr.sort((a, b) => b - a)
  if (arr[0] === arr[1] === arr[2]) return Math.floor(arr[0] * 1.5)
  else if (arr[0] === arr[1]) return arr[0] + Math.floor(arr[2] / 2)
  else if (arr[0] > arr[1] + arr[2]) return arr[1] + arr[2]
  else return Math.floor(arr.reduce((a, c) => a + c, 0) / 2)
}

function bowlingPins(arr){
  let pins = '7 8 9 0\n 4 5 6 \n  2 3  \n   1   '
  arr.forEach(num => {
    let index = pins.indexOf(String(num % 10))
    pins = pins.slice(0, index) + ' ' + pins.slice(index + 1)
  })
  return pins.split('').map(e => '0123456789'.includes(e) ? 'I' : e).join('')
}

function calculateString(st){
  let first = '', second = '', sign
  for (let i = 0; i < st.length; i++) {
    if ('0123456789.'.includes(st[i]) && !sign) first += st[i]
    else if ('0123456789.'.includes(st[i]) && sign) second += st[i]
    else if ('+-*/'.includes(st[i])) sign = st[i]
  }
  let result = sign === '+' ? +first + +second : 
                sign === '-' ? +first - +second : 
                sign === '*' ? +first * +second : 
                +first / +second
  return Math.round(result) + ''
}

function expandedForm(num) {
  let millions = Math.floor(num / 1000000) * 1000000
  let hundredThousands = Math.floor((num - millions) / 100000) * 100000
  let tenThousands = Math.floor((num - millions - hundredThousands) / 10000) * 10000
  let thousands = Math.floor((num - millions - tenThousands - hundredThousands) / 1000) * 1000
  let hundreds = Math.floor((num - millions - hundredThousands - tenThousands - thousands) / 100) * 100
  let tens = Math.floor((num - millions - hundredThousands - tenThousands - thousands - hundreds) / 10) * 10
  let ones = Math.floor((num - millions - hundredThousands - tenThousands - thousands - hundreds - tens))
  let tenths = String(num).split('.')[1][0] ? String(num).split('.')[1][0] + '/10' : 0
  let hundredths = String(num).split('.')[1][1] ? String(num).split('.')[1][1] + '/100' : 0
  let thousandths = String(num).split('.')[1][2] ? String(num).split('.')[1][2] + '/1000' : 0
  let tenThousandths = String(num).split('.')[1][3] ? String(num).split('.')[1][3] + '/10000' : 0
  let hundredThousandths = String(num).split('.')[1][4] ? String(num).split('.')[1][4] + '/100000' : 0
  let millionths = String(num).split('.')[1][5] ? String(num).split('.')[1][5] + '/1000000' : 0
  let number = [millions, hundredThousands, tenThousands, thousands, hundreds, tens, ones, tenths, hundredths, thousandths, tenThousandths, hundredThousandths, millionths]
  number = number.map(e => String(e)).filter(e => e[0] !== '0')
  return number.join(' + ')
}

function insideOut(x){
  return x.split(' ').map(e => {
    if (e.length <= 3) return e
    else if (e.length % 2) {
      return e.slice(0, Math.floor(e.length / 2)).split('').reverse().join('') 
        + e[Math.floor(e.length / 2)] 
        + e.slice(Math.ceil(e.length / 2)).split('').reverse().join('')
    } else return e.slice(0, e.length / 2).split('').reverse().join('')
        + e.slice(e.length / 2).split('').reverse().join('')
  }).join(' ')
}

function compareVersions (version1, version2) {
  console.log(version1, version2)
  let one = version1.split('.')
  let two = version2.split('.')
  let length = Math.max(one.length, two.length)
  for (let i = 0; i < length; i++) {
    if (one[i] === undefined) one[i] = 0
    if (+one[i] < +two[i]) return false
    if (+one[i] > +two[i]) return true
  }
  return true
}

function palindrome(num,s) { 
  if (typeof num !== 'number' || typeof s !== 'number' || num < 0 || s < 0) return 'Not valid'
  let arr = []
  while (arr.length < s) {
    if (isPal(num)) arr.push(num)
    num++
  }
  return arr
}

function isPal (num) {
  num = num.toString()
  return num.length > 1 && 
    num.slice(0, Math.floor(num.length / 2)) === 
      num.slice(Math.ceil(num.length / 2)).split('').reverse().join('')
}

function sortAnimal(animal) {
  return animal === null ? null : 
    animal.sort((a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name))
}

function checkchoose(m, n) {
  for (let i = 1; i < n; i++) {
    let res = factorial(n) / (factorial(i) * factorial(n - i))
    if (Math.round(res) === m) return i
  }
  return -1
}

function factorial(n) {
  let fact = 1
  for (let i = n; i > 1; i--) {
    fact *= i
  }
  return fact
}

function lastSurvivors(str) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let arr = str.split('').sort()
  while(arr.length !== [...new Set(arr)].length) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr = arr.slice(0, i).concat(arr.slice(i + 2))
          .concat(alph[(alph.indexOf(arr[i]) + 1) % 26]).sort()
      }
    }
  }
  return arr.join('')
}

function solution(a) {
  let jumps = 0
  let frog = 0
  while (frog >= 0 && frog < a.length) {
    if (a[frog] === 0 || jumps > a.length) return -1
    frog += a[frog]
    jumps++
  }
  return jumps
}

function maxSum(arr,range){
  return Math.max(...range.map(e => arr.slice(e[0], e[1] + 1).reduce((a, c) => a + c, 0)))
}

function isOddHeavy(n){
  return Math.min(...n.filter(e => e % 2)) > Math.max(...n.filter(e => !(e % 2))) &&
    n.filter(e => e % 2).length > 0
}

function tops(msg) {
  let str = []
  let x = -1
  for (let i = 1; i < msg.length; i += (5 + (4 * x))) {
    str.push(msg[i])
    x++
  }
  return str.reverse().join('')
}

const removeDuplicateIds = (obj) => {
  let arr = Object.values(obj)
  let list = []
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = [...new Set(arr[i])].filter(e => !list.includes(e))
    list = list.concat(arr[i])
  }
  for (let key in obj) {
    obj[key] = arr[0]
    arr.shift()
  }
  return obj
};

function getWinner(listOfBallots) {
  let obj = listOfBallots.reduce((a, c) => {
    a[c] ? a[c]++ : a[c] = 1
    return a
  }, {})
  for (let cand in obj) {
    if (obj[cand] > listOfBallots.length / 2) return cand
  }
  return null
}

function uncollapse(digits){
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let str = []
  let word = ''
  for (let i = 0; i < digits.length; i++) {
    word += digits[i]
    if (arr.includes(word)) {
      str.push(word)
      word = ''
    }
  }
  return str.join(' ')
}

Array.prototype.even = function(){
  return this.filter(e => typeof e === 'number' && !(e % 2))
}

Array.prototype.odd = function(){
  return this.filter(e => typeof e === 'number' && e % 2)
}

Array.prototype.under = function(x){
  return this.filter(e => typeof e === 'number' && e < x)
}

Array.prototype.over = function(x){
  return this.filter(e => typeof e === 'number' && e > x)
}

Array.prototype.inRange = function(min,max){
  return this.filter(e => typeof e === 'number' && e >= min && e <= max)
}

function onlyDuplicates(str) {
  return str.split('').filter(e => str.indexOf(e) !== str.lastIndexOf(e)).join('')
}

function findUnique(numbers) {
  //  return numbers.filter(e => numbers.indexOf(e) === numbers.lastIndexOf(e))[0]
    let obj = numbers.reduce((a, c) => {
      a[c] ? a[c]++ : a[c] = 1
      return a
    }, {})
    for (let key in obj) {
      if (obj[key] === 1) return +key
    }
}

function redarr(arr) {
  arr = [...new Set(arr)].sort()
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[i + ''] = arr[i]
  }
  return obj
}

function sumDigNthTerm(initval, patternl, nthterm) {
  let num = initval
  let count = 1
  let index = 0
  while (count < nthterm) {
    num += patternl[index % patternl.length]
    index++
    count++
  }
  return num.toString().split('').reduce((a, c) => a + +c, 0)
}

function encryptor (key, message) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'
	return message.split('').map(e => !alph.includes(e.toLowerCase()) ? e : 
                alph.includes(e) ? alph[(alph.indexOf(e) + 26 + (key % 26)) % 26] :
                alph[(alph.indexOf(e.toLowerCase()) + 26 + (key % 26)) % 26].toUpperCase()).join('')
}

function hasSubpattern(string){
  for (let i = 1; i < string.length; i++) {
    let patt = string.slice(0, i)
    if (string === patt.repeat(string.length / patt.length)) return true
  }
  return false
}

function code(strng) {
  return strng.split('').map(e => {
    let bin = parseInt(e).toString(2)
    let k = bin.length
    return '0'.repeat(k - 1) + '1' + bin
  }).join('')
}
function decode(str) {
  let arr = ['10', '11', '0110', '0111', '001100', '001101', '001110', '001111', '00011000', '00011001']
  let s = ''
  while (str.length) {
    for (let i = 2; i <= 8; i += 2) {
      if (arr.includes(str.slice(0, i))) {
        s += arr.indexOf(str.slice(0, i)).toString()
        str = str.slice(i)
        i -= 2
      }
    }
  }
  return s
}

function peacefulYard(yard, minDistance) {
  let r, l, m, count = 0
  for (let y = 0; y < yard.length; y++) {
    for (let x = 0; x < yard[0].length; x++) {
      if (yard[y][x] === 'L') {l = [y, x], count++}
      else if (yard[y][x] === 'R'){ r = [y, x], count++}
      else if (yard[y][x] === 'M') {m = [y, x], count++}
    }
  }
  if (count <= 1 || 
      (r && l && m && distance(r, l) >= minDistance && distance(r, m) >= minDistance && distance(l, m) >= minDistance) ||
      (r && l && !m && distance(r, l) >= minDistance) ||
      (r && m && !l && distance(r, m) >= minDistance) ||
      (l && m && !r && distance(l, m) >= minDistance)) return true
  return false
}

function distance(one, two) {
  return Math.sqrt((one[0] - two[0]) ** 2 + (one[1] - two[1]) ** 2)
}


function whitespaceNumber(n) {
  let binary = Math.abs(n).toString(2).split('')
  return (n < 0 ? '\t' : ' ') + (n === 0 ? '' : binary.map(e => e === '0' ? ' ' : '\t').join('')) + '\n'
}

String.prototype.isAudio= function(){
  return ['mp3', 'flac', 'alac', 'aac'].includes(this.split('.')[1]) && 
    this.split('.')[0].split('').every(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e.toLowerCase()))
};
String.prototype.isImage= function(){
  return ['jpg', 'jpeg', 'png', 'bmp', 'gif'].includes(this.split('.')[1]) && 
    this.split('.')[0].split('').every(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e.toLowerCase()))
};

function bitsWar(numbers) {
  let odds = numbers.filter(e => e % 2)
              .map(e => e.toString(2).split('').filter(e => e === '1').length * (e < 0 ? -1 : 1))
              .reduce((a, c) => a + c, 0)
  let evens = numbers.filter(e => e % 2 === 0)
              .map(e => e.toString(2).split('').filter(e => e === '1').length * (e < 0 ? -1 : 1))
              .reduce((a, c) => a + c, 0)
  return odds > evens ? 'odds win' : odds < evens ? 'evens win' : 'tie'
}

function towerBuilder(nFloors, nBlockSz) {
  let block = '*'.repeat(nBlockSz[0])
  let lineLength = (nFloors - 1) * 2 * nBlockSz[0] + nBlockSz[0]
  let arrLength = nFloors * nBlockSz[1]
  let arr = []
  while (arr.length < arrLength) {
    for (let i = 1; i <= nBlockSz[1]; i++) {
      arr.push(block.padStart((block.length + lineLength) / 2, ' ').padEnd(lineLength, ' '))
    }
    block += '*'.repeat(nBlockSz[0] * 2)
  }
  return arr
}

function Mormons(startingNumber, reach, target) {
  let missions = 0
  let mormons = startingNumber
  while (mormons < target) {
    missions++
    mormons = mormons + mormons * reach
  }
  return missions
}

function pointsNumber(radius){
  let count = 0
  for (let x = radius * -1; x <= radius; x++) {
    for (let y = radius * -1; y <= radius; y++) {
      let distance = Math.sqrt(x ** 2 + y ** 2)
      if (distance <= radius) count++
    }
  }
  return count
}

const frame = (text, char) => {
  let lineLength = Math.max(...text.map(e => e.length)) + 4
  text = text.map(e => char + ' ' + e + ' '.repeat(lineLength - 3 - e.length) + char)
  text.unshift(char.repeat(lineLength))
  text.push(char.repeat(lineLength))
  return text.join('\n')
};

function isTwinPrime(n){
  if (!isPrime(n) || n <= 2) return false
  else if (isPrime(n + 2) || isPrime(n - 2)) return true
  return false
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (!(n % i)) return false
  }
  return true
}

function countRepeats(str) {
  let count = 0
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) count++
  }
  return count
}























