function findMax(arr) {
    if(arr.length == 1) {
        return;
    }

    if(arr[0] > arr[1]) {
        findMax(arr.slice(1));
    }
}

let numeros = [5, 4, 7, 8];
console.log(numeros.slice(1));