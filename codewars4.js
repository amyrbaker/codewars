function add(a, b) {
    let arr = []
    a = a.padStart(Math.max(a.length, b.length), '0')
    b = b.padStart(Math.max(a.length, b.length), '0')
    let rem = 0
    for (let i = a.length - 1; i >= 0; i--) {
      let sum = +a[i] + +b[i] + rem
      arr.unshift(sum % 10)
      rem = Math.floor(sum / 10)
    }
    rem !== 0 ? arr.unshift(rem) : arr
    return arr.join('')
}

function multiply(a, b){ 
    return (BigInt(a) * BigInt(b)) + ''
}

function differentiate(equation, point){
    let signs = []
    for (let i = 1; i < equation.length; i++) {
      if (equation[i] === '+' || equation[i] === '-') signs.push(equation[i])
    }
    let neg = equation[0] === '-' ? true : false
    let arr = neg ? equation.slice(1).split(/[+,-]/) : equation.split(/[+,-]/)
    if (neg) arr[0] = '-' + arr[0]
    arr = arr.map(e => {
      return e.includes('^') ? e.split('^') : 
        (e.includes('x') && e.length > 1) ? e.slice(0, e.length - 1) : 
        e.includes('x') ? '1' : '0'
    })
    arr = arr.map(e => {
      if (e[0] === 'x') {
        e[0] = `${e[1]}x`
        e[1] = (+e[1] - 1) + ''
      } else if (e[0] === '-x') {
        e[0] = `${(-1 * +e[1]) + ''}x`
        e[1] = (+e[1] - 1) + ''
      } else if (e[0].includes('x')) {
        e[0] = `${(+(e[0].slice(0, e[0].length - 1)) * +e[1]) + ''}x`
        e[1] = (+e[1] - 1) + ''
      } else e
      return e
    })
    arr = arr.map(e => {
      if (e[0].includes('x') && +e[1] >= 1) {
        e = (point ** +e[1]) * +e[0].slice(0, e[0].length - 1)
      } else e = +e
      return e
    })
    let sum = arr[0]
    for (let i = 0; i < signs.length; i++) {
      if (signs[i] === '+') sum += arr[i + 1]
      else if (signs[i] === '-') sum -= arr[i + 1]
    }
    return sum
}

function mix(s1, s2) {
  let one = s1.split('').filter(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e))
    .reduce((a, c) => {
      a[c] ? a[c]++ : a[c] = 1
      return a}, {})
  let two = s2.split('').filter(e => 'abcdefghijklmnopqrstuvwxyz'.includes(e))
    .reduce((a, c) => {
      a[c] ? a[c]++ : a[c] = 1
      return a}, {})
  let arr = []
  for (let letter in one) {
    if (!two[letter] && one[letter] > 1) arr.push([1, letter, one[letter]])
    else if (two[letter]) {
      if (one[letter] > two[letter] && one[letter] > 1) arr.push([1, letter, one[letter]])
      else if (one[letter] < two[letter] && two[letter] > 1) arr.push([2, letter, two[letter]])
      else if (one[letter] === two[letter] && one[letter] > 1) arr.push([3, letter, one[letter]])
    }
  }
  for (let letter in two) {
    if (!one[letter] && two[letter] > 1) arr.push([2, letter, two[letter]])
  }
  arr = arr.sort((a, b) => b[2] - a[2] || a[0] - b[0] || a[1].localeCompare(b[1]))
    .map(e => e[0] === 3 ? `=:${e[1].repeat(e[2])}` : `${e[0]}:${e[1].repeat(e[2])}`)
    .join('/')
  return arr
}

function simplify(poly){
  let arr = splitStr(poly)
    .map(e => splitTerm(e))
    .map(e => [e[0], e[1].split('').sort().join('')])
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(e => e[0] === '-' ? [-1, e[1]] : e[0] === '' ? [1, e[1]] : e[0] === '+' ? [1, e[1]] : e)
  let reduced = simplifyArr(arr)
    .sort((a, b) => a[1].length - b[1].length || a[1].localeCompare(b[1]))
    .filter(e => e[0] !== 0 && e[0] !== '-0')
    .map(e => +e[0] === 1 ? e[1] : +e[0] === -1 ? `-${e[1]}` : e.join(''))
  let final = reduced[0]
  for (let i = 1; i < reduced.length; i++) {
    if(reduced[i][0] === '-') final += reduced[i]
    else final += `+${reduced[i]}`
  }
  return final
}

function simplifyArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1 && arr[i][1] === arr[i + 1][1]) arr[i + 1][0] = +arr[i][0] + +arr[i + 1][0]
    else res.push(arr[i])
  }
  return res
}

function splitTerm(str) {
  let index 
  for (let i = 0; i < str.length; i++) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(str[i])) {
      index = i
      break
    }
  }
  return [str.slice(0, index), str.slice(index)]
}

function splitStr(poly) {
  let terms = []
  let str = ''
  if (poly[0] === '+') poly = poly.slice(1)
  for (let i = 0; i < poly.length; i++) {
    if ((poly[i] === '+' || poly[i] === '-') && str.length > 0) {
      terms.push(str)
      if (poly[i] === '-') str = poly[i]
      else str = ''
    } else if (i === poly.length - 1) {
      str += poly[i]
      terms.push(str)
    } else str += poly[i]
  }
  return terms
}



