

var m = parseInt(prompt("Enter the starting number : "));
var n = parseInt(prompt("Enter the last number : "));
var sum = 0;

for (var x = m; x <= n; x++){
    sum = sum + x;
}

document.write(sum);