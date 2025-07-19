export class Transaction {
  constructor(
    public id: string,
    public customerId: string,
    public productId: string,
    public quantity: number,
    public baseFee: number,
    public deliveryFee: number,
    public totalAmount: number,
    public status: string,
    public wompiTransactionId: string | null,
    public referenceCode: string,
  ) {}
}