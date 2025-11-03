import {
    CreatePayoutParams,
    CreatePayoutResponse,
    GetPayoutsParams,
    GetPayoutsResponse,
} from '../types/payout';
import { generateCreatePayoutSign, generatePayoutsSign } from '../utils/crypto';
import { handleAxiosError } from '../utils/errorHandler';
import FormData from 'form-data';
import axios from 'axios';

export class PayoutService {
    constructor(private apiId: string, private apiKey: string) {}

    public async createPayout(
        params: CreatePayoutParams,
    ): Promise<CreatePayoutResponse> {
        try {
            const sign = generateCreatePayoutSign(
                this.apiId,
                params.payout_id,
                params.payout_type,
                params.amount,
                params.wallet,
                this.apiKey,
            );

            const form = new FormData();
            Object.entries({ ...params, sign }).forEach(([key, value]) => {
                if (value !== undefined && value !== null)
                    form.append(key, value);
            });

            const response = await axios.post<CreatePayoutResponse>(
                `https://anypay.io/api/create-payout/${this.apiId}`,
                form,
                { headers: form.getHeaders() },
            );

            return response.data;
        } catch (err) {
            handleAxiosError(err);
        }
    }

    public async getPayouts(
        params: GetPayoutsParams = {},
    ): Promise<GetPayoutsResponse> {
        try {
            const sign = generatePayoutsSign(this.apiId, this.apiKey);

            const form = new FormData();
            Object.entries({ ...params, sign }).forEach(([key, value]) => {
                if (value !== undefined && value !== null)
                    form.append(key, value);
            });

            const response = await axios.post<GetPayoutsResponse>(
                `https://anypay.io/api/payouts/${this.apiId}`,
                form,
                { headers: form.getHeaders() },
            );

            return response.data;
        } catch (err) {
            handleAxiosError(err);
        }
    }
}
