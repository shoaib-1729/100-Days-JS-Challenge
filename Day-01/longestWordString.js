function findLongestWord(str) {
    // null string
    if (str.trim().length === 0) {
        return false;
    }
    // else, find the length
    // convert the string tp array using split method
    let words = str.trim().split(" ")
        // now use sort with compare function to sort the words on the basis of their length not the their alphabetical order
        // words.sort((a, b) => a.length - b.length)

    // return words.at(-1)
    // return words[words.length - 1 ]

    // doing with the help of reduce method
    return words.reduce(
        (accumulator, currentWord) => (currentWord.length > accumulator.length ? currentWord : accumulator, "")
    )
}

const longestWord = findLongestWord("Watch Thapa Technical Javascript Course on Youtube.")
console.log(longestWord);