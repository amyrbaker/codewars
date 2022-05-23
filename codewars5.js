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







