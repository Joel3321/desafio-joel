const readline = require('readline');

const rl = readline.createInterface({  input: process.stdin,  output: process.stdout});
rl.question("Digite seu nome: ", (nome) => {
    rl.question("Digite o seu nível XP: ", (resposta2) => {
    const nivelXp = parseInt(resposta2, 10); 

        if (nivelXp <= 1000) {
      console.log(`O herói de nome **{${nome}}**está no nível de **{Ferro}**`);
    } else if (nivelXp <= 2000) {
      console.log(`O herói de nome **{${nome}}** está no nível de **{Bronze}**`);
    } else if (nivelXp <= 5000) {
      console.log(`O herói de nome **{${nome}}** está no nível de **{Prata}**`);
    } else if (nivelXp <= 7000) {
      console.log(`O herói de nome **{${nome}}** está no nível de **{Ouro}**`);
    } else if (nivelXp <= 8000) {
      console.log(`O herói de nome **{${nome}}** está no nível de **{Platina}**`);
    } else if (nivelXp <= 9000) {
      console.log(`O herói de nome **{${nome}}** está no nível de **{Ascendente}**`);
    } else if (nivelXp <= 10000) {
      console.log(`O herói de nome **{${nome}}** está no nível de **{Imortal}**`);
    } else {
      console.log(`O herói de nome **{${nome}}** está no nível de **{Radiante}**`);
    }

    rl.close(); 
  });
});

rl.on("close", () => {
  process.exit(0);
});
