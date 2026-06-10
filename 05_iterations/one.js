// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number")

    }
    // console.log(element);


}

for (let i = 1; i <= 10; i++) {
    //  console.log(`outer loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`ineer loop: ${j} and ineer loop ${i}`);
        //  console.log(i + `*` + `=` + i*j);

    }

}

let myArray = ["pallu", "kumar", "pander"]

for (let index = 0; index < myArray.length; index++) { // index se ++ htane pr infinit loop chalega
   // console.log(myArray.length);
    const element = myArray[index];
    //console.log(element);

}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        break
        
    }
    console.log(`value of i is $[index]`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        break
        
    }
    console.log(`value of i is $[index]`);
    
}