var f = [0, 1]; 
if (10 <= 2) { 
    var result = f.slice(0, 10); 
} else {
    for (i = 0; i < 10 - 2; i++) {
        f.push(f[f.length - 1] + f[f.length - 2]);
    };
    var result = f;
}; 
console.log(result);