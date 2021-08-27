const testArray = ["arizona", "california", "washington", "oregon", "minnesota", "texas"];



Array.prototype.map2 = function(callback) {
    
    const finalArray = [];

    for (let i = 0; i < this.length; i++) {
        finalArray.push(callback(this[i]));
    }

    return finalArray;

};


Array.prototype.find2 = function(callback) {


    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            return this[i]
        }
    }

    return undefined;

};


Array.prototype.findIndex2 = function(callback) {

    
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            return i;
        }
    }

    return -1;
};


const upperCasedArray = testArray.map2(element => element.toUpperCase());


const arizona = testArray.find2(element => element === "arizona");


const alaska = testArray.find2(element => element === "alaska");


const texasIndex = testArray.findIndex2(element => element === "texas");


console.log(alaska);


console.log(arizona);


console.log("Index of texas is: ", texasIndex);


console.log(upperCasedArray);



