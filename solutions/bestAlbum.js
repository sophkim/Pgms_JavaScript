// 해시
// Programmers - Hash: BestAlbum

function solution(genres, plays) {
    // 인덱스 별 장르, 횟수 저장
    let songs = 
        genres.map((genre,index) => {
            return {
                no: index,
                genre: genre,
                playCount: plays[index]
            };
        });
    
    // 장르 별 횟수를 저장할 배열 선언
    let genrePlayCount = [];
    
    // songs 배열을 돌며
    songs.forEach(song => {
        let thisGenre = genrePlayCount.find(genrePlay => genrePlay.genre === song.genre);
        
        // genrePlayCount에 저장되어 있지 않은 장르라면
        if(!thisGenre) {
            // 장르와 횟수 저장
            genrePlayCount.push({
                genre: song.genre, totalPlayCount: song.playCount
            });
        } else {
            // 저장되어 있다면 횟수만 누적
            thisGenre.totalPlayCount += song.playCount;
        }
    });
    
    // 장르 별 횟수를 저장한 배열
    genrePlayCount.sort((a, b) => b.totalPlayCount - a.totalPlayCount);
    
    let answer = [];
    
    genrePlayCount.forEach(genrePlay => {
        let thisGenreSongs = songs.filter(song => genrePlay.genre === song.genre);
        thisGenreSongs.sort((a, b) => b.playCount - a.playCount);
        answer.push(thisGenreSongs[0].no);
        if(thisGenreSongs.length > 1) {
            answer.push(thisGenreSongs[1].no);
        }
    });

return answer;
    
}
