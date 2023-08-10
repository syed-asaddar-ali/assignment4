
function cubeNumber(number){
        if(typeof number !== 'number' || number <= 0){
            return 'please enter a positive number';
        }
            const cube = Math.pow(number,3);
            return cube;
            
    }
          




function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'please provide both inputs are string';
    }
    for (let i = 0; i < string1.length; i++) {
        for (let j = i + 3; j <= string1.length; j++) {
            const smallPart = string1.substring(i, j);
            
            if (string2.includes(smallPart)) {
                return true;
            }
        }
    }
    
    return false;
}





function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return 'Please input should be an array with exactly two elements.';
    }

    const num1 = arr[0];
    const num2 = arr[1];

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Invalid Input';
    }

    if (num1 < 0 || num2 < 0) {
        return 'Invalid Input';
    }

    if (num1 === num2) {
        return 'equal';
    }

    return [Math.max(num1, num2), Math.min(num1, num2)];
}




function findAddress(obj) {
    
    if (typeof obj !== 'object' || obj === null) {
        return "Please input must be a valid object";
    }

    const street = obj.street !== undefined ? obj.street : "";
    const house = obj.house !== undefined ? obj.house : "__";
    const society = obj.society !== undefined ? obj.society : "__";

    return street + house + society ;
}




function canPay(changeArray, totalDue) {
    
    if (changeArray.length === 0) {
        return 'Please input a valid  array';
    }
    changeArray.sort(function(a, b) {
        return b - a;
    });

    let totalChangeAvailable = 0;
    for (let i = 0; i < changeArray.length; i++) {
        totalChangeAvailable += changeArray[i];
    }

    return totalChangeAvailable >= totalDue;
}
    

  









    
            

    

          








     

    
    





