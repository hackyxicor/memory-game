export function CreateArrayOfSize(N) {
    return Array.apply(null, { length: N }).map(Number.call, Number);
}

export function ShuffleArray(A) {
    let currentIndex = A.length, temporaryValue, randomIndex;
    let newArray = [...A];

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = newArray[currentIndex];
        newArray[currentIndex] = newArray[randomIndex];
        newArray[randomIndex] = temporaryValue;
    }

    return newArray;
}