

const string ="this is my firt hash tag generator program"


const hashTagGenerator = (str)=>{
    let words = str.split(' ');
    let capitilizeWords = words.map(element => 
        element.at(0).toUpperCase() + element.slice(1)
    )
    return "#"+ capitilizeWords.join('');
}

console.log(hashTagGenerator(string))