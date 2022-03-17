// 스택/큐 - 기능개발
// progress 해결에 걸리는 일 수를 계산하고, 배열을 순회하며 이전 요소의 해결 일 수보다 적으면 배열의 마지막 요소에 1을 더하고, 이전 요소의 해결 일 수보다 크면 배열에 요소를 추가(push)한다.

function solution(progresses, speeds) {
    let answer = [];
    let commitDay = 0;
    
    for (let i in progresses){
        let days = Math.ceil((100-progresses[i])/speeds[i]);
        
        if(days > commitDay){
            answer.push(1);
            commitDay = days;
        } else {
            answer[answer.length - 1] += 1;
        }
    }
    
    return answer;
}
