function mergeSort(leftPart,rightPart) 
{
	var i = 0;
	var j = 0;
	var results = [];

	while (i < leftPart.length || j < rightPart.length) {
		if (i === leftPart.length) {
			results.push(rightPart[j]);
			j++;
		} 
      else if (j === rightPart.length || leftPart[i] <= rightPart[j]) {
			results.push(leftPart[i]);
			i++;
		} else {
			results.push(rightPart[j]);
			j++;
		}
	}
	return results;
}
var arr1 = [1, 3, 4];
var arr2 = [3, 7, 9];
var result = mergeSort(arr1, arr2);
console.log(result);

