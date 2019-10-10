function largest2(numbers){

    var sorted = numbers.sort((a,b)=>{return b-a});
    console.log(sorted);
     firstLargest = sorted[0];
     secondLargest = sorted[1];
    //return sorted;


}

var numbers = [1,9,3,10,4,6,7,8];
largest2(numbers);
console.log(firstLargest);
console.log(secondLargest);

