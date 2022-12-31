function solution(my_string) {
    let mo = ['a','e','i','o','u']
    
    return my_string.split('').filter(e => !mo.includes(e)).join('')
}