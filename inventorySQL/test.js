function oddNumbers(l, r) {
    // Write your code here
    const oddArray = [];

    const findOddNumber = (l, r) => {
        for (let i = r; i <= l; i--) {
            if (i % 2 !== 0) {
                oddArray.push(r);
            } else {
                console.log(i);
            }
        }
    }

    if (r % 2 !== 0) {
        oddArray.push(r);
        findOddNumber(l, r);
    } else {
        let odd = r - 1;
        oddArray.push(odd);
        findOddNumber(l, odd);
    }

    return oddArray;
}

oddNumbers(2,5);
