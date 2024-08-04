function printString(str) {
    if(str.length === 0) {
        return;
    }

    console.log(str[0]);
    printString(str.slice(1));
}

printString("Hello");