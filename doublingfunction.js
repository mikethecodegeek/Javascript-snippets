/**
 * Created by Michael on 7/1/2015.
 */
mynums = [1,2,3,4,5,6,7,8];
function doubleNum (anum) {  //Simple doubling function.
    return anum*2;
}

function doubleArray(arrayName){  // Main function for doubling the array
var d = {};
for (var i in arrayName){           // Loops through each item in array
    d[arrayName[i]] = doubleNum(arrayName[i]);  // This line dynamically creates keys for the object
}
    console.log(d);
    var count = 0;             // Trying out closures
    counter = function() {    // global variable that can be called outside of function
        count++;
        console.log("This function has been called " + count + ' times!')
    }

}


doubleArray(mynums);
counter();
counter();
