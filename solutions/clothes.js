/*
해시 문제이므로 Map 자료구조를 사용했다.

Map.has(key): 해당 key가 Map에 포함되어 있는지 확인
Map.get(key): key값에 맞는 value값 반환
Map.set(key, value): 맵에 key-value 쌍을 집어넣음

map에는 key : value 형태로 "headgear" : 2 형태로 저장되어 있다.
Map.values 메서드를 이용해서 값만 순회하면서 기존의 cnt 변수에 (값+1)을 곱해준다.
리턴할 때 cnt 변수에서 아무것도 입지 않은 경우의 수에 해당하는 1을 빼준다.
*/

function solution(clothes) {
    // Map 생성
    const map = new Map();
    let cnt = 1;
    
    for (let [name, type] of clothes) {
        
        // 해당 종류가 map에 포함되어 있다면
        if(map.has(type)) {
            
            // 값에 1을 더하고
            map.set(type, map.get(type) + 1);
            
            // 해당 종류가 map에 없으면 
        } else {
            
            // "type","1" 쌍을 집어 넣는다.
            map.set(type, 1)
        }
    }
    
    // cnt로 계산
    for (let x of map.values())
        cnt *= (x + 1);
    return cnt - 1;
}
