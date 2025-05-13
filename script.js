function selecionarPratos() {
  var menu1 = prompt("Insira o número do menu que deseja:");
  var menu2 = prompt("Insira o número do menu que deseja:");
  var prato1 = menu1;
  var prato2 = menu2;

  if (prato1 && prato2) {
    if (prato1 && prato2 == 1) {
      alert("Prato escolhido foi Feijao com arroz e Batatas fritas.");
    } else if (prato1 == 1 && prato2 == 2) {
      alert("O prato escolhido foi feijao com arroz e Bife de carne.");
    } else if (prato1 == 1 && prato2 == 3) {
      alert("O prato escolhido foi feijao com arroz e Bife de frango.");
    } else if (prato1 == 1 && prato2 == 4) {
      alert("O prato escolhido foi feijao com arroz e Farofa de calabresa.");
    } else if (prato1 == 1 && prato2 == 5) {
      alert("O prato escolhido foi feijao com arroz e Pudim.");
    } else if (prato1 == 2 && prato2 == 1) {
      alert("O prato escolhido Massa bolonhesa e Batatas fritas.");
    } else if (prato1 == 2 && prato2 == 2) {
      alert("O prato escolhido Massa bolonhesa e Bife de carne.");
    } else if (prato1 == 2 && prato2 == 3) {
      alert("O prato escolhido Massa bolonhesa e Bife de frango.");
    } else if (prato1 == 2 && prato2 == 4) {
      alert("O prato escolhido Massa bolonhesa e Farofa de calabresa.");
    } else if (prato1 == 2 && prato2 == 5) {
      alert("O prato escolhido Massa bolonhesa e Pudim.");
    } else if (prato1 == 3 && prato2 == 1) {
      alert("O prato escolhido foi Arroz de tomate e Batatas fritas.");
    } else if (prato1 == 3 && prato2 == 2) {
      alert("O prato escolhido foi Arroz de tomate e Bife de carne.");
    } else if (prato1 == 3 && prato2 == 3) {
      alert("O prato escolhido foi Arroz de tomate e Bife de frango.");
    } else if (prato1 == 3 && prato2 == 4) {
      alert("O prato escolhido foi Arroz de tomate e Farofa de calabresa.");
    } else if (prato1 == 3 && prato2 == 5) {
      alert("O prato escolhido foi Arroz de tomate e Pudim.");
    } else if (prato1 == 4 && prato2 == 1) {
      alert("O prato escolhido foi Spaghetti e Batatas fritas.");
    } else if (prato1 == 4 && prato2 == 2) {
      alert("O prato escolhido foi Spaghetti e Bife de carne.");
    } else if (prato1 == 4 && prato2 == 3) {
      alert("O prato escolhido foi Spaghetti e Bife de frango.");
    } else if (prato1 == 4 && prato2 == 4) {
      alert("O prato escolhido foi Spaghetti e Farofa de calabresa.");
    } else if (prato1 == 4 && prato2 == 5) {
      alert("O prato escolhido foi Spaghetti e Pudim.");
    } else if (prato1 == 5 && prato2 == 1) {
      alert("O prato escolhido foi Carbonara e Batatas fritas.");
    } else if (prato1 == 5 && prato2 == 2) {
      alert("O prato escolhido foi Carbonara e Bife de Carne.");
    } else if (prato1 == 5 && prato2 == 3) {
      alert("O prato escolhido foi Carbonara e Bife de frango.");
    } else if (prato1 == 5 && prato2 == 4) {
      alert("O prato escolhido foi Carbonara e Farofa de calabresa.");
    } else if (prato1 == 5 && prato2 == 5) {
      alert("O prato escolhido foi Carbonara e Pudim.");
    }
  } else {
    alert("Não foi selecionado nenhum prato.");
  }
}
