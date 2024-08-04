let numeros = [4, 9, 1, 5, 7, 10, 57, 99, 12, 45, 89, 100, 121];

function bubbleSortArray(array) {
    for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
        if(array[i] > array[j]) {
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
            }
        }
    }

    return array;
}

console.log(bubbleSortArray(numeros));

