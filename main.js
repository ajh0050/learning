// window.addEventListener("resize", function(){
//     var width=window.innerWidth;
//     console.log("windowwasresizedto " + width + " pixels");
// });
// const number = Math.floor((Math.random() * 10) + 1);
// let response = prompt("guess a number!")
// console.log(response)
// if (response === null) {
//     alert('Dont cancel me out like that');
// } else if(response>number){
//     alert("too high")
// } else if (response < number) {
//     alert("too low");
// } else {
//     alert("congrats")
// }


// function halfnumber(number){
//     console.log(`Half of ${number} is ${number/2}`)   
// }

// function squareNumber(number){
//     console.log(`The result of squaring ${number} is ${number * number}`)
// }
// function percentOf(firstNumber,secondNumber) {
//     console.log(`${firstNumber} is ${firstNumber/secondNumber*100}% of ${secondNumber}`)
// }

function findModulus(firstNumber,secondNumber) {
    console.log(`${secondNumber % firstNumber} is the modulus of ${firstNumber} and ${secondNumber}`)
}