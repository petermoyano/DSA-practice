//Write a function that takes a positive numeger and turns it numo a roman num.
// 3 --> III
// 9 --> IX
// 99 --> (100-10)+(10-1) = (C-X)+(X-I) = XC+IX = XCIX
// 125 --> 100 + 20 + 5 = C + XX + V
// The pattern is to separate thousends, from hundreds, from tens, from ones
// Then turn each into romans and add that to a string, in that order

function numToRoman(int) {

    const hundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const ones = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    let roman = '';
    let num = int;
    // separate thousends
    while (num >= 1000) {
        roman += 'M';
        num -= 1000;
    }
    // separate hundreds
    if (num > 99) {
        roman += hundreds[Math.floor(num / 100) - 1]; 
        num -= Math.floor(num / 100) * 100;
    }
    // separate tens
    if (num > 9) {
        roman += tens[Math.floor(num / 10) - 1]; // 12/10 = 1.2 => floors to 1 => tens[0] = X 
        num -= (Math.floor(num / 10)) * 10; // 12/10 = 1.2 => floors to 1 so 1 * 10 => num -= 10
    }
    // separate ones
    if(num === 0){
        return `${int} converts to ${roman}`
    }else{
        roman += ones[num - 1];
    }
    
    return `${int} converts to ${roman}`;
}
console.log(numToRoman(3));
console.log(numToRoman(12));
console.log(numToRoman(125));
console.log(numToRoman(459));
console.log(numToRoman(759));
console.log(numToRoman(998));
console.log(numToRoman(1000));
console.log(numToRoman(1280));
console.log(numToRoman(2648));
console.log(numToRoman(3597));

