// program to format numbers as currency string
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
formatter.format(2500);


// program to format numbers as currency string

const number = 1234.5678;
const result1 = '$ ' + number.toFixed(2);
console.log(result1);

// program to format numbers as currency string

const result2 =  (2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(result2);

// program to format numbers as currency string

const result3 = 1234.5678.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

console.warn('$ ' + result3);