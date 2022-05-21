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

