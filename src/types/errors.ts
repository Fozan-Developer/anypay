export interface AnyPayError {
    code: string;
    message: string;
}

// Можно добавить перечисление для удобства
export enum AnyPayErrorCode {
    InvalidRequest = '100',
    AuthError = '101',
    InvalidSign = '102',
    ApiDisabled = '103',
    IpRestriction = '104',
    TooManyRequests = '105',
    InvalidProjectId = '200',
    ProjectInactive = '201',
    InvalidPayId = '202',
    InvalidAmount = '203',
    AmountTooLow = '204',
    AmountTooHigh = '205',
    InvalidCurrency = '206',
    InvalidPaymentMethod = '207',
    PaymentMethodUnavailable = '208',
    InvalidMethodCurrency = '209',
    MissingDescription = '210',
    InvalidEmail = '211',
    InvalidPhone = '212',
    InvalidSuccessUrl = '213',
    InvalidFailUrl = '214',
    PaymentLinkError = '215',
    MobileServiceUnavailable = '216',
    InvalidPaymentDirection = '300',
    InvalidAccountNumber = '301',
    InvalidCommissionType = '302',
    InvalidPaymentAmount = '303',
    InvalidPayoutId = '304',
    InsufficientBalance = '305',
    PayoutAmountTooLow = '306',
    PayoutAmountTooHigh = '307',
    InvalidStatusUrl = '308',
    InternalError = '309',
    OperationForbidden = '310',
    PaymentDirectionUnavailable = '311',
    InvalidBank = '312',
}
