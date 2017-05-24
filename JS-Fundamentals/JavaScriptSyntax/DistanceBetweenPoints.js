function Distance(x1, y1, x2, y2) {
    let PointA = {x:x1, y:y1};
    let PointB = {x:x2, y:y2};
    let distanceX = Math.pow(PointA.x - PointB.x, 2);
    let distanceY = Math.pow(PointA.y - PointB.y, 2);
    let distance = Math.sqrt(distanceX + distanceY);
    console.log(distance);
}
Distance(2, 4, 5, 0)