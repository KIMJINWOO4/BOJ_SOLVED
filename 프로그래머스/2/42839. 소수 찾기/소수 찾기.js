function solution(numbers) {
    const numArr = numbers.split('');
    const visited = new Array(numArr.length).fill(false);
    const primes = new Set();

    function rec(current) {
        if (current.length > 0) {
            const n = Number(current);
            if (isPrime(n)) primes.add(n);
        }
        for (let i = 0; i < numArr.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                rec(current + numArr[i]);
                visited[i] = false;
            }
        }
    }

    rec('');

    return primes.size;
}

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
