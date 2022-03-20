// 스택/큐: 프린터
// list를 선언하고 우선순위와 위치를 저장하고, 배열을 순회하며 우선순위보다 큰 게 있으면 list 뒤에, 아니라면 새 배열에 삽입

function solution(priorities, location) {
    //list를 선언하고 각 요소의 우선순위와 위치를 저장한다.
    let list = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        }
    })
    
    //빈 배열 선언
    let queue = [];
    
    while(list.length > 0) {
        //list의 첫 요소를 없애며 그 요소를 firstElement에 저장
        let firstElement = list.shift();
        
        //list 요소들의 우선순위 중 방금 없앤 요소의 우선순위보다 큰 게 있으면 true
        let highPriority = list.some(i => i.priority > firstElement.priority);
        
        if(highPriority) {
            //true인 경우 list 맨 뒤에 삽입
            list.push(firstElement);
        } else {
            //false인 경우 새 배열에 삽입
            queue.push(firstElement);
        }
    } 
    //조건을 만족하는 첫번째 요소의 인덱스를 반환 
    return queue.findIndex(i => i.index === location) + 1;
}
