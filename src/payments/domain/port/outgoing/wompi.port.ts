export interface WompiPort {
    createTransaction(params: {
        amountInCents: number;
        currency: string;
        customerEmail: string;
        paymentSourceId: string;
        reference: string;
    }): Promise<{
        status: 'APPROVED' | 'DECLINED';
        transactionId: string;
    }>;
}