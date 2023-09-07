var idade = 67
console.log(`A sua idade é de ${idade} anos de idade`)
if (idade < 16){
    console.log('Não vota')
} else if (idade >= 16 && idade < 18 || idade > 65) { //se idade for igual ou maior que 16 e menor que 18, o voto é opcional, se idade for diferente e igual a 65, o voto é opcional.
    console.log('Voto Opcional') 
} else {
    console.log('Voto Obrigatório')
}
