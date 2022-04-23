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

