// Program to Check if the Numbers Have Same Last Digit


function startEndSame(x){

    let str = new String(x);

    let check = str.split(''); 

    // console.log(check)

    // for(let i=0; i<check.length; i++){

        if(check[0] == check[check.length-1]){
            console.log('same first and last digits');
        }else{
            console.log('not same first and last digits');
        }

    // }



}


startEndSame('rahul saini');
startEndSame(1234567891);
