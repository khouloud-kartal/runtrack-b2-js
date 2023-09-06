function myArraySum(array){

    let result = 0;

    array.forEach(num => {
        result += num;
    })

    return result;

}

myArraySum([4, 24, 52, 14, 32, 56]);