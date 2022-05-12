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
















