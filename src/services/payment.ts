import axios from 'axios';
import FormData from 'form-data';
import {
    CreatePaymentParams,
    CreatePaymentResponse,
    GetPaymentsParams,
    GetPaymentsResponse,
} from '../types/payment';
import {
    generateCreatePaymentSign,
    generatePaymentsListSign,
} from '../utils/crypto';
import { handleAxiosError } from '../utils/errorHandler';

export class PaymentService {
    constructor(private apiId: string, private apiKey: string) {}

    public async createPayment(
        params: CreatePaymentParams,
    ): Promise<CreatePaymentResponse> {
        try {
            const sign = generateCreatePaymentSign(
                this.apiId,
                params,
                this.apiKey,
            );

            const form = new FormData();
            Object.entries({ ...params, sign }).forEach(([key, value]) => {
                if (value !== undefined && value !== null)
                    form.append(key, value);
            });

            const response = await axios.post<CreatePaymentResponse>(
                `https://anypay.io/api/create-payment/${this.apiId}`,
                form,
                { headers: form.getHeaders() },
            );

            return response.data;
        } catch (err) {
            handleAxiosError(err);
        }
    }

    public async getPayments(
        params: GetPaymentsParams,
    ): Promise<GetPaymentsResponse> {
        try {
            const sign = generatePaymentsListSign(
                this.apiId,
                this.apiKey,
                params.project_id,
            );

            const form = new FormData();
            Object.entries({ ...params, sign }).forEach(([key, value]) => {
                if (value !== undefined && value !== null)
                    form.append(key, value);
            });

            const response = await axios.post<GetPaymentsResponse>(
                `https://anypay.io/api/payments/${this.apiId}`,
                form,
                { headers: form.getHeaders() },
            );

            return response.data;
        } catch (err) {
            handleAxiosError(err);
        }
    }
}
