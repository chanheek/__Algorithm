function solution(n, slicer, num_list) {
    let answer = [];
    const [a, b, c] = slicer;

    console.log(num_list.slice(a, b + 1))

    switch (n) {
        case 1:
            answer = num_list.slice(0, b + 1);
            break;

        case 2:
            answer = num_list.slice(a);
            break;

        case 3:
            answer = num_list.slice(a, b + 1);
            break;

        case 4:
            answer = num_list.slice(a, b + 1).filter((element, idx) => idx % c === 0);
            break;
        }

    return answer;
}