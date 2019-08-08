function filterBy(array,typeOfData){
    const filteredArray = [];
    array.forEach(item => {
        if(typeof item !== typeOfData) {
            filteredArray.push(item);
        }
    });
    return filteredArray;
}

console.log(filterBy([9,'string',null],'string'));



