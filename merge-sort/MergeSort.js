let vetor = [1,4,2,6,7,1,2,8,3,5];

const merge = (vetor,left, right) => {
    const tamanho = vetor.length;
    left.push(Infinity);
    right.push(Infinity);
    let k = 0;
    let j = 0;
    for(let i = 0 ; i < tamanho; i++) {
        if(left[k] <= right[j]) {
            vetor[i] = left[k];
            k++;
        } else {
            vetor[i] = right[j];
            j++;
        }
    }
}
const mergeSort = (vetor) => {
    
    if(vetor.length > 1) {
        let middle = Math.floor(vetor.length/2);
        let subArrayL = vetor.slice(0,middle);
        let subArrayR = vetor.slice(middle);
        mergeSort(subArrayL);
        mergeSort(subArrayR);

        merge(vetor,subArrayL,subArrayR);
    }
    
}
//merge(vetor,0,Math.floor((vetor.length-1)/2), vetor.length-1);
mergeSort(vetor);
console.log(vetor);