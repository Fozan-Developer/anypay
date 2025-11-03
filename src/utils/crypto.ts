import crypto from 'crypto';

/**
 * Генерация подписи для создания нового платежа
 * Формат хэша: SHA256('create-payment[API_ID][project_id][pay_id][amount][currency][desc][method][API_KEY]')
 */
export function generateCreatePaymentSign(
    apiId: string,
    params: {
        project_id: number | string;
        pay_id: number | string;
        amount: number | string;
        currency: string;
        desc: string;
        method: string;
    },
    apiKey: string,
): string {
    const str = `create-payment${apiId}${params.project_id}${params.pay_id}${params.amount}${params.currency}${params.desc}${params.method}${apiKey}`;
    return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * Генерация подписи для запроса списка транзакций
 * Формат хэша: SHA256('payments[API_ID][project_id][API_KEY]')
 */
export function generatePaymentsListSign(
    apiId: string,
    apiKey: string,
    projectId: number,
): string {
    const str = `payments${apiId}${projectId}${apiKey}`;
    return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * Генерация подписи для запроса баланса проекта
 * Формат хэша: SHA256('balance[API_ID][API_KEY]')
 */
export function generateBalanceSign(apiId: string, apiKey: string): string {
    const str = `balance${apiId}${apiKey}`;
    return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * Генерация подписи для запроса курсов конвертации валют
 * Формат хэша: SHA256('rates[API_ID][API_KEY]')
 */
export function generateRatesSign(apiId: string, apiKey: string): string {
    const str = `rates${apiId}${apiKey}`;
    return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * Генерация подписи для запроса списка комиссий проекта
 * Формат хэша: SHA256('commissions[API_ID][project_id][API_KEY]')
 */
export function generateCommissionsSign(
    apiId: string,
    projectId: number,
    apiKey: string,
): string {
    const str = `commissions${apiId}${projectId}${apiKey}`;
    return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * Генерация подписи для запроса актуальных IP адресов уведомлений
 * Формат хэша: SHA256('ip-notification[API_ID][API_KEY]')
 */
export function generateIpNotificationSign(
    apiId: string,
    apiKey: string,
): string {
    const str = `ip-notification${apiId}${apiKey}`;
    return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * Генерация подписи для создания выплаты
 * Формат хэша: SHA256('create-payout[API_ID][payout_id][payout_type][amount][wallet][API_KEY]')
 */
export function generateCreatePayoutSign(
    apiId: string,
    payoutId: number,
    payoutType: string,
    amount: number,
    wallet: string,
    apiKey: string,
): string {
    const str = `create-payout${apiId}${payoutId}${payoutType}${amount}${wallet}${apiKey}`;
    return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * Генерация подписи для запроса списка выплат
 * Формат хэша: SHA256('payouts[API_ID][API_KEY]')
 */
export function generatePayoutsSign(apiId: string, apiKey: string): string {
    const str = `payouts${apiId}${apiKey}`;
    return crypto.createHash('sha256').update(str).digest('hex');
}
