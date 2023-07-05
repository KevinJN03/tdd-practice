// A capitalize function that takes a string and returns it with the first character capitalized.

const capitalize = str => {

    // let firstLetter = str[0].toUpperCase()
    str = str.replace(str[0], str[0].toUpperCase())
    return str
}

module.exports = capitalize