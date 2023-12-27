const name = "Ivan";
const surname = "Losev";
const patronymic = "Andreevich";
const age = "2003";
const instituteName = "ИКИТ"; 

const result1 = name + "\n" + surname + "\n" + patronymic + "\n" + age + "\n" + instituteName;
const result2 = `${name} 
${surname}
 ${patronymic}
 ${age}
 ${instituteName}`;

console.log(result1);
console.log(result2);