//DOM (document)

//buscar um elemento HTML
let meuElemento = document.getElementById("paragrafo"); //id
console.log(meuElemento);

//trazer o conteúdo
console.log(meuElemento.textContent);

//buscar o elemento pela classe
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

//imprimir todo o conteúdo da variável "paragrafo1"
for(let i=0;i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

//buscar o elemento pela tag HTML
let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//criar o elemento HTML
let destino = document.getElementById("elemento");
let elementoHTML = document.createElement("p"); //criando a tag html
elementoHTML.textContent = "Parágrafo criado via JavaScript";
destino.append(elementoHTML); //adiciono ao DOM


let lista = document.getElementById("lista");
let ul = document.createElement("ul");
let itens = ["Feijão","Banana", "Arroz", "Suco"];
for(let i=0;i<itens.length;i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li); //adicionado o li a ul
}
lista.append(ul);

//algoritmo: 
function somar() {
    //pegar os dois números digitados pelo usuário
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    console.log(soma);
    let saida = `Resultado: <u>${soma}</u>`; //template literal
    document.getElementById("resultado").innerHTML = saida;
}
