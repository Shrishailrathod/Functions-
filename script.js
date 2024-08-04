
// converting from fahrenheit to celsius 
const toCelsius = (f)=>{
    return (5/9)*(f-32)

}
value = toCelsius(31);
console.log("After converting from Fahrenheit to Celsius is :",value)



// Arrow function
// Arrow function are feature introduced in ES6 and we can esily store it in variable
const func1 = (x)=>{
    console.log("I am a Arrow function:",x)

}
func1(32);
func1(36);
func1(34);
func1(39);








function sum(a,b){
    return a+b
}
result1 = sum(3,4)
result2 = sum(67,4)
result3 = sum(3,42)
result4 = sum(3,45)
console.log("the sum of these number is:",result1)
console.log("the sum of these number is:",result2)
console.log("the sum of these number is:",result3)
console.log("the sum of these number is:",result4)






function nice(name){
    console.log("hello " + name + " you are awesome!");
    console.log("hello " + name + " You are amazing!");
    console.log("hello " + name + " I like your attitude!");
    console.log("hello " + name + " and you too!");
}
nice("Rathod")


