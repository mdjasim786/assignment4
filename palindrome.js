function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    if(str === reversed){return 'String is Palindrome'}
    else{return 'String is not Palindrome'}
    
}
let str1 = isPalindrome('malayalam');
console.log(str1);
let str2 = isPalindrome('google');
console.log(str2);

