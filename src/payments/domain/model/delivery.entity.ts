export class Delivery {
  constructor(
    public id: string,
    public transactionId: string,
    public deliveryAddress: string,
    public deliveryStatus: string,
    public createdAt: Date
  ) {}
}