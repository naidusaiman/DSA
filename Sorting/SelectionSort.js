import { comparator, swap } from "../Helpers/utils";

const selectionSort = (arr, comparatorFn=comparator) => {
    for(let i=0;i<arr.length;++i){
        let minIndex = i;
        for(let j=i+1;j<arr.length;++j){
            if(comparatorFn(arr[minIndex], arr[j])>0){
                minIndex = j;
            }
        }
        if(i !== minIndex){
            swap(arr, minIndex, i);
        }
    }
    return arr;
}