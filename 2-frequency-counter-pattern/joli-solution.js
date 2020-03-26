function validAnagram(str1, str2){
    const obj1 = convertToObject(str1);
    const obj2 = convertToObject(str2);
    return compareObjects(obj1, obj2);
}


function convertToObject(word) {
    let obj = {};
    for (let key of word) {
        obj[key] = (key in obj) ? obj[key] + 1 : 1;
    }
    return obj;
}


function compareObjects(obj1, obj2) {
    return isMatched(obj1, obj2) && isMatched(obj2, obj1)
}


function isMatched(obj1, obj2) {
    for (let key in obj2) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}