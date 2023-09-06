function myCountChart(haystack, needle){
    let count = 0;

    for (const car of haystack) {

        if (car == needle) {
            count++;
        }   
    }

    return count;
}

myCountChart('Hello world', 'o');