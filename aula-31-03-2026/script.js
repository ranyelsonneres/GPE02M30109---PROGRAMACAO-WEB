//precos dos combustiveis
const precoGasolina = 6.69;
const precoEtanol = 5.89;
const precoDiesel = 6.20;

function atualizarValor(){
    let tipo = document.getElementById("combustivel").value; //traz os valores
    let litros = document.getElementById("litros").value;
    let precoPorLitro; //atualizar conforme o tipo de combustível
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("Escolha uma opção");
            return;
    };
    console.log(tipo);
    console.log(precoPorLitro);
    calcularAbastecimento(precoPorLitro, litros); //chamando a função de abastecimento
};

let tipo = document.getElementById("combustivel"); //trazendo o elemento HTML
tipo.addEventListener("change", atualizarValor); //evento ao elemento HTML

//função para calcular o preço
function calcularAbastecimento(precoCombustivel, litros){
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = valorTotal;
};

let litros = document.getElementById("litros"); //elemento HTML
litros.addEventListener("input", atualizarValor);
