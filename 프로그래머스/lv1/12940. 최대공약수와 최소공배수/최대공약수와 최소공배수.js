function solution(n, m) {
  let gcd = 1; 
  let lcm = n * m; 


  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  for (let i = lcm / n; i <= lcm; i++) {
    if (i % n === 0 && i % m === 0) {
      lcm = i;
      break;
    }
  }

  return [gcd, lcm];
}