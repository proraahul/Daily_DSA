// Program to Check if the Numbers Have Same Last Digit


const num1 = 1234;
const num2 = 45678;



const lastDigitOfNum1 = parseInt(num1 % 10);


const lastDigitOfNum2 = parseInt(num2 % 10);


if(lastDigitOfNum1 == lastDigitOfNum2){
    console.log('Last digits of both number are same');
}else{
    console.log('Last digits of both number are not same')
}