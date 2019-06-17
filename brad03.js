// 變數宣告原則 [a-zA-Z$_][a-zA-Z0-9$_]*   第一個字母不能為數字
let var1;
document.write(var1 + "<br>");  // 會印出"undefined"

var1 = 123;
document.write(typeof(var1) + "<br>");

var1 = 12.3;
document.write(typeof(var1) + "<br>");

var1 = true;
document.write(typeof(var1) + "<br>");

var1 = "123";
document.write(typeof(var1) + "<br>");

//js 為弱型別，要小心不同型別導致運算結果不同




// const型別 ， 宣告時一定要給初始值，並且不能夠再設其他值，有點像java final 的宣告
//const name; //error:Uncaught SyntaxError: Missing initializer in const declaration
const name = 'Evie';
//name = 'Penny';  //error:Uncaught TypeError: Assignment to constant variable.



document.write("My name is " + name + "<br>");
document.write(`My name is ${name} <br>`)   //另外一種寫法

let a = 10;
let b = 20;
document.write(`${a} + ${b} = ${a+b}`);