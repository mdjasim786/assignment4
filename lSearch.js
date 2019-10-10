function linearSearch(arr, sElement) {
    for (var i=0; i<arr.length; i++) {
      if (arr[i] == sElement) {
        return i;
      }
    } return null;
  }
  var names = ['Jasim', 'Rahul', 'Rohan', 'Aditya', 'Raaz'];
  
  var a =linearSearch(names, 'Rohan');
  console.log(a);
  
  var b =linearSearch(names, 'Rajesh'); // returns null
  console.log(b);
  