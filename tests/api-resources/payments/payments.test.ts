// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Paymaxis from 'paymaxis';
import { Response } from 'node-fetch';

const client = new Paymaxis({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.payments.create({ currency: 'EUR', paymentType: 'DEPOSIT' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.payments.create({
      currency: 'EUR',
      paymentType: 'DEPOSIT',
      additionalParameters: { bankCode: 'ABHY0065032', countryOfBirth: 'CY' },
      amount: 1e-18,
      billingAddress: {
        addressLine1: '7, Sunny street',
        addressLine2: 'Office 3',
        city: 'Limassol',
        countryCode: 'CY',
        postalCode: '4141',
        state: 'CA',
      },
      card: {
        cardholderName: 'John Smith',
        cardNumber: '4000 0000 0000 0002',
        cardSecurityCode: '010',
        expiryMonth: '01',
        expiryYear: '2030',
      },
      customer: {
        accountName: 'accountName',
        accountNumber: 'accountNumber',
        bank: 'bank',
        bankBranch: 'bankBranch',
        citizenshipCountryCode: 'AU',
        dateOfBirth: '2001-12-03',
        dateOfFirstDeposit: '2021-01-01',
        depositsAmount: 5000,
        depositsCnt: 5000,
        documentNumber: 'documentNumber',
        documentType: 'AR_CDI',
        email: 'my@email.com',
        firstName: 'John',
        kycStatus: true,
        lastName: 'Smith',
        locale: 'ru',
        paymentInstrumentKycStatus: true,
        phone: '357 123123123',
        referenceId: 'customer_123',
        routingGroup: 'VIP',
        withdrawalsAmount: 1000,
        withdrawalsCnt: 1000,
      },
      description: 'Deposit 123 via TEST shop',
      parentPaymentId: '91d27876e87f4b22b3ecd53924bf973d',
      paymentMethod: 'BASIC_CARD',
      recurringToken: 'recurringToken',
      referenceId: 'payment_id=123;custom_ref=456',
      returnUrl: 'https://mywebsite.com/{id}/{referenceId}/{state}/{type}',
      startRecurring: true,
      subscription: {
        frequency: 2,
        amount: 99.99,
        description: 'Subscription to service',
        frequencyUnit: 'MINUTE',
        numberOfCycles: 12,
        retryStrategy: {
          frequency: 2,
          numberOfCycles: 12,
          amountAdjustments: [1, 1, 1],
          frequencyUnit: 'MINUTE',
        },
        startTime: '2030-12-25T10:11:12',
      },
      webhookUrl: 'https://mywebsite.com/webhooks',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.payments.retrieve('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.retrieve('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Paymaxis.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.payments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.payments.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Paymaxis.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.list(
        {
          created: { gte: '2021-10-13T10:26:18', lt: '2021-10-13T10:39:34' },
          limit: 1,
          offset: 0,
          updated: { gte: '2021-10-13T10:26:18', lt: '2021-10-13T10:39:34' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Paymaxis.NotFoundError);
  });
});
