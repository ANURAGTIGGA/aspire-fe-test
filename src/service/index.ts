export function fetchCards() {
  return new Promise((resolve) => {
    setTimeout(async () => {
        const response = await fetch('/cards.json');
        const data = await response.json();
      resolve(data.cards);
    }, 550); // simulate network delay
  });
}

export function fetchTransactions() {
  return new Promise((resolve) => {
    setTimeout(async () => {
        const response = await fetch('/transactions.json');
        const data = await response.json();
      resolve(data.transactions);
    }, 400); // simulate network delay
  });
}