function solution(phone_book) {
    phone_book.sort((a, b) => {
        return Number(a) - Number(b);
    });
    let arr = new Set();

    for (let number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.substring(0, i);
            if (arr.has(prefix))
                return false;
        }
        arr.add(number);
    }
    return true;
}