let string = 'A man, a plan, a canal, panama.';

const isPalindrone = (string)=>{
    string = string.toLowerCase().replace(/\W/g,'');

    const reverseString = string.split('').reverse().join('');
    // console.log(string,reverseString)
    return string === reverseString ? true: false
}

console.log(isPalindrone("amanama"));
console.log(isPalindrone("amanamsfda"));
console.log(isPalindrone(string));