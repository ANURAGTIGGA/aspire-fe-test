export interface CardType {
    "id": string;
    "cardholder": string;
    "cardNumber": string;
    "expiryDate": string;
    "cvv": string;
    "networkType": string;
    "cardType": string;
}

export interface TransactionType {
    "id": string;
    "amount": string;
    "currency": string;
    "type": string;
    "date": string;
    "merchantName": string;
    "merchantType": string;
    "cardType": string;
}