const linearSearch = (arr, ele) => {
    let foundIndex = -1;
    for(let i=0;i<arr.length;++i){
        if(arr[i] === ele){
            foundIndex = i;
            break;
        }
    }
    return foundIndex;
}