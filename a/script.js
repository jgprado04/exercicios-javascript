let palavra = "Joao" // a variavel que vai armazenar a palavra

function isPalindromo(palavra) {
    let palavraM = palavra.toLocaleLowerCase(); // converter os tamanhos das letras para minusculo para nao ocorrer erros
    let tam = palavraM.length;

    let novaPalavra = "" // a palavra revertida

    for(let i = tam - 1; i >= 0; i--) {
        // laco repeticao decrementando da ultima letra da palavra ate a primeira para armazenar em uma nova variavel de tipo string (novaPalavra)
        novaPalavra += palavraM.charAt(i); 
    }

    let verificao = palavraM == novaPalavra ? "Aqui temos um palindromo..." : "Aqui nao temos um palindromo...";
    console.log(verificao);
}


isPalindromo(palavra);
