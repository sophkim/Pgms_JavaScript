// 스택 큐: 주식가격
// 이중 for문 사용

function solution(prices) {
    // 가격 개수만큼의 배열을 만들어 0으로 채움
    let answer = new Array(prices.length).fill(0);
    
    for (let i = 0, len = prices.length - 1; i < len; i++) {
        answer[i] = 1;
        if (prices[i] <= prices[i + 1]) {
            for (let j = i + 1; j < len; j++) {
                if (prices[i] > prices[j]) break
                    else answer[i] += 1
            }
        }
    }
    return answer
    
}
