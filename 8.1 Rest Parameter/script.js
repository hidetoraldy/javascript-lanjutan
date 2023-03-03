//TODO Rest Parameter

function testRest(a, b, ...Rest){
    return `a = ${a}, b = ${b}, Rest = ${Rest}`;
}

console.log(testRest(1,2,3,4,5));