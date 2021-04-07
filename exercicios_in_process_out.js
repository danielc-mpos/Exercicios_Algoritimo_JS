//Exercícios Entrada Processamento Saida JS

/*

    1 - Elaborar um programa que leia o valor de um jantar. 
    Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

    Ex:
        Valor do Jantar: R$ 80.00
        Taxa do Garçom: R$ 8.00
        Total a pagar: R$ 88.00

*/

   var valorJantar = Number(prompt("Valor do jantar: "));
   var taxaDoGarcon = ValordoJantar * 0.1;
   var valorTotal = ValordoJantar + taxaDoGarcon

   alert(`Valor do Jantar: R$ ${valorJantar.toFixed(2)}`);
   alert(`Taxa do Garçon: R$ ${taxaDoGarcon.toFixed(2)}`);
   alert(`Valor Total: R$ ${valorTotal.toFixed(2)}`);




/*

    2 - Elaborar um programa que leia a duração de uma viagem em dias e horas.
    Calcule e informe a duraão total da viagem em número de horas.


    Ex:
        Nº Dias: 2
        Nº Horas: 5
        Total de Horas: 53

*/

   var numDias = Number(prompt("Número de dias"));
   var numHoras = Number(prompt("Número de dias"));
   var horasTotais = (numDias*24) + numHoras;

   alert(`Número de dias: ${numDias}`);
   alert(`Número de horas: ${numHoras}`);
   alert(`Total de horas: ${horasTotais}`);



/*
    3 - Elaborar um programa que leia um número.
    Calcule e informe os seus vizinhos, ou seja, o número anterior e o número posterior  

    Exemplo:
        Número: 15
        Vizinhos: 14 e 16

*/

    var numero = Number(prompt("Digite um número "));
    alert(`Anterior: ${numero - 1} \n Posterior: ${numero+1}`);

/*
    4 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la.
    Calcule e informe o valor a ser pago por cliente.

    Exemplo:
        Valor da conta: R$ 90.00
        Número de clientes: 3
        Valor por cliente: 30.00
*/
   
     var valorConta = Number(prompt( " Valor da Conta: "));
     var numClientes = Number(prompt( " Número de Clientes: " ));
     var valorporCliente = valorConta / 3;

     alert(`Valor da Conta: R$ ${valorConta.toFixed(2)}`);
     alert(`Número de Clientes: ${numClientes.toFixed(2)}`);
     alert(`Valor por Cliente: R$ ${valorporCliente.toFixed(2)}`);

/*
    5 - Elaborar um programa para uma loja, o qual leia o preço de um prouto e informe as opções de pagamento.
    Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

    Exemplo:
        Preço: R$ 60.00
        À vista: R$ 54.00
        Ou 3x de R$: 20.00
*/
   
     var precoNormal = Number(prompt( " Preço normal do Produto "));
     var precoaVista = precoNormal % 10;
     var precoDividido = precoNormal / 3;
     
     alert(`Preço Normal: R$ ${precoNormal.toFixed(2)}`);
     alert(`Preço à vista: R$ ${precoaVista.toFixed(2)}`);
     alert(`Preço Dividido: R$ ${precoDividido.toFixed(2)}`);

/*
    6 - Elaborar um programa que leia 3 notas de um aluno em uma determinada disciplina.
    Calcule e informe a média das notas.

    Exemplo:
        1ª Nota: 7.5
        2ª Nota: 8.0
        3ª Nota: 6.4
        Média: 7.3
*/

     var notaUm = Number(prompt(" Primeira nota "));
     var notaDois = Number(prompt(" Segunda nota "));
     var notaTres = Number(prompt(" Terceira nota "));
     var notaMedia = (notaUm+notaDois+notaTres) / 3;

     alert(`Média do Aluno: R$ ${notaMedia.toFixed(2)}`);
