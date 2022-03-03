function factorial(input){
  let output = 1;
  if(input<0) {
    return "Choisis un nombre de type integer (>=0)";
  }
  else if (input == 0 || input == 1){
    return 1;
  }
  
  else{
    for(let i = 1; i <= input; i++){
    output = output * i;
    }
    return output;
  }
}


let answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log(factorial(answer));

