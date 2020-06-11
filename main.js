//Finds out which number is larger.
function large(a, b){
   if (a > b) {
       console.log(a)
   } else if(b > a){
       console.log(b)
   }else(
       console.log("These numbers equate each other!")
   )
}

large(3, 5)


// Finds out which number out of 20 is odd or even
for (let i = 0; i <= 20; i++) {
    if (i %2 === 0) {
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }
}

// Finds out which number out of 100 is a multiple of 3 or 5 or both
for (let i = 0; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i + " FizzBuzz")
    } else if (i % 3 === 0 ) {
        console.log(i + " Fizz") 
     } else if(i % 5 === 0) {
        console.log(i + " Buzz") 
     }
}