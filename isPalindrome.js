/* Given a string, create a function that returns the corresponding boolean depending 
if the argument is a Palindrome or not*/
/* We will call the argument str. */


/* str[idx = 0] => str.at(-idx - 1)
str[idx = 1] => str.at(-idx - 1)
dad  => Math.floor(str.length / 2) = 1... 0 <= 1, 1<=1 (odds)
ozoz => Math.floor(str.length / 2) = 2... 0 <= 2, 1<=2, 2<=2, (evens)   */

function isPalindrome(str) {
    for (let i = 0; i <= Math.floor(str.length / 2); i++) {
        if (str[i] !== str.at(-i - 1)) {
            return false;
        }
    }
    return true;
}


console.log(isPalindrome("dad"));
console.log(isPalindrome("daD"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("madom"));
console.log(isPalindrome("madam."));
console.log(isPalindrome("madam "));