import { comparator } from "../Helpers/utils";

const merge = (arr1, arr2, comparatorFn=comparator) => {
    let [i, j, result] = [0,0,[]];
    while(i<arr1.length && j<arr2.length){
        if(comparatorFn(arr1[i], arr2[j]) <= 0){
            result.push(arr1[i++]);
        }else{
            result.push(arr2[j++]);
        }
    }
    while(i<arr1.length){
        result.push(arr1[i++]);
    }
    while(j<arr2.length){
        result.push(arr2[j++]);
    }
    return result;
}

const mergeSort = (arr, comparatorFn=comparator) => {
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid), comparatorFn);
    let right = mergeSort(arr.slice(mid), comparatorFn);
    return merge(left, right, comparatorFn);
}