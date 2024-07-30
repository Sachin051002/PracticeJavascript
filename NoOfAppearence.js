let string = "Missiipi";

const findAppearence = (str,character)=>{
    str = str.toLowerCase();
    character = character.toLowerCase();
    let chars = string.split('');

    return chars.reduce((acc,curr)=>{
        if(curr === character)
            acc ++;
        return acc;
    },0)

    
}

console.log(findAppearence(string,'S'))