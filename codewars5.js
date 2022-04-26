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

