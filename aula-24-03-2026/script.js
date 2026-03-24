//trazer o elemento HTML
let botao1 = document.getElementById("botao1");

//manipulador = clique simples
botao1.onclick = function(){
    alert("Primeiro Evento");
};

botao1.onclick = function(){
    alert("Segundo Evento");
};

let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){ //manipulador
    botao2.style.backgroundColor = "red";
};

botao2.onmouseout = function(){
    botao2.style.backgroundColor = "";
};

botao2.ondblclick = function(){
    botao2.textContent = "Duplo Clique";
};

//evento - teclado
let campoEntrada = document.getElementById("campoEntrada");
let resultado = document.getElementById("resultado");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter") {
        console.log("pressionou a tecla (Enter)");
        resultado.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    };
};

//addEventListener
let botao3 = document.getElementById("botao3");
let mensagem1 = document.getElementById("mensagem1");
let mensagem2 = document.getElementById("mensagem2");
botao3.addEventListener("click", function(){
    mensagem1.textContent = "primeiro evento";
});

botao3.addEventListener("click", function(){
    mensagem2.textContent = "segundo evento";
});

let caixa = document.getElementById("caixa");
let area = document.getElementById("area");

//permitir o arrastar o elemento
caixa.addEventListener("dragstart", ()=>{
    console.log("arrastando o objeto");
});

//soltar o elemento
area.addEventListener("dragover", (e)=>{
    e.preventDefault();
});

//adicionar o elemento
area.addEventListener("drop", ()=>{
    area.appendChild(caixa);
});
