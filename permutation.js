function permutation(str){
    var result = [];
    if(str.length == 1)return [str];
    if(str.length == 2)return [str, str[1]+str[0]];



    str.split('').forEach(function (char, indx,arr){
        var sub = [].concat(arr);
        sub.splice(indx, 1);
        
        permutation(sub.join('')).forEach(function(permute){
            result.push(char + permute);
        });
    });
    return result;
}

console.log(permutation('abc'));
