export interface CreatePayoutParams {
    payout_id: number;
    payout_type: string;
    amount: number;
    wallet: string;
    wallet_currency?: string;
    wallet_bank?: string;
    commission_type?: 'payment' | 'balance';
    status_url?: string;
}

export interface PayoutResult {
    transaction_id: number;
    payout_id: number;
    payout_type: string;
    status: 'paid' | 'in_process' | 'canceled' | 'blocked';
    amount: number;
    commission: number;
    commission_type: 'payment' | 'balance';
    rate: number;
    wallet: string;
    balance: number;
    date: string;
    complete_date: string;
}

export interface CreatePayoutResponse {
    result: PayoutResult;
}

export interface PayoutItem {
    transaction_id: number;
    payout_id: number;
    payout_type: string;
    status: 'paid' | 'in_process' | 'canceled' | 'blocked';
    amount: number;
    commission: number;
    commission_type: 'payment' | 'balance';
    rate?: number;
    wallet: string;
    date: string;
    complete_date: string;
}

export interface GetPayoutsParams {
    trans_id?: number;
    payout_id?: number;
    offset?: number;
}

export interface GetPayoutsResponse {
    result: {
        total: number;
        payouts: Record<number, PayoutItem>;
    };
}
