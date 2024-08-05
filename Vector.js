class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.angle;
        this.magnitude = this.getMagnitude();
        this.angle = this.getAngle();
    }

    setAngle(angle) {
        this.magnitude = this.getMagnitude();
        this.x = Math.cos(angle) * this.magnitude;
        this.y = Math.sin(angle) * this.magnitude;
        this.angle = angle;
    }

    getAngle() {
        return Math.atan2(this.y, this.x);
    }

    getMagnitude() {
        return Math.sqrt(this.x**2 + this.y**2);
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
        this.angle = this.getAngle();
        this.magnitude = this.getMagnitude();
    }

    setMagnitude(mag) {
        this.magnitude = mag;
        this.angle = this.getAngle();
        this.x = Math.cos(this.angle) * this.magnitude;
        this.y = Math.sin(this.angle) * this.magnitude;
    }

    add(v2) {
        this.x += v2.x;
        this.y += v2.y;
        this.angle = this.getAngle();
        this.magnitude = this.getMagnitude();
    }

    subtract(v2) {
        this.x -= v2.x;
        this.y -= v2.y;
        this.angle = this.getAngle();
        this.magnitude = this.getMagnitude();
    }

    multiply(v2) {
        this.x *= v2.x;
        this.y *= v2.y;
        this.angle = this.getAngle();
        this.magnitude = this.getMagnitude();
    }

    div(v2) {
        this.x /= v2.x;
        this.y /= v2.y;
        this.angle = this.getAngle();
        this.magnitude = this.getMagnitude();
    }

    limitMagnitude(limitVal) {
        if(this.magnitude > limitVal) {
            this.setMagnitude(limitVal);
        }
    }
}