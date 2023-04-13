function solution(phone_number) {
    
    let back = phone_number.slice(phone_number.length-4);
    let front = phone_number.slice(0,phone_number.length-4)
    let front_to_start = '*'.repeat(front.length)
    
    return front_to_start+back
}