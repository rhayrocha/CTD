function print(msg){
    console.log(msg)
}

function FizzBuzz(n1, n2, callback){
    for(i = 1; i <= 100; i++){
        
        if(i % n1 == 0 && i % n2 == 0){
           callback("FizzBuzz")
        }

        else if (i % n1 == 0) {
            callback("FIZZ")
        } 

        else if(i % n2 == 0){
            callback("Buzz")
        }
        
        else {
            callback(i)
        }
    }
}

FizzBuzz(3,5,print);