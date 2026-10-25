const recursiveBinarySearch = (arr, ele, left=0, right=arr.length-1) => {
    if(left > right){
        return -1;
    }
    let mid = left + Math.floor((right-left)/2);
    if(arr[mid] === ele){
        return mid;
    }else if(arr[mid] < ele){
        return recursiveBinarySearch(arr, ele, mid+1, right);
    }else{
        return recursiveBinarySearch(arr, ele, left, mid-1);
    }
}