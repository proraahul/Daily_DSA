// Program to Check if a number is Positive, Negative, or Zero

function checkNum(number){

    if(number<0){
        console.log('number is Negative');
    }
    if(number == 0){
        console.log('number is Zero')
    }
    if(number > 0){
        console.log('number is Positive')
    }


}
checkNum(0);
checkNum(2);
checkNum(-1);