import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { WompiPort } from 'src/payments/domain/port/outgoing/wompi.port';

@Injectable()
export class WompiAdapter implements WompiPort {
    private readonly wompiUrl = 'https://api-sandbox.co.uat.wompi.dev/v1';

    constructor(private readonly http: HttpService) {}

    async createTransaction(params: {
        amountInCents: number;
        currency: string;
        customerEmail: string;
        paymentSourceId: string;
        reference: string;
    }): Promise<{ status: 'APPROVED' | 'DECLINED'; transactionId: string }> {
        const { data } = await firstValueFrom(
            this.http.post(
                `${this.wompiUrl}/transactions`,
                {
                    amount_in_cents: params.amountInCents,
                    currency: params.currency,
                    customer_email: params.customerEmail,
                    payment_source_id: params.paymentSourceId,
                    reference: params.reference,
                },
                {
                    headers: { Authorization: `Bearer ${process.env.WOMPI_PRIVATE_KEY}` },
                },
            )
        );

        return {
            status: data.data.status,
            transactionId: data.data.id,
        };
    }
}
