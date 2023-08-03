let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString()



let result =  input.split('').sort((a,b) => b-a).join('')



console.log(result)

