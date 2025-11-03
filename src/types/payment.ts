export interface CreatePaymentParams {
    project_id: number;
    pay_id: number | string;
    amount: number;
    currency: string;
    desc: string;
    email: string;
    phone?: string;
    method: string;
    method_currency?: string;
    success_url?: string;
    fail_url?: string;
    lang?: 'ru' | 'en';
    extra_params?: Record<string, string | number>;
}

export interface PaymentData {
    amount: number;
    currency: string;
    account: string;
    bank?: string;
}

export interface CreatePaymentResponse {
    result: {
        transaction_id: number;
        pay_id: number;
        status: string;
        payment_url: string;
        payment_data: PaymentData;
    };
}

export interface GetPaymentsParams {
    project_id: number;
    trans_id?: number;
    pay_id?: number;
    offset?: number;
}

export interface PaymentInfo {
    transaction_id: number;
    pay_id: number;
    status: string;
    method: string;
    amount: number;
    currency: string;
    profit: number;
    email: string;
    desc: string;
    date: string;
    pay_date: string;
}

export interface GetPaymentsResponse {
    result: {
        total: number;
        payments: Record<string, PaymentInfo>;
    };
}

export interface AnyPayConfig {
    merchantId: number;
    secretKey: string;
}

export interface PaymentRequest {
    amount: number;
    currency: string;
    description?: string;
    customerId?: string;
}

export interface PaymentResponse {
    id: string;
    status: 'pending' | 'completed' | 'failed';
    amount: number;
    currency: string;
    createdAt: string;
    updatedAt: string;
}

export interface AnyPayError {
    code: string;
    message: string;
}

export interface InitPaymentParams {
    merchant_id: number;
    pay_id: number | string;
    amount: number;
    currency: string;
    desc?: string;
    email?: string;
    phone?: string;
    method?: string;
    success_url?: string;
    fail_url?: string;
    lang?: 'ru' | 'en';
    extra_params?: Record<string, string | number>;
}

export type SignMethod = 'MD5' | 'SHA256';
