// Program to Check Prime Number

function isPrime(num){

    if ( num <= 1 ) {
         console.log(num, 'is not prime number');
        } else if ( num > 1 ){

                for(let i = 2; i < num; i++){
                    if((num % i) != 0){
                        console.log(num, 'is  prime number');
                        break;
                    }else{
                        console.log(num, 'is not prime number');
                        break;
                    }
                }
            }
            // num < 1 
            else{
                console.log(num, 'is not prime number');
            }
            }

isPrime(-49);