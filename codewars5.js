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







