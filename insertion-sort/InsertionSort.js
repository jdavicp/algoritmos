let vetor = [5,2,4,6,1,3];

const insertionSort = vetor => {

    for(let j = 1; j < vetor.length; j++) {
        let key = vetor[j];
        i = j - 1;

        while(i >= 0 && vetor[i] > key) {
            
            vetor[i + 1] = vetor[i];
            i -= 1;
            
        }
        vetor[i + 1] = key;

    }
}
exports.insertionSort = insertionSort;



