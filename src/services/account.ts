import {
    GetBalanceResponse,
    GetRatesResponse,
    GetCommissionsResponse,
} from '../types/account';
import {
    generateBalanceSign,
    generateRatesSign,
    generateCommissionsSign,
} from '../utils/crypto';
import { handleAxiosError } from '../utils/errorHandler';
import axios from 'axios';

export class AccountService {
    constructor(private apiId: string, private apiKey: string) {}

    public async getBalance(): Promise<GetBalanceResponse> {
        try {
            const sign = generateBalanceSign(this.apiId, this.apiKey);

            const response = await axios.get<GetBalanceResponse>(
                `https://anypay.io/api/balance/${this.apiId}`,
                { params: { sign } },
            );

            return response.data;
        } catch (err) {
            handleAxiosError(err);
        }
    }

    public async getRates(): Promise<GetRatesResponse> {
        try {
            const sign = generateRatesSign(this.apiId, this.apiKey);

            const response = await axios.get<GetRatesResponse>(
                `https://anypay.io/api/rates/${this.apiId}`,
                { params: { sign } },
            );

            return response.data;
        } catch (err) {
            handleAxiosError(err);
        }
    }

    public async getCommissions(
        projectId: number,
    ): Promise<GetCommissionsResponse> {
        try {
            const sign = generateCommissionsSign(
                this.apiId,
                projectId,
                this.apiKey,
            );

            const response = await axios.get<GetCommissionsResponse>(
                `https://anypay.io/api/commissions/${this.apiId}`,
                { params: { project_id: projectId, sign } },
            );

            return response.data;
        } catch (err) {
            handleAxiosError(err);
        }
    }
}
