const A1 = [2,3,4];
const A2 = [5,6,7];
//let comArr= [A1, A2];
//console.log(comArr);

//comArr = [...A1, ...A2];
//console.log(comArr);

sum =(...numbers) =>{
    let total = "";
    for (Value of numbers) total += Value;
    return total;
};

console.log(sum(comArr));