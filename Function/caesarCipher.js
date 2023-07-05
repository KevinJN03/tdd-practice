const caesarCipher = (str, shift) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!alphabet.includes(str[i].toLowerCase())) newStr += str[i];
    if (alphabet.indexOf(str[i].toLowerCase()) + shift > 25) {
      // retart from the begin of the alphabet with the remainding +shift
      // eg. x + 3 should be a
      let newShift = alphabet.indexOf(str[i].toLowerCase()) + shift - 26;
      if (str[i] == str[i].toUpperCase()) {
        newStr += alphabet[0 + newShift].toUpperCase();
      }else {
        newStr += alphabet[0 + newShift];}
      
    } else {
      for (let x = 0; x < alphabet.length; x++) {
        // look for a way to check if the goes over z, it restarts
        // if the index of the current string in tha alphabelet + shift
        // and the remainder is greater that 25, we will retart form A
        if(str[i] === alphabet[x].toUpperCase()){
                newStr += alphabet[x + shift].toUpperCase()
            }
        else if(str[i].toLowerCase() == alphabet[x]) {
          newStr += alphabet[x + shift];
        }
      }
    }
  }
  return newStr;
};
module.exports.caesarCipher = caesarCipher;
