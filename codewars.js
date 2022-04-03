function getAge(inputString){
    return +inputString[0]
}

function multiply(a, b) {
    return a * b
}

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
}

function firstNonConsecutive (arr) {
    for(let i=1; i<arr.length; i++) {
      if (arr[i] !== arr[i-1]+1) return arr[i]
    }
    return null
}

const flip=(d, a)=>{
  
    return (d=='R') ? a.sort((a,b) => a-b):a.sort((a,b) => b-a);
}

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
      this.info = `${this.name}s age is ${this.age}`
    }
    info() {
      return this.info
    }
}