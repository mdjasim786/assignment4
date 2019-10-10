var names = ['Jasim', 'Rahul', 'Rohan', 'Aditya', 'Raaz'];
var sortedNames = names.sort(); 


function binarySearch(sortedArray, sElement) {
    var lowIndex = 0;
    var highIndex = sortedArray.length - 1;
    while (lowIndex <= highIndex) {
      var midIndex = Math.floor((lowIndex + highIndex) / 2);
      if (sortedArray[midIndex] == sElement) {
        return midIndex;
      } else if (sortedArray[midIndex] < sElement) {
        lowIndex = midIndex + 1;
      } else {
        highIndex = midIndex - 1;
      }
    } return null;
  }
  
 var a = binarySearch(sortedNames, 'Rohan');
 console.log(a);
 
 var b=  binarySearch(sortedNames, 'Ambesh');
 console.log(b);
 