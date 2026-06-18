/* EX 01
let numero1 = Number (prompt("Escolha um numero:"));
let numero2 = Number (prompt("Escolha um numero:"));
if(numero1 > numero2){
    alert("O maior número é:" + numero1)
}else {
    alert("O maior número é:" + numero2)
}*/

/* EX 2 
let numero3 = Number (prompt("Escolha um numero:"))
if(numero3 >= 0){
    alert("Positivo")}
else{
    alert("Negativo")
}*/

/* EX 03 

let sexo = prompt("Digite F ou M").toUpperCase();

switch (sexo) {
    case "F":
        alert("Feminino");
        break;
    case "M":
        alert("Masculino");
        break;
    default:
        alert("Sexo inválido");
}*/

/* EX 04 
let vogal = prompt("Digite uma letra:").toLowerCase();
switch (vogal){
case "a":
case "e":
case "i":
case "o":
case "u": alert("Vogal")
break;

default: alert("Consoante")}*/

/* EX 05 
let nota1 = Number (prompt("Digite sua nota:"))
let nota2 = Number (prompt("Digite sua nota:"))
let media = (nota1 + nota2)/2;
if (media >= 7){
    alert("Aprovado")
}else if(media == 10){
    alert("Aprovado com Distinção")
}else{
    alert("Reprovado")
} */

/* EX 06 

let numero1 = Number (prompt("Digite um numero:"))
let numero2 = Number (prompt("Digite um numero:"))
let numero3 = Number (prompt("Digite um numero:"))

if(numero1 > numero2 && numero1 > numero3){
alert(numero1)
} else if (numero2 > numero1 && numero2 > numero3){
    alert(numero2)
}else{
    alert(numero3)*/


/* EX 07 

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let numero3 = Number(prompt("Digite o terceiro número:"));

let maior;
let menor;

if (numero1 >= numero2 && numero1 >= numero3) {
    maior = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maior = numero2;
} else {
    maior = numero3;
}

if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1;
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;
} else {
    menor = numero3;
}

alert("Maior número: " + maior);
alert("Menor número: " + menor);}*/

/* EX 08

let compra1 = Number(prompt("Digite o primeiro Preço:"));
let compra2 = Number(prompt("Digite o segundo Preço:"));
let compra3 = Number(prompt("Digite o terceiro Preço:"));

let maior;
let menor;

if (compra1 < compra2 && compra1 < compra3) {
    maior = compra1;
    alert("Compre o produto 1");
} else if (compra2 < compra1 && compra2 < compra3) {
    maior = compra2;
    alert("Compre o produto 2");
} else { maior = compra3
 alert("Compre o produto 3");} */

 /* EX 09 

 let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let numero3 = Number(prompt("Digite o terceiro número:"));

if (numero1 >= numero2 && numero1 >= numero3) {

    if (numero2 >= numero3) {
        alert(numero1 + ", " + numero2 + ", " + numero3);
    } else {
        alert(numero1 + ", " + numero3 + ", " + numero2);
    }

} else if (numero2 >= numero1 && numero2 >= numero3) {

    if (numero1 >= numero3) {
        alert(numero2 + ", " + numero1 + ", " + numero3);
    } else {
        alert(numero2 + ", " + numero3 + ", " + numero1);
    }

} else {

    if (numero1 >= numero2) {
        alert(numero3 + ", " + numero1 + ", " + numero2);
    } else {
        alert(numero3 + ", " + numero2 + ", " + numero1);
    }

} */

    /* EX 10 

    let turno = prompt("Digite seu turno (M, V ou N):")
   switch (turno.toUpperCase()) {
    case "M": alert("Bom Dia!")
    break
    case "V": alert("Boa Tarde!")
    break
    case "N": alert("Boa Noite!")
    break
    default: alert("Letra Invalida")
   }*/

    /* EX 11 

    let salario = Number(prompt("Digite o salário do colaborador:"));
    let percentual;
    let aumento;
    let novoSalario;

    if (salario <= 280) {
        percentual = 20;
    } else if (salario <= 700) {
        percentual = 15;
    } else if (salario <= 1500) {
        percentual = 10;
    } else {
        percentual = 5;
    }

    aumento = salario * percentual / 100;
    novoSalario = salario + aumento;

    alert(
        "Salário antes do reajuste: R$ " + salario.toFixed(2).replace(".", ",") + "\n" +
        "Percentual aplicado: " + percentual + "%\n" +
        "Valor do aumento: R$ " + aumento.toFixed(2).replace(".", ",") + "\n" +
        "Novo salário: R$ " + novoSalario.toFixed(2).replace(".", ",")
    );*/

    /* EX 12 

    let valorHora = Number(prompt("Digite o valor da hora:"));
let horasMes = Number(prompt("Digite as horas trabalhadas no mês:"));

let salarioBruto = valorHora * horasMes;

let ir;

if (salarioBruto <= 900) {
    ir = 0;
} else if (salarioBruto <= 1500) {
    ir = salarioBruto * 0.05;
} else if (salarioBruto <= 2500) {
    ir = salarioBruto * 0.10;
} else {
    ir = salarioBruto * 0.20;
}

let inss = salarioBruto * 0.10;
let sindicato = salarioBruto * 0.03;
let fgts = salarioBruto * 0.11;

let descontos = ir + inss + sindicato;
let salarioLiquido = salarioBruto - descontos;

alert("Salário Bruto: R$ " + salarioBruto);
alert("IR: R$ " + ir);
alert("INSS: R$ " + inss);
alert("Sindicato: R$ " + sindicato);
alert("FGTS: R$ " + fgts);
alert("Total Descontos: R$ " + descontos);
alert("Salário Líquido: R$ " + salarioLiquido);*/

/* EX 13

let dia = Number(prompt("Digite um número de 1 a 7:"));

switch (dia) {
    case 1:
        alert("Domingo");
        break;
    case 2:
        alert("Segunda");
        break;
    case 3:
        alert("Terça");
        break;
    case 4:
        alert("Quarta");
        break;
    case 5:
        alert("Quinta");
        break;
    case 6:
        alert("Sexta");
        break;
    case 7:
        alert("Sábado");
        break;
    default:
        alert("Valor inválido");
}*/

/* EX 14

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;
let conceito;

if (media >= 9) {
    conceito = "A";
} else if (media >= 7.5) {
    conceito = "B";
} else if (media >= 6) {
    conceito = "C";
} else if (media >= 4) {
    conceito = "D";
} else {
    conceito = "E";
}

if (conceito === "A" || conceito === "B" || conceito === "C") {
    alert("Média: " + media + "\nConceito: " + conceito + "\nAPROVADO");
} else {
    alert("Média: " + media + "\nConceito: " + conceito + "\nREPROVADO");
}*/

/* EX 15

let a = Number(prompt("Lado 1:"));
let b = Number(prompt("Lado 2:"));
let c = Number(prompt("Lado 3:"));

if (a + b > c && a + c > b && b + c > a) {

    if (a === b && b === c) {
        alert("Triângulo Equilátero");
    } else if (a === b || a === c || b === c) {
        alert("Triângulo Isósceles");
    } else {
        alert("Triângulo Escaleno");
    }

} else {
    alert("Não forma um triângulo");
}*/

/* EX 16

let a = Number(prompt("Digite A:"));
let b = Number(prompt("Digite B:"));
let c = Number(prompt("Digite C:"));

if (a === 0) {
    alert("Não é equação do segundo grau");
} else {

    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        alert("Não possui raízes reais");
    } else if (delta === 0) {

        let x = (-b) / (2 * a);

        alert("Raiz única: " + x);

    } else {

        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        alert("X1 = " + x1);
        alert("X2 = " + x2);
    }
*/

/* EX 17

let ano = Number(prompt("Digite um ano:"));

if (ano % 4 === 0) {
    alert("Ano bissexto");
} else {
    alert("Ano não bissexto");
}*/

/* EX 18

let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    alert("Par");
} else {
    alert("Ímpar");
}*/

/* EX 19

let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    alert("Par");
} else {
    alert("Ímpar");
}

if (numero >= 0) {
    alert("Positivo");
} else {
    alert("Negativo");
}*/

/* EX 20

let pontos = 0;

let p1 = prompt("Telefonou para a vítima? (S/N)");
let p2 = prompt("Esteve no local do crime? (S/N)");
let p3 = prompt("Mora perto da vítima? (S/N)");
let p4 = prompt("Devia para a vítima? (S/N)");
let p5 = prompt("Já trabalhou com a vítima? (S/N)");

if (p1.toUpperCase() === "S") pontos++;
if (p2.toUpperCase() === "S") pontos++;
if (p3.toUpperCase() === "S") pontos++;
if (p4.toUpperCase() === "S") pontos++;
if (p5.toUpperCase() === "S") pontos++;

if (pontos === 2) {
    alert("Suspeita");
} else if (pontos === 3 || pontos === 4) {
    alert("Cúmplice");
} else if (pontos === 5) {
    alert("Assassino");
} else {
    alert("Inocente");
}*/


/* EX 21


let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 > num2) {
    alert("Maior: " + num1);
    alert("Menor: " + num2);
} else {
    alert("Maior: " + num2);
    alert("Menor: " + num1);
}*/



/*EX 22 


let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let n3 = Number(prompt("Digite o terceiro número:"));

let maior;
let menor;

if (n1 >= n2 && n1 >= n3) {
    maior = n1;
} else if (n2 >= n1 && n2 >= n3) {
    maior = n2;
} else {
    maior = n3;
}

if (n1 <= n2 && n1 <= n3) {
    menor = n1;
} else if (n2 <= n1 && n2 <= n3) {
    menor = n2;
} else {
    menor = n3;
}

alert("Maior: " + maior);
alert("Menor: " + menor);*/



/* EX 23 


let numero = Number(prompt("Digite um número inteiro:"));

if (numero % 2 === 0) {
    alert("Par");
} else {
    alert("Ímpar");
}*/



/* EX 24


let raio = Number(prompt("Digite o raio da circunferência:"));

let diametro = raio * 2;
let comprimento = 2 * Math.PI * raio;
let area = Math.PI * raio * raio;

alert("Diâmetro: " + diametro);
alert("Comprimento: " + comprimento.toFixed(2));
alert("Área: " + area.toFixed(2));*/



/* EX 25


let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18 && idade <= 67) {
    alert("Pode doar sangue");
} else {
    alert("Não pode doar sangue");
}*/



/* EX 26

let dia = Number(prompt("Digite o dia:"));
let mes = Number(prompt("Digite o mês:"));
let ano = Number(prompt("Digite o ano:"));

if (ano > 2013) {
    alert("Ano inválido");
}
else if (mes < 1 || mes > 12) {
    alert("Mês inválido");
}
else if (dia < 1 || dia > 31) {
    alert("Dia inválido");
}
else {
    alert("Data válida");
}*/



/* EX 27


let x = Number(prompt("Digite o valor de X:"));
let y = Number(prompt("Digite o valor de Y:"));

alert("Antes da troca:");
alert("X = " + x);
alert("Y = " + y);

let temp = x;
x = y;
y = temp;

alert("Depois da troca:");
alert("X = " + x);
alert("Y = " + y);*/

