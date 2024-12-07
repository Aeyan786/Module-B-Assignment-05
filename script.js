
let arrays = [
    42,
    true,
    "Hello, World",
    {
        name: "John",
        age: 25,
        isStudent: false
    },
    false,
    3.14,
    "javaScript is fun!"
]

// Q1
let elements1 =  arrays.map((e,i)=>{
    return e.toString()
})
console.log(elements1);

// Q2
let elements2 = arrays.filter((e,i)=>{
   return typeof e === "number" 
})
console.log(elements2);

// Q3
let elements3 = arrays.forEach((e,i)=>{
    console.log(typeof e);
    
})

// Q4
let elements4 = arrays.filter((e,i)=>{
    return typeof e === "number" 
 }).reduce((a,b)=>{
    console.log(a+b);
    
 })

//  Q5
let elements5 = arrays.find((e,i)=>{
    return typeof e === "boolean" 
 })
 console.log(elements5);
 
// Q6
let elements6 = arrays.findIndex((e,i)=>{
    return typeof e === "object" 
}) 
console.log(`Index no: ${elements6}`);

// Q7
let elements7 = arrays.some((e,i)=>{
    return typeof e === "number" 
})
console.log(elements7);

// Q8
let elements8 = arrays.every((e,i)=>{
    return typeof e === "number" 
})
console.log(elements8);
