export interface GetBalanceResponse {
    result: {
        balance: number;
    };
}

export interface Rates {
    [currency: string]: number;
}

export interface GetRatesResponse {
    result: {
        in: Rates;
        out: Rates;
    };
}

export interface Commissions {
    [method: string]: number;
}

export interface GetCommissionsResponse {
    result: Commissions;
}
