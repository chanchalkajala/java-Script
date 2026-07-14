function multipleyBy5(num){
    return num*5
}

multipleyBy5.power = 2 
console.log(multipleyBy5(5));
console.log(multipleyBy5.power);
console.log(multipleyBy5.prototype); 


function createUser(username, score){
     this.username = username 
     this.score = score
}