const carroDoJoao = {
    modelo: 'fiesta',
    fabricante: 'ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruum")
    }
}

const carroDaMaria = {
    modelo: 'ka',
    fabricante: 'ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrum")
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao =anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoJoao2 = new Carro("fiesta", "ford", 2020, 2019);
const carroDaMaria2 = new Carro("ka", "ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "gabriel"
const idade = 30
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);

const marca = "adidas"
const tamanho = 30
const cor = ["preto", "verde", "vermelho"]

const empresa = {
    marca: marca,
    tamanho: tamanho,
    cor: cor,
}

console.log(typeof marca);
console.log(typeof tamanho);
console.log(typeof cor);

console.log(carroDaMaria2 instanceof Carro)
console.log(conhecimentos instanceof Array)
console.log(cor instanceof Array)