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










