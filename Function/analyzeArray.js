
function analyzeArray(numArr){
    length = numArr.length;
    numArr.sort()
    let min = numArr[0]
    let max = numArr[numArr.length - 1];
    let sum = 0
     numArr.forEach(num =>{
         sum += num
        })
    let average = sum / numArr.length;

    return {average, min , max , length}
}


module.exports.analyzeArray = analyzeArray