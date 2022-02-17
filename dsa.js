//   Given two non-empty arrays of integers, write a function that determines
//   whether the second array is a subsequence of the first one.

//   A subsequence of an array is a set of numbers that aren't necessarily adjacent
//   in the array but that are in the same order as they appear in the array.

const  array = [5, 1, 22, 25, 6, -1, 8, 10];
const  subsequence = [1, 6, -1, 10]; //  output = true


let arr1 = [1, 6, 10, 1, 10, 1, 6, -1, 10];
let arr2 = [1, 6, -1, 10 ]; //  output = true


const arr3 = [5, 1, 22, 25, 6, -1, 8, 10];
const arr4 = [5, 1, 22, 21, 6, -1, 8, 10]; //  output = true


function isSubsequence(arr1, arr2){
    for(let num of arr2){
        if(!arr1.includes(num)){
            return false
        }
    }
    let idx = 0;
    const checkArr = [];
    for(let num of arr1){
        if(num === arr2[idx]){
            checkArr.push(num);
            idx ++;
        }
    }
    if(checkArr.length === arr2.length){
        return true
    }
    return false
}
/* Realized that the second part of my code (line 25-36) actually turns the first lines unnecessary */

function isSubsequence2(seqArr, subSeqArr){
    let idx = 0;
    const checkArr = [];
    for(let num of seqArr){
        if(num === subSeqArr[idx]){
            checkArr.push(num);
            idx ++;
        }
    }
    if(checkArr.length === subSeqArr.length){
        return true
    }
    return false
}


console.log(isSubsequence(arr1, arr2));
console.log(isSubsequence(array, subsequence));
console.log(isSubsequence(arr3, arr4));