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

