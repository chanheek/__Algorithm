function solution(my_string) {
    
   let result = [];

for(let i =0; i<my_string.length; i++) {
    if(my_string[i] === my_string[i].toLowerCase()) {
            result.push(my_string[i].toUpperCase())
    }  else {
        result.push(my_string[i].toLowerCase())
    }
}
    return result.join('')
}