import { comparator, swap } from "../Helpers/utils";

const bubbleSort = (arr, comparatorFn=comparator) => {
    for(let i=0;i<arr.length;++i){
        let isSwapped = false;
        for(let j=0;j<arr.length-1-i;++j){
            if(comparatorFn(arr[j], arr[j+1])>0){
                swap(arr,j,j+1);
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return arr;
}