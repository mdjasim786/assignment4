function missingNum(numbers) {
    var missing = -1;
    var sorted = numbers.sort((a,b)=>{return a-b});
    //console.log(sorted);
    for(var i = sorted[0];i<=numbers.length-1;i++){
        if(numbers.indexOf(i) === -1){
            missing = i;
        }
    }
    return missing;
    
    
}
var numbers = [1,2,3,4,6,7,8,9,10];
var result = missingNum(numbers);
console.log(result);
