let str = prompt("enter a string")
var str1 = '';

for (var i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
}

console.log(str1);

if (str == str1) {
    console.log("palindrome");
} else {
    console.log("not a palindrome");
}