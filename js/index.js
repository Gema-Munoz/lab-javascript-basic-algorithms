console.log("I'm ready!");


// Iteration 1: Names and Input
//
hacker1 = "Ren"
console.log("The driver's name is "+hacker1);
hacker2 = "Kaito"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else if (hacker1.length < hacker2.length)
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
else if (hacker1.length === hacker2.length)
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
// Iteration 3: Loops
let spaceHacker = ""
for (i=0 ; i< hacker1.length ; i++){
    spaceHacker+=hacker1[i].toUpperCase()+" "
}
console.log(spaceHacker)

let reverseHacker = ""
for (i=hacker2.length-1 ; i >= 0 ; i--){
    reverseHacker+=hacker2[i]
}
console.log(reverseHacker)

if (hacker1 < hacker2)
 console.log(`The driver's name goes first.`)
else if (hacker1 >  hacker2)
  console.log(`Yo, the navigator goes first definitely.`)
else
console.log("What!? You both have the same name?")