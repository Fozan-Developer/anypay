import { GetIpNotificationResponse } from '../types/api';
import { generateIpNotificationSign } from '../utils/crypto';
import { handleAxiosError } from '../utils/errorHandler';
import FormData from 'form-data';
import axios from 'axios';

export class ApiService {
    constructor(private apiId: string, private apiKey: string) {}

    public async getIpNotification(): Promise<GetIpNotificationResponse> {
        try {
            const sign = generateIpNotificationSign(this.apiId, this.apiKey);

            const form = new FormData();
            form.append('sign', sign);

            const response = await axios.post<GetIpNotificationResponse>(
                `https://anypay.io/api/ip-notification/${this.apiId}`,
                form,
                { headers: form.getHeaders() },
            );

            return response.data;
        } catch (err) {
            handleAxiosError(err);
        }
    }
}
