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

