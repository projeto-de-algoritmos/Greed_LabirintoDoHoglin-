function merge(left, right) {
    const arr = [];

    while (left.length && right.length) {
        if ((left[0].value / left[0].weight) < (right[0].value / right[0].weight)) {
            arr.push(right.shift());
        } else {
            arr.push(left.shift());
        }
    }

    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    const half = array.length / 2;

    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

function knapsack(totalSpace, stars) {
    const sortedStars = mergeSort(stars);
    let spaceSack = totalSpace;
    let i = 0;
    let score = 0;
    const bestStars = [];

    while (spaceSack > 0) {
        if (spaceSack >= sortedStars[i].weight) {
            score += sortedStars[i].value;
            spaceSack -= sortedStars[i].weight;
            bestStars.push(sortedStars[i]);
        } else {
            i++;
        }
    }
    return [score, bestStars];
}
/*
var totalSpace = 40;
var stars = [{ value: 10, weight: 20 }, { value: 5, weight: 10 }, { value: 30, weight: 30 }]

knapsack(totalSpace, stars);
*/