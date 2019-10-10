function isArmstrong(num) {
    let digits = [...num.toString()]
    console.log(digits);
    
    let result = 0
    let power = digits.length;
    digits.forEach((digit) => {
      result+=Math.pow(parseInt(digit),power)
      console.log(result);
      
    })
    if(result === num) return "Is Armstrong"
    return "Not Armstrong"
  }
  
  //console.log(isArmstrong(1634));
  console.log(isArmstrong(153));
  //console.log(isArmstrong(123));
