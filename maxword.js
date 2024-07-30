const string = "This is how we should do this.";

const findlongWord = (str)=>{
    if(str.trim().length === 0){
        return false;
    }
    let words = str.split(' ');
    // words = words.sort((a,b)=> {return b.length-a.length})
    // console.log(words)
    // return words.at(0)
    
    // let [maxWord] = words;
    // for(let i = 1; i< words.length; i++){
    //     if(maxWord.length< words[i].length){
    //         maxWord = words[i];
    //     }
    // }
    // return maxWord;


    return words.reduce((acc,curr)=> acc.length>curr.length?acc:curr,"")
}

console.log(findlongWord(string))