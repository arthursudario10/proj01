let valorCompra = Number(prompt("Digite o valor da compra"));

valorCompra = Number(valorCompra);

   if (valorCompra >= 100) {
    let desconto = valorCompra *0.10;
    let valorFinal = valorCompra - desconto;

      alert("Você ganhou 10% de desconto!\n" + "Valor do desconto: RS " + desconto.toFixed(2) + "\n" + "Valor final: R$ " + valorFinal.toFixed(2));
   }