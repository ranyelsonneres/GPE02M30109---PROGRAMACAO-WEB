//Objetos
const pessoa = { //consigo ter uma instância desse objeto (pessoa)
    nome: "Fulano",
    idade: 10
};
console.log(pessoa);

pessoa.nome = "Pedro";
console.log(pessoa);

//const pessoa = { //estou tentando criar uma segunda instância do objeto (pessoa)
//    nome: "Pedro",
//    idade: 12
//}

console.log(pessoa);

let idades_clientes = {"João": 25, "Maria": 30, "Pedro": 40}
console.log(idades_clientes);

const pessoa2 = {};
pessoa2.nome = "Ciclano";
pessoa2.idade = 12;
console.log(pessoa2);

const veiculo = new Object();
veiculo.marca = "Fiat";
veiculo.ano = 2026;
console.log(veiculo);

//construtor
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

//criar múltiplas instâncias de um objeto
const p1 = new Pessoa("João", 30);
const p2 = new Pessoa("Maria", 34);
const p3 = new Pessoa("André");
console.log(p2);
console.log(p1);
console.log(p3);


//colocar em uma classe
class Animal {
   //construtor 
    constructor(tipo, nome) {
        this.tipo = tipo;
        this.nome = nome;
    };

    //métodos
    emitirSom(){
        return `${this.nome} faz um som`;
    };

};

const gato = new Animal("Felino", "Frajola");
console.log(gato.nome); //acessar a propriedade
console.log(gato.emitirSom()); //acessar o método

//modificadores de acesso (public e private)
class ContaBancaria {
    //público - métodos e propriedades que são acessíveis de qualquer lugar
    //privado - ele não pode ser acessado fora da classe ("#")
    #saldo = 0; //propriedade privada

    constructor(saldoInicial){ //construtor
        this.#saldo = saldoInicial;
    };

    //metodos
    getSaldo(){
        return this.#saldo;
    };

};

const conta = new ContaBancaria(100); //instancia do objeto
console.log(conta.getSaldo()); //acessando o metodo do objeto
//console.log(conta.#saldo); //erro porque a propriedade é privada


//Arrays
let frutas = ["Maça", "Laranja", 2];
console.log(frutas);
console.log(frutas[2]);

//métodos em arrays
//adicionar ao final
frutas.push("uva");
console.log(frutas);

//adicionar ao início
frutas.unshift("pêra");
console.log(frutas);

//adicionar em uma posição específica
frutas.splice(3, 0, "limão");
console.log(frutas);

//remoção em uma posição específica
frutas.splice(1, 1);
console.log(frutas);
