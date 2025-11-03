# AnyPay SDK

Универсальная библиотека для работы с [AnyPay API](https://anypay.io), позволяющая управлять платежами, выплатами и балансом напрямую из Node.js; TypeScript.

---

## Содержание

-   [Установка](#установка)
-   [Инициализация клиента](#инициализация-клиента)
-   [Сервисы](#сервисы)
    -   [AccountService](#accountservice)
    -   [PaymentService](#paymentservice)
    -   [PayoutService](#payoutservice)
    -   [ApiService](#apiservice)
-   [Обработка ошибок](#обработка-ошибок)
-   [Примеры](#примеры)
-   [Типы](#типы)

---

## Установка

```bash
npm install anypay-ts
# или
yarn add anypay-ts
```

---

## Инициализация клиента

```ts
import { AnyPayClient } from 'anypay-ts';

const client = new AnyPayClient('API_ID', 'API_KEY');
```

`API_ID` и `API_KEY` выдаются в панели управления AnyPay.

---

## Сервисы

### AccountService

Для работы с аккаунтом, балансом, комиссиями и курсами валют.

```ts
const balance = await client.account.getBalance();
console.log(balance.result.balance); // Баланс в рублях

const rates = await client.account.getRates();
console.log(rates.result.in.usd); // Курс USD на прием

const commissions = await client.account.getCommissions(projectId);
console.log(commissions.result.qiwi); // Комиссия по Qiwi
```

---

### PaymentService

Для создания и получения платежей.

```ts
// Создание платежа
const payment = await client.payment.createPayment({
    project_id: 123,
    pay_id: 456,
    amount: 1000,
    currency: 'rub',
    desc: 'Товар',
    method: 'qiwi',
});
console.log(payment.result.transaction_id);

// Получение списка платежей
const paymentsList = await client.payment.getPayments({ project_id: 123 });
console.log(paymentsList.result.total);
```

---

### PayoutService

Для создания выплат и получения их списка.

```ts
// Создание выплаты
const payout = await client.payout.createPayout({
    payout_id: 10001,
    payout_type: 'qiwi',
    amount: 500,
    wallet: '79990001122',
});
console.log(payout.result.status);

// Получение списка выплат
const payouts = await client.payout.getPayouts();
console.log(payouts.result.total);
```

---

### ApiService

Для получения актуальных IP адресов сервиса AnyPay:

```ts
const ips = await client.api.getIpNotification();
console.log(ips.result.ip);
```

---

## Обработка ошибок

Все методы библиотеки выбрасывают `AnyPayError` с полями:

```ts
try {
    const balance = await client.account.getBalance();
} catch (err) {
    console.error(err.message);
    console.error(err.status); // HTTP статус
    console.error(err.code); // Код ошибки AnyPay
}
```

---

## Примеры

```ts
import { AnyPayClient } from 'anypay-ts';

const client = new AnyPayClient('API_ID', 'API_KEY');

async function main() {
    const balance = await client.account.getBalance();
    console.log(balance.result.balance);

    const payments = await client.payment.getPayments({ project_id: 123 });
    console.log(payments.result.total);
}

main();
```

---

## Типы

Типы данных находятся в `src/types`:

-   `account.ts` — баланс, комиссии, курсы
-   `payment.ts` — создание и получение платежей
-   `payout.ts` — создание и получение выплат
-   `api.ts` — IP нотификации

---

## Лицензия

MIT © 2025
