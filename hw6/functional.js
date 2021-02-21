function Robot() {
    this.phrase = "Я робот - я просто працюю";
    this.work = function() {
        console.log(this.phrase);
    }
}
function CoffeeRobot() {
    Robot.call(this);
    this.phrase = "Я CoffeeRobot - я варю каву"
}
function RobotDancer() {
    Robot.call(this);
    this.phrase = "Я RobotDancer - я просто танцюю"
}
function RobotCoocker() {
    Robot.call(this);
    this.phrase = "Я RobotCoocker - я просто готую"
}
var robots = [new Robot(), new CoffeeRobot(), new RobotCoocker(), new RobotDancer()];
robots.forEach(robot => robot.work());