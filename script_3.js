function mario(n){
  console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  let output = ""
  
  for (let i = 1; i <= n; i++) {
    output += " ".repeat(n-i) + "#".repeat(i) + "\n";
  }
  return output;
}

let answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log(mario(answer));

