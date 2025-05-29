function saveCard(card) {
  // Função que pega as cartas salvas do localStorage
  const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];

  // Verifica se o card já está salvo através do id
  const alreadySaved = savedCards.some(saved => saved.id === card.id);

  if (alreadySaved) {
    alert('Carta já salva!');
    return;
  }

  // Permite salvar a carta no localstorage
  savedCards.push(card);
  localStorage.setItem('savedCards', JSON.stringify(savedCards));

  alert('Carta salva com sucesso!');
}
