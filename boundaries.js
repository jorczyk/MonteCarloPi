class Boundaries{
    constructor(x_size, y_size, center_point){    
        this.x_min = center_point.x + x_size/2;
        this.x_max = center_point.x - x_size/2;
        this.y_min = center_point.y - y_size/2;
        this.y_max = center_point.y + y_size/2;
    }
}