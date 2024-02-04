function solution(wallpaper) {
    

let x = [];
let y = [];

//마우스의 시작 지점 = 가장 좌측에 있는 x 값과 가장높은 y값 
//마우스의 끝 지점 = 가장 우측에 있는 x 값과 가장 낮은 y값

// 가장 좌측에 있는 x 값 = 월 페이퍼 i의 가장 낮은 j값
// 가장 높은 y 값 = 월 페이퍼 가장낮은 i의 값

// 가장 우측에 있는 x 값 = 월 페이퍼 i의 가장 높은 j값
// 가장 낮은 y값 = 웦 페이어의 가장 높은 i값
for(let i = 0; i<wallpaper.length; i++) {
  for(let j = 0; j<wallpaper[i].length; j++) { 
    if (wallpaper[i][j] === "#") {
      y.push(i);
      x.push(j);
    }
  }
}

x.sort((a,b) => a-b)
y.sort((a,b) => a-b)

// [가장높은y,가장좌측x,가장낮은y,가장우측x]

return [y[0],x[0],y[y.length-1]+1,x[x.length-1]+1]
}