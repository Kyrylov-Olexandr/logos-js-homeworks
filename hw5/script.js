function makeBuffer() {
    let buffer = [];
    return function () {
        if (arguments.length === 1) {
            buffer.push(arguments[0]);
        } else if (arguments.length === 0) {
            return buffer.join(" ");
        }
    }
}
var myBuffer = makeBuffer();
myBuffer("Hello");
myBuffer("World");
myBuffer(1);
console.log(myBuffer());

    // return function(str) {
    //     let buffer = [];
        // this.add = function() {
        //     buffer.push(str);
        // }
    //     this.print = function() {
    //         return buffer.join(' ');
    //     }
    // }

