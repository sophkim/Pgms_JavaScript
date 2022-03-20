// 해시: 완주하지 못한 선수

function solution(participant, completion) {
    var answer = '';
    
    // 오름차순 정렬
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        // 참가자 중 완료자에 없는 선수들
        if (participant[i] !== completion[i]) {
        answer = participant[i];
             return answer;
        }
    }
}

