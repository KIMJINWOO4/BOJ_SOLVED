function solution(video_len, pos, op_start, op_end, commands) {
    // 문자열 "mm:ss"를 [mm, ss] 배열로 변환
    video_len = video_len.split(':').map(Number);
    pos = pos.split(':').map(Number);
    op_start = op_start.split(':').map(Number);
    op_end = op_end.split(':').map(Number);
    
    // 시간 배열을 초 단위로 변환하는 함수
    function toSec(timeArr) {
        return timeArr[0] * 60 + timeArr[1];
    }
    
    // 초 단위를 [mm, ss] 배열로 변환하는 함수
    function fromSec(sec) {
        let mm = Math.floor(sec / 60);
        let ss = sec % 60;
        return [mm, ss];
    }
    
    // "prev" 명령: 10초 전으로 이동. 10초 미만이면 0으로.
    function movePrev(time, delta) {
        let sec = toSec(time) - delta;
        if (sec < 0) sec = 0;
        return fromSec(sec);
    }
    
    // "next" 명령: 10초 후로 이동. 남은 시간이 10초 미만이면 video_len으로.
    function moveNext(time, delta) {
        let sec = toSec(time);
        let videoSec = toSec(video_len);
        if (videoSec - sec < delta) return fromSec(videoSec);
        sec += delta;
        return fromSec(sec);
    }
    
    // opCheck: 현재 시간이 op_start와 op_end 사이(포함)인지 확인
    function opCheck(time) {
        let curSec = toSec(time);
        let startSec = toSec(op_start);
        let endSec = toSec(op_end);
        return startSec <= curSec && curSec <= endSec;
    }
    
    // 각 명령어 처리
    for (let command of commands) {
        // 명령 수행 전에 오프닝 구간이면 건너뛰기
        if (opCheck(pos)) {
            pos = [...op_end];
        }
        
        if (command === 'prev') {
            pos = movePrev(pos, 10);
        } else if (command === 'next') {
            pos = moveNext(pos, 10);
        }
        
        // 명령 수행 후에도 오프닝 구간인지 체크하여 건너뛰기
        if (opCheck(pos)) {
            pos = [...op_end];
        }
    }
    
    // 결과를 "mm:ss" 형식 (두 자리 숫자)으로 변환하여 반환
    const mm = String(pos[0]).padStart(2, "0");
    const ss = String(pos[1]).padStart(2, "0");
    return mm + ':' + ss;
}
