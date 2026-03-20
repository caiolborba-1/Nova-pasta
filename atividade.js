function somarNumeros(){
    let soma = 0;
    let continuar = true;

    while (continuar){
        let numero = parseFloat(prompt("digite um número para somar: "));
        if (!isNaN(numero)){
            soma += numero;

            console.log(soma);
        } else {
            alert("por favor, digite um número válido!");
        }
        continuar = confirm("deseja adicionar mais um número?");
    }
alert("a soma dos números é: " + soma);
}