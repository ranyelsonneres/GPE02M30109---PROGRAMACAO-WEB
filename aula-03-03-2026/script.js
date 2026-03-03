console.log("Olá mundo!");
//alert("Seja bem-vindo!");

//variaveis
var animal = "gato";
console.log(animal);

let nomeCompleto = "Fulano da Silva"
console.log(nomeCompleto)

const valor = 10;

//reatribuição
animal = 'peixe';
console.log(animal);
//valor = 20;
console.log(valor);

//operadores aritméticos
// + * - / ** %
var valor1 = 10;
var valor2 = 20;
var soma = valor1 + valor2;

//operadores de comparação
// == === != !== > >= < <=
console.log(5 == '5'); //compara apenas valores ==> igualdade
console.log(5 === '5'); //compara valores e tipos ==> estritamente igual

//algoritmo: entrada + processamento + saída
var nome = window.prompt("Digite o nome: "); //recebe dados do usuário
var idade = window.prompt("Digite a sua idade: "); //recebe dados do usuário
console.log(nome);
console.log(idade);

//template literal
console.log(`Seja bem-vindo ${nome} e você possui ${idade} ano(s).`);
document.writeln(`Seja bem-vindo ${nome} e você possui ${idade} ano(s).`);

//Criar um sistema que realize a soma de dois números
//o usuário vai digitar os números e você deverá apresentar o resultado em tela.
var n1 = parseInt(window.prompt("Valor 1: ")); //conversão de tipo (string para int)
console.log(typeof n1); //verificar o tipo da variável
var n2 = parseInt(window.prompt("Valor 2: "));
var resultado = n1 + n2;
document.writeln(`Resultado: ${resultado}.`);
