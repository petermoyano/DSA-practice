/*  
    romanNumeral("III") => 3
    romanNumeral("XIV") => 14 (10 + 4)
    romanNumeral("XLIX") => 49 ( )
    romanNumeral("CCXLIX") => 249
    romanNumeral("CCCXLIX") => 349
    romanNumeral("DXLIX") => 549
    romanNumeral("XXXII") => 32 (10 +10+10+1+1)
    romanNumeral("XLII") => 42 50 - 10
    romanNumeral("LXVII") => 67 (50+10+7)
    romanNumeral("XCIV") => 94 (10 - 100 + 4)
    romanNumeral("CMXCIV") => 994 
    romanNumeral("CM") => |100 - 1000| = 900
    romanNumeral("MMMCMXCIV") = 3994
    1-3999

*/
/* STEP 1: Split string into components: Analize letter to the right of current letter:
if it's equal or bigger continue, else extract letters at that index */

/* I -> 1
II -> 1+1
IV -> 5-1
IIX -> 10 -2
400 -> CD
39 -> CCCXCVIII       300 - 90 - 8 */
/* C => count = 0
C => count = 1
C => count = 2 => str.slice(2-2, 3) 
X => count = 1
C => => str.subString(4 - 2, 5)
*/

const patterns = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    /* CCCXCVIII */
function romanNumeral(str) {
    let count = 0;
    let components = [];
    for (let i = 0; i < str.length; i++) {
        if (patterns[str[i]] > patterns[str[i + 1]] || i === str.length - 1) { /* left of the || is to add the last substring of str */
            components.push(str.substring(i - count, i + 1));
            count = -1;
        }
        count++;
    }
    /* At this point for CCXLIX components would be => [ 'CC', 'XL', 'IX' ] */
    let total = 0;
    for (let element of components) {
        let largerRomanNum = element[0];
        for (let RomanNum of element) {
            if (patterns[largerRomanNum] < patterns[RomanNum]) {
                largerRomanNum = RomanNum;
            }
        }
        let sum = 0;
        if (element.indexOf(largerRomanNum) === 0) {
            for (let RomanNum of element) {
                sum += patterns[RomanNum]
            }
        } else {
            sum += patterns[largerRomanNum] - patterns[element[0]];
        }
        total += sum;
    }
    return console.log(`${str} converts to ${total}`);
}
romanNumeral("III");
romanNumeral("XIV");
romanNumeral("XLIX");
romanNumeral("CCXLIX");
romanNumeral("CCCXLIX");
romanNumeral("DXLIX");
romanNumeral("XXXII");
romanNumeral("XLII");
romanNumeral("LXVII");
romanNumeral("XCIV");
romanNumeral("CMXCIV");
romanNumeral("CM");
romanNumeral("MMMCMXCIV");
romanNumeral("MMDXXIV");