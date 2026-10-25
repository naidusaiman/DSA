const binarySearch = (arr, ele) => {
    let [left, right, foundIndex] = [0, arr.length-1, -1];
    while(left <= right){
        let mid = left + Math.floor((right-left)/2);
        if(arr[mid] === ele){
            foundIndex = mid;
            break;
        }else if(arr[mid] < ele){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return foundIndex;
}