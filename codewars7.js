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

