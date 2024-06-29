function generateHash(str) {
    // checking for constraints 
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }
    // converting the string to array using split
    let words = str.trim().split(" ")
        // convert the first letter of each word to capital
    let capitalizedWord = words.map(word => {
        // using slice
        // return word[0].toUpperCase() + word.slice(1).toLowerCase()
        // using replace
        return word.replace(word.at(0), word.at(0).toUpperCase())

    });

    return `#${capitalizedWord.join("")}`

}

let hashWord = generateHash("my name is shoaib.")
console.log(hashWord);