// 해시

function solution(phone_book) {
    // hashMap 객체를 만든 뒤 phone_book의 각 전화번호를 키(key) 이름으로, 값은 1로 하여 객체에 추가한다.
    const hashMap = {}
    
    for (let phoneNumber of phone_book) {
        hashMap[phoneNumber] = 1
        // hashMap[119] = 1, hashMap[97674223] = 1, hashMap[1195524421] = 1, 
    }
    
    for (let phoneNumber of phone_book) {
        // temp라는 변수를 만들어 첫 번째 숫자부터 자리수를 늘려가며 객체에 해당 key 이름이 있는지 확인한다.
        // 번호가 119라면, temp를 1, 11, 119 이런 식으로 변화시키면서 확인한다.
        let temp = "";
        
        // 공백제거
        const phoneNumberWithoutSpace = phoneNumber.replace(/\s/g, "");
        
        for (let number of phoneNumberWithoutSpace) {
            temp += number;
            
            // temp와 phoneNember가 똑같다면 자기 자신이므로 제외한다.
            if (hashMap[temp] && temp != phoneNumberWithoutSpace) {
                return false
            }
        }
    }
    return true
}
