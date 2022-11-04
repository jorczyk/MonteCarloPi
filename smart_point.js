class SmartPoint{
    constructor(point, circleCenter, circleRadius){
        this.point=point;
        this.circleCenter=circleCenter;
        this.circleRadius=circleRadius;
    }

    get isInside() {
        var distanceFromCenterSquared = Math.pow((this.point.x - this.circleCenter.x),2) + Math.pow((this.point.y-this.circleCenter.y),2)
        return distanceFromCenterSquared < Math.pow(this.circleRadius,2)
    }

    get x() {
        return this.point.x;
    }

    get y() {
        return this.point.y;
    }

    get side() {
        return this.point.side;
    }
}