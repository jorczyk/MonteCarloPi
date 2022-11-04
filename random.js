function getRandomPoint(boundaries) {
    var x = getRandomInt(boundaries.x_min, boundaries.x_max);
    var y = getRandomInt(boundaries.y_min, boundaries.y_max);
    return new Point(x, y);
}

function getNRandomPoints(boundaries, n) {
    var generatedPoints = [];
    for (i in [...Array(n).keys()]) {
        generatedPoints.push(getRandomPoint(boundaries));
    }
    return generatedPoints;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomFloat = Math.random();
    return Math.floor(randomFloat * (max - min + 1)) + min;
}