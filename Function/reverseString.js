//A reverseString function that takes a string and returns it reversed.

const reverseString = (str, reverse = "", index= 1)  => {
    if(index == str.length+1) return reverse
    reverse += str[str.length - index]
    return reverseString(str, reverse, index = index+= 1)
}

module.exports = reverseString