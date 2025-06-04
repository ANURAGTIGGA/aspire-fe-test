export function generateNewCardDetails(name: string) {
    const cardNumberSeries = "1234-5678-9101-";
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const newCardNumber = cardNumberSeries + randomNumber;

    const randomCVV = Math.floor(100 + Math.random() * 900);
    const today = new Date();
    const yearArr = String(today.getFullYear()).split('');
    const year = yearArr[2] + yearArr[3];
    const month = today.getMonth() + 1;
    const expiry = month + "/" + (Number(year) + 5);

    return {
        "id": "",
        "cardholder": name,
        "cardNumber": newCardNumber,
        "expiryDate": expiry,
        "cvv": String(randomCVV),
        "networkType": "visa",
        "cardType": "debit",
        "freeze": false
    }
}