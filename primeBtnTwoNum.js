let lower_num = 5;
let higher_num = 20;
let primeList = [];

for(let i = lower_num; i<=higher_num; i++){
        let flag = 0;    

    for( j = 2; j<i; j++){
        if(i%j == 0){
            flag = 1;
            break;
        }
        else{
            // pushing prime numbers in arr
            primeList.push(i);
            break;
        }
    }

    if(flag == 0 && i >1){
        console.log(i);
    }

}

// print arr of prime numbers
console.log(primeList);