function Robot() {
    this.phrase = "Я робот - я просто працюю";
}
Robot.prototype.work = function() {
    console.log(this.phrase);
}

function CoffeeRobot() {
    this.phrase = "Я CoffeeRobot - я варю каву"
}
CoffeeRobot.prototype = Object.create(Robot.prototype);

function RobotDancer() {
    this.phrase = "Я RobotDancer - я просто танцюю"
}
RobotDancer.prototype = Object.create(Robot.prototype);

function RobotCoocker() {
    this.phrase = "Я RobotCoocker - я просто готую"
}
RobotCoocker.prototype = Object.create(Robot.prototype);

var robots = [new Robot(), new CoffeeRobot(), new RobotCoocker(), new RobotDancer()];
robots.forEach(robot => robot.work());