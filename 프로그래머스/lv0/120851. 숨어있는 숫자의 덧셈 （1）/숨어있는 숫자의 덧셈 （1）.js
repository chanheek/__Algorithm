function solution(my_string) {
    
    return my_string.split('').filter(e => Number(e)).reduce((a,b) => Number(a)+Number(b))
}