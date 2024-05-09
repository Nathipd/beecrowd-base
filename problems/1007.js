// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// Entrada
// O arquivo de entrada contém 4 valores inteiros.
// Saída
// Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

export function problem (lines){
    var A = Number.parseFloat(lines[0])
    var B = Number.parseFloat(lines[1])
    var C = Number.parseFloat(lines[2])
    var D = Number.parseFloat(lines[3])  
    
    var dif = ((A*B)-(C*D))

    console.log(`DIFERENCA = ${dif}`)
}