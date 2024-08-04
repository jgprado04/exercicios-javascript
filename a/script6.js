function countdown(n) {
    if(n == 1) {
        return 1;
    }

    return String(n) + " " + String(countdown(n-1));
}

console.log(countdown(5));