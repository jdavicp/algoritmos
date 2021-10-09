const sort = require("./InsertionSort");

//Exercise 2.1-1
let vetor = [31,41,59,26,41,58];
sort.insertionSort(vetor);
console.log(vetor);

//Exercise 2.1-2
//Decreasing insertion sort
const decresingInsertionSort = vetor => {
    for(let j = 1 ; j < vetor.length; j++) {
        key = vetor[j];
        i = j - 1;
        while(i >= 0 && vetor[i] < key ) {
            vetor[i + 1] = vetor[i];
            i -= 1;
        }
        vetor[i + 1] = key;
    }

}

