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

