// Immediately Invoked Function Expression  (IIFE)

// NOTE:- INTERVIEW=>  golbal scope ke poluson se proglam hoti hai kai bar to aus golbalscope ke varibel ke  poluson ko htane ne ke liye hmne iife ka us kiya  

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
} )();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )(`pallu`)