
let vetor = [5,3,7,1,9,0];

const selectSort = vetor => {
    for(let j = 0; j < vetor.length - 1; j++) {
        let min = vetor[j];
        let key = j;

        for(let i = j + 1; i < vetor.length; i++){
            if(vetor[i] < min) {
                min = vetor[i];
                key = i;
            }
            
        }
        vetor[key] = vetor[j];
        vetor[j] = min;
    }
} 
selectSort(vetor);
console.log(vetor);