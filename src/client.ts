import { PaymentService } from './services/payment';
import { AccountService } from './services/account';
import { ApiService } from './services/api';
import { PayoutService } from './services/payout';

export class AnyPayClient {
    public payment: PaymentService;
    public account: AccountService;
    public api: ApiService;
    public payout: PayoutService;

    constructor(apiId: string, apiKey: string) {
        this.payment = new PaymentService(apiId, apiKey);
        this.account = new AccountService(apiId, apiKey);
        this.api = new ApiService(apiId, apiKey);
        this.payout = new PayoutService(apiId, apiKey);
    }
}
