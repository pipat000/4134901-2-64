let person ={
    firstName : "Ton",
    lastName : "Hae",
    age : 21,
    sex: "male",

    fullName : function (){
        return this.firstName + " " + this.lastName;
    }
};
console.log(person);

person.age = 20;
console.log(person);

const p = person;
p.age =10;
console.log(person.age); //value
console.log(person.fullName); //property
console.log(person.fullName()); //return

///deatructuring
const{firstName,lastName,age : a,sex : s} = person;
console.log(firstName);
console.log(s);

 //string
const S1 ="Hello World !!";
const S2 = "My Name is";
const Rname ="Ton";
let conCat = S1 + S2 + Rname;
console.log(conCat);
conCat = `  I
            love
            it. ${S2} ${Rname}
            `;
console.log(conCat);

//Spread op (...)
const A1 = [2,3,4];
const A2 = [5,6,7];
let comArr= [A1, A2];
console.log(comArr);

//comArr = [...A1, ...A2];
//console.log(comArr);

sum =(...numbers) =>{
    let total = "";
    for (Value of numbers) total += Value;
    return total;
};

console.log(sum(comArr));
