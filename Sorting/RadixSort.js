const getDigit = (num, i) => {
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}

const digitCount = (num) => {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num)))+1;
}

const maxDigitCount = (nums) => {
    let max = 0;
    for(let ele of nums){
        max = Math.max(max, digitCount(ele));
    }
    return max;
}

const radixSort = (nums) => {
    const maxDigit = maxDigitCount(nums);
    for(let i=0;i<maxDigit;++i){
        let digitBucket = Array.from({length: 10}, () => []);
        for(let ele of nums){
            digitBucket[getDigit(ele, i)].push(ele);
        }
        nums = [].concat(...digitBucket);
    }
    return nums;
}