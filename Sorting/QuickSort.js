import { comparator, swap } from "../Helpers/utils";

const pivot = (arr, comparatorFn=comparator, start=0, end=arr.length-1) => {
    const pivotEle = arr[start];
    let swapIndex = start;
    for(let i=start+1;i<=end;++i){
        if(comparatorFn(arr[i], pivotEle) <= 0){
            ++swapIndex;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

const quickSort = (arr, left=0, right=arr.length-1, comparatorFn=comparator) => {
    if(left < right){
        let pivotEleIndex = pivot(arr, comparatorFn, left, right);
        quickSort(arr, left, pivotEleIndex-1, comparatorFn);
        quickSort(arr, pivotEleIndex+1, right, comparatorFn);
    }
    return arr;
}