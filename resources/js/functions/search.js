function search(value, prop, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i][prop] === value) {
            return myArray[i];
        }
    }
    return [];
}

export default search;
