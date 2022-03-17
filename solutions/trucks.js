// 스택/큐: 다리를 지나는 트럭
// bridge라는 배열을 선언해 트럭이 지나는 다리의 모습을 구현

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    
    // 다리에 올라갈 수 있는 트럭의 수(bridge_length)와 같은 크기의 새로운 배열 bridge 선언
    let bridge = Array.from({ length: bridge_length }, () => 0);
    
    while (bridge.length !== 0) {
    // 1초 마다 bridge 1개씩 사라지고, 시간은 1씩 더한다.
        bridge.shift();
        time += 1;
        
        // 대기중인 트럭이 있다면
        if (truck_weights.length > 0) {
        
        // reduce()를 통해 무게의 합을 구함
            let sum = bridge.reduce(function add(sum, curValue) {
                return sum + curValue;
            });
            
            // 다리에 있는 트럭들의 무게와 대기중인 첫번째 트럭의 무게의 합이 허용범위라면
            if (sum + truck_weights[0] <= weight) {
            // 그 트럭을 빼서 bridge에 삽입
                bridge.push(truck_weights.shift());
            } else {
            // 아니라면 0을 넣는다.
                bridge.push(0);
            }
        }
    }
    
    return time;
}
