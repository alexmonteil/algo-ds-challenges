const merge = (output, arr1, arr2) => {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            output[k] = arr1[i];
            i++;
        } else {
            output[k] = arr2[j];
            j++;
        }

        k++;
    }

    while (i < arr1.length) {
        output[k] = arr1[i];
        i++;
        k++;
    }

    while (j < arr2.length) {
        output[k] = arr2[j];
        j++;
        k++;
    }

    return output;
}


const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length - 1 / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));

    return merge(arr, left, right);
}


let firstArray = [-2,-34,22,9,-7,-56,22,35,98,202,-6000,606];
mergeSort(firstArray);
console.log(firstArray);
