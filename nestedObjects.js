function deleteNestedProperty(obj, target) {

    for (let property in obj) {

        if (property == target) 

            delete obj[property];

        else if (typeof obj[property] == "object") 

            deleteNestedProperty(obj[property], target);
    }

}



let test1 = {
    name: "property1",
    unwanted: "property2",
    thirdProperty: {
        name: "property1",
        unwanted: "property2",
        thirdProperty: {
            name: "property1",
            unwanted: "property2"
        }
    }
};



console.log(test1);
deleteNestedProperty(test1, "unwanted");
console.log();
console.log(test1);
