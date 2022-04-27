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





