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





