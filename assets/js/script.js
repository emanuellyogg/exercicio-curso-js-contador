function contar() {
  // document.querySelector('#showres').innerHTML = '';

  let start = document.querySelector('input#txtstart');
  let end = document.querySelector('input#txtend');
  let passo = document.querySelector('input#txtpasso');
  let res = document.querySelector('p#showres');
  let result = ''; //inicia a variável em 0

  if (start.value.length == 0 || end.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam dados!');
    return;
  }

  start = Number(start.value);
  end = Number(end.value);
  passo = Number(passo.value);
  if (passo <= 0) {
    window.alert('Passo inválido! Considerado Passo 1');
    passo = 1;
  }

  if (start < end) {
    //contagem crescente
    for (let c = start; c <= end; c += passo) {
      result += `${c} \u{2B50}`; // inserir emoji, site: unicode emoji list
    }
    result += `\u{1F6D1}`;
  } else {
    //contagem regressiva
    for (let c = start; c >= end; c -= passo) {
      result += `${c} \u{2B50}`;
    }
    result += `\u{1F6D1}`;
  }
  res.innerHTML = result;
}