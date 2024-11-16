// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as OperationsAPI from './operations';
import { Operation, Operations } from './operations';

export class Payments extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Payment request, used for DEPOSITS, WITHDRAWALS and REFUNDS
   */
  create(body: PaymentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Payment> {
    return this._client.post('/api/v1/payments', { body, ...options });
  }

  /**
   * Find Payment by Id
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Payment> {
    return this._client.get(`/api/v1/payments/${id}`, options);
  }

  /**
   * Get a list of payments sorted by creation date (most recent first)
   */
  list(query?: PaymentListParams, options?: Core.RequestOptions): Core.APIPromise<PaymentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PaymentListResponse>;
  list(
    query: PaymentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/payments', { query, ...options });
  }
}

export interface Payment {
  result?: Payment.Result;

  /**
   * HTTP status code
   */
  status?: number;

  timestamp?: string;
}

export namespace Payment {
  export interface Result {
    /**
     * Payment Id
     */
    id?: string;

    /**
     * Amount sent to the payment provider
     */
    amount?: number;

    /**
     * Customer's billing address
     */
    billingAddress?: Result.BillingAddress;

    /**
     * Currency sent to the payment provider
     */
    currency?: string;

    customer?: Result.Customer;

    /**
     * Amount from payment request. Filled only if the request currency differs from
     * the currency sent to the payment provider.
     */
    customerAmount?: number;

    /**
     * Currency from payment request. Filled only if it differs from the currency sent
     * to the payment provider.
     */
    customerCurrency?: string;

    /**
     * Description of the transaction
     */
    description?: string;

    /**
     * Check 'Error Codes' section for details
     */
    errorCode?: string;

    /**
     * Provider fee. Filled only if supported by the provider.
     */
    externalFeeAmount?: number;

    /**
     * Provider fee currency. Filled only if supported by the provider.
     */
    externalFeeCurrency?: string;

    /**
     * Result code from external provider
     */
    externalResultCode?: string;

    /**
     * Initial transaction Id from payment request
     */
    parentPaymentId?: string;

    /**
     * Payment Method
     */
    paymentMethod?:
      | 'BASIC_CARD'
      | 'CRYPTO'
      | 'FLEXEPIN'
      | 'MACROPAY'
      | 'SKRILL'
      | 'PAYRETAILERS'
      | 'LOCALPAYMENT'
      | 'MONNET'
      | 'PAYPAL'
      | 'NETELLER'
      | 'TRUSTPAYMENTS'
      | 'PAYMAXIS'
      | 'GATE8TRANSACT'
      | 'TINK'
      | 'B2BINPAY'
      | 'CLICK'
      | 'MONETIX'
      | 'PERFECTMONEY'
      | 'VOLT'
      | 'KESSPAY'
      | 'BILLLINE'
      | 'NGENIUS'
      | 'ASTROPAY'
      | 'ALYCEPAY'
      | 'PIX'
      | 'BOLETO'
      | 'UPI'
      | 'PAYTM'
      | 'NETBANKING'
      | 'FINRAX'
      | 'SPOYNT'
      | 'XINPAY'
      | 'OMNIMATRIX'
      | 'DPOPAY'
      | 'EXTERNAL_HPP'
      | 'XANPAY'
      | 'INRPAY'
      | 'ARI10'
      | 'SOFORT'
      | 'GIROPAY'
      | 'PAYSAFECARD'
      | 'PAYSAFECASH'
      | 'OPEN_BANKING'
      | 'KLARNA'
      | 'SPEI'
      | 'PAYCASH'
      | 'RAPIPAGO'
      | 'PAGOFACIL'
      | 'RAPIDTRANSFER'
      | 'MOBILE_MONEY'
      | 'INTERAC'
      | 'INTERAC_ETO'
      | 'INTERAC_RTO'
      | 'INTERAC_ACH'
      | 'PICPAY'
      | 'MOLLIE'
      | 'TED'
      | 'ZIPAY'
      | 'PSE'
      | 'EFECTY'
      | 'BANKTRANSFER'
      | 'PEC'
      | 'OXXO'
      | 'WEBPAY'
      | 'PAGOEFECTIVO'
      | 'MIFINITY'
      | 'PAYPORT'
      | 'JETONCASH'
      | 'JETONWALLET'
      | 'NODA'
      | 'NODA_REVOLUT'
      | 'ALFAKIT'
      | 'PAYFUN'
      | 'EMANAT'
      | 'M10'
      | 'RUBPAY'
      | 'MONERCHY'
      | 'MUCHBETTER'
      | 'YAPILY'
      | 'INAI'
      | 'IMPS'
      | 'RTGS'
      | 'PAYID'
      | 'ZOTAPAY'
      | 'SBP'
      | 'P2P_CARD'
      | 'P2P_IBAN'
      | 'P2P_SBP'
      | 'P2P_MOBILE'
      | 'PUSH'
      | 'GATEIQ'
      | 'VIETTEL'
      | 'ZALO'
      | 'QR'
      | 'CUP'
      | 'CODI'
      | 'PAY2PLAY'
      | 'BKASH'
      | 'NAGAD'
      | 'ROCKET'
      | 'VIRTUAL_ACCOUNT'
      | 'MULTIBANCO'
      | 'BLIK'
      | 'MBWAY'
      | 'P24'
      | 'MISTERCASH'
      | 'MACH'
      | 'KHIPU'
      | 'NEFT'
      | 'STICPAY'
      | 'SBERPAY'
      | 'MOBILE_COMMERCE'
      | 'BINANCE_PAY'
      | 'MPAY'
      | 'CHEK'
      | 'KLAP_EFECTIVO'
      | 'KLAP_TRANSFERENCIA'
      | 'PAGO46'
      | 'HITES'
      | 'SERVIFACIL'
      | 'OPENPAYD'
      | 'FAWRY'
      | 'EPS'
      | 'IDEAL'
      | 'TRUSTLY'
      | 'USSD'
      | 'MPESA'
      | 'ENAIRA'
      | 'ONEVOUCHER'
      | 'BANCONTACT'
      | 'SWISH'
      | 'EFT'
      | 'GCASH'
      | 'PAYMAYA'
      | 'PAGO_MOVIL'
      | 'PAGO_MOVIL_INST'
      | 'BIOPAGO'
      | 'CASH'
      | 'VOUCHERRY'
      | 'APPLEPAY'
      | 'GOOGLEPAY'
      | 'BRITE'
      | 'VOUCHSTAR'
      | 'REVOLUT'
      | 'ONLINE_BANKING'
      | 'PROMPTPAY'
      | 'TRUEMONEY'
      | 'MOMOPAY_VN'
      | 'MOMOPAY_RW'
      | 'VNPAY_QR'
      | 'N26'
      | 'WISE'
      | 'PAYDO_WALLET'
      | 'PAPARA'
      | 'PAYOUT_SEPA_BATCH'
      | 'PAYOUT_NONSEPA_REQUEST';

    paymentMethodDetails?: Result.PaymentMethodDetails;

    /**
     * Payment Type
     */
    paymentType?: 'DEPOSIT' | 'WITHDRAWAL' | 'REFUND';

    /**
     * Token that can be used to continue the recurring chain
     */
    recurringToken?: string;

    /**
     * URL to redirect the customer
     */
    redirectUrl?: string;

    /**
     * referenceId from payment request
     */
    referenceId?: string;

    /**
     * Indicates whether this payment has started a recurring chain
     */
    startRecurring?: boolean;

    /**
     * Payment State
     */
    state?: 'CHECKOUT' | 'PENDING' | 'CANCELLED' | 'DECLINED' | 'COMPLETED';

    /**
     * The name of the provider that was used to process this payment
     */
    terminalName?: string;
  }

  export namespace Result {
    /**
     * Customer's billing address
     */
    export interface BillingAddress {
      /**
       * Line 1 of the address (e.g., Number, street, etc)
       */
      addressLine1?: string;

      /**
       * Line 2 of the address (e.g., Suite, apt)
       */
      addressLine2?: string;

      /**
       * City name
       */
      city?: string;

      /**
       * 2-character IS0-3166-1 country code
       */
      countryCode?: string;

      /**
       * Postal code
       */
      postalCode?: string;

      /**
       * State code
       */
      state?: string;
    }

    export interface Customer {
      /**
       * Customer account name in the provider's system. Used for some types of
       * withdrawals.
       */
      accountName?: string;

      /**
       * Customer account number in the provider's system. Used for some types of
       * withdrawals.
       */
      accountNumber?: string;

      /**
       * Customer bank. Used for some types of withdrawals.
       */
      bank?: string;

      /**
       * Customer bank branch. Used for some types of withdrawals.
       */
      bankBranch?: string;

      /**
       * Customer country of citizenship
       */
      citizenshipCountryCode?: string;

      dateOfBirth?: string;

      /**
       * Date of the first deposit from the customer
       */
      dateOfFirstDeposit?: string;

      /**
       * How much the customer has deposited, in base currency
       */
      depositsAmount?: number;

      /**
       * How many times the customer made a deposit
       */
      depositsCnt?: number;

      /**
       * An identifier for the customer assigned by a government authority
       */
      documentNumber?: string;

      /**
       * Document Type
       */
      documentType?:
        | 'AR_CDI'
        | 'AR_CUIL'
        | 'AR_CUIT'
        | 'AR_DNI'
        | 'AR_OTRO'
        | 'BR_CNPJ'
        | 'BR_CPF'
        | 'CL_OTRO'
        | 'CL_RUN'
        | 'CL_RUT'
        | 'CO_CC'
        | 'CO_CE'
        | 'CO_DL'
        | 'CO_DNI'
        | 'CO_NE'
        | 'CO_NIT'
        | 'CO_PP'
        | 'CO_SS'
        | 'CO_TI'
        | 'CR_CDI'
        | 'EC_DNI'
        | 'EC_PP'
        | 'EC_RUC'
        | 'GT_CUI'
        | 'GT_DPI'
        | 'GT_NIT'
        | 'MX_CURP'
        | 'MX_IFE'
        | 'MX_PP'
        | 'MX_RFC'
        | 'PA_CIP'
        | 'PE_CE'
        | 'PE_DNI'
        | 'PE_OTRO'
        | 'PE_PP'
        | 'PE_RUC';

      /**
       * Email address of the customer
       */
      email?: string;

      firstName?: string;

      /**
       * Indicates whether the customer has passed KYC verification
       */
      kycStatus?: boolean;

      lastName?: string;

      /**
       * Customer preferred display language
       */
      locale?: string;

      /**
       * Indicates whether the payment instrument (usually the card number) has passed
       * KYC verification
       */
      paymentInstrumentKycStatus?: boolean;

      /**
       * International phone number of the customer, without the '+'. Use a space as a
       * separator between the dialing country code and local phone number.
       */
      phone?: string;

      /**
       * Id of the customer assigned by Merchant
       */
      referenceId?: string;

      /**
       * Identify the customer as belonging to a specific group that is used for routing
       */
      routingGroup?: string;

      /**
       * How much the customer has withdrawn, in base currency
       */
      withdrawalsAmount?: number;

      /**
       * How many times the customer made a withdrawal
       */
      withdrawalsCnt?: number;
    }

    export interface PaymentMethodDetails {
      /**
       * Card expiration month (for BASIC_CARD payment method only)
       */
      cardExpiryMonth?: string;

      /**
       * Card expiration year (for BASIC_CARD payment method only)
       */
      cardExpiryYear?: string;

      /**
       * Cardholder name (for BASIC_CARD payment method only)
       */
      cardholderName?: string;

      /**
       * Card issuing country code (for BASIC_CARD payment method only)
       */
      cardIssuingCountryCode?: string;

      /**
       * Customer account Id in external system or masked card PAN
       */
      customerAccountNumber?: string;
    }
  }
}

export interface PaymentListResponse {
  /**
   * Indicates if there are more pages to return
   */
  hasMore?: boolean;

  result?: Array<PaymentListResponse.Result>;

  /**
   * HTTP status code
   */
  status?: number;

  timestamp?: string;
}

export namespace PaymentListResponse {
  export interface Result {
    /**
     * Payment Id
     */
    id?: string;

    /**
     * Amount sent to the payment provider
     */
    amount?: number;

    /**
     * Customer's billing address
     */
    billingAddress?: Result.BillingAddress;

    /**
     * Currency sent to the payment provider
     */
    currency?: string;

    customer?: Result.Customer;

    /**
     * Amount from payment request. Filled only if the request currency differs from
     * the currency sent to the payment provider.
     */
    customerAmount?: number;

    /**
     * Currency from payment request. Filled only if it differs from the currency sent
     * to the payment provider.
     */
    customerCurrency?: string;

    /**
     * Description of the transaction
     */
    description?: string;

    /**
     * Check 'Error Codes' section for details
     */
    errorCode?: string;

    /**
     * Provider fee. Filled only if supported by the provider.
     */
    externalFeeAmount?: number;

    /**
     * Provider fee currency. Filled only if supported by the provider.
     */
    externalFeeCurrency?: string;

    /**
     * Result code from external provider
     */
    externalResultCode?: string;

    /**
     * Initial transaction Id from payment request
     */
    parentPaymentId?: string;

    /**
     * Payment Method
     */
    paymentMethod?:
      | 'BASIC_CARD'
      | 'CRYPTO'
      | 'FLEXEPIN'
      | 'MACROPAY'
      | 'SKRILL'
      | 'PAYRETAILERS'
      | 'LOCALPAYMENT'
      | 'MONNET'
      | 'PAYPAL'
      | 'NETELLER'
      | 'TRUSTPAYMENTS'
      | 'PAYMAXIS'
      | 'GATE8TRANSACT'
      | 'TINK'
      | 'B2BINPAY'
      | 'CLICK'
      | 'MONETIX'
      | 'PERFECTMONEY'
      | 'VOLT'
      | 'KESSPAY'
      | 'BILLLINE'
      | 'NGENIUS'
      | 'ASTROPAY'
      | 'ALYCEPAY'
      | 'PIX'
      | 'BOLETO'
      | 'UPI'
      | 'PAYTM'
      | 'NETBANKING'
      | 'FINRAX'
      | 'SPOYNT'
      | 'XINPAY'
      | 'OMNIMATRIX'
      | 'DPOPAY'
      | 'EXTERNAL_HPP'
      | 'XANPAY'
      | 'INRPAY'
      | 'ARI10'
      | 'SOFORT'
      | 'GIROPAY'
      | 'PAYSAFECARD'
      | 'PAYSAFECASH'
      | 'OPEN_BANKING'
      | 'KLARNA'
      | 'SPEI'
      | 'PAYCASH'
      | 'RAPIPAGO'
      | 'PAGOFACIL'
      | 'RAPIDTRANSFER'
      | 'MOBILE_MONEY'
      | 'INTERAC'
      | 'INTERAC_ETO'
      | 'INTERAC_RTO'
      | 'INTERAC_ACH'
      | 'PICPAY'
      | 'MOLLIE'
      | 'TED'
      | 'ZIPAY'
      | 'PSE'
      | 'EFECTY'
      | 'BANKTRANSFER'
      | 'PEC'
      | 'OXXO'
      | 'WEBPAY'
      | 'PAGOEFECTIVO'
      | 'MIFINITY'
      | 'PAYPORT'
      | 'JETONCASH'
      | 'JETONWALLET'
      | 'NODA'
      | 'NODA_REVOLUT'
      | 'ALFAKIT'
      | 'PAYFUN'
      | 'EMANAT'
      | 'M10'
      | 'RUBPAY'
      | 'MONERCHY'
      | 'MUCHBETTER'
      | 'YAPILY'
      | 'INAI'
      | 'IMPS'
      | 'RTGS'
      | 'PAYID'
      | 'ZOTAPAY'
      | 'SBP'
      | 'P2P_CARD'
      | 'P2P_IBAN'
      | 'P2P_SBP'
      | 'P2P_MOBILE'
      | 'PUSH'
      | 'GATEIQ'
      | 'VIETTEL'
      | 'ZALO'
      | 'QR'
      | 'CUP'
      | 'CODI'
      | 'PAY2PLAY'
      | 'BKASH'
      | 'NAGAD'
      | 'ROCKET'
      | 'VIRTUAL_ACCOUNT'
      | 'MULTIBANCO'
      | 'BLIK'
      | 'MBWAY'
      | 'P24'
      | 'MISTERCASH'
      | 'MACH'
      | 'KHIPU'
      | 'NEFT'
      | 'STICPAY'
      | 'SBERPAY'
      | 'MOBILE_COMMERCE'
      | 'BINANCE_PAY'
      | 'MPAY'
      | 'CHEK'
      | 'KLAP_EFECTIVO'
      | 'KLAP_TRANSFERENCIA'
      | 'PAGO46'
      | 'HITES'
      | 'SERVIFACIL'
      | 'OPENPAYD'
      | 'FAWRY'
      | 'EPS'
      | 'IDEAL'
      | 'TRUSTLY'
      | 'USSD'
      | 'MPESA'
      | 'ENAIRA'
      | 'ONEVOUCHER'
      | 'BANCONTACT'
      | 'SWISH'
      | 'EFT'
      | 'GCASH'
      | 'PAYMAYA'
      | 'PAGO_MOVIL'
      | 'PAGO_MOVIL_INST'
      | 'BIOPAGO'
      | 'CASH'
      | 'VOUCHERRY'
      | 'APPLEPAY'
      | 'GOOGLEPAY'
      | 'BRITE'
      | 'VOUCHSTAR'
      | 'REVOLUT'
      | 'ONLINE_BANKING'
      | 'PROMPTPAY'
      | 'TRUEMONEY'
      | 'MOMOPAY_VN'
      | 'MOMOPAY_RW'
      | 'VNPAY_QR'
      | 'N26'
      | 'WISE'
      | 'PAYDO_WALLET'
      | 'PAPARA'
      | 'PAYOUT_SEPA_BATCH'
      | 'PAYOUT_NONSEPA_REQUEST';

    paymentMethodDetails?: Result.PaymentMethodDetails;

    /**
     * Payment Type
     */
    paymentType?: 'DEPOSIT' | 'WITHDRAWAL' | 'REFUND';

    /**
     * Token that can be used to continue the recurring chain
     */
    recurringToken?: string;

    /**
     * URL to redirect the customer
     */
    redirectUrl?: string;

    /**
     * referenceId from payment request
     */
    referenceId?: string;

    /**
     * Indicates whether this payment has started a recurring chain
     */
    startRecurring?: boolean;

    /**
     * Payment State
     */
    state?: 'CHECKOUT' | 'PENDING' | 'CANCELLED' | 'DECLINED' | 'COMPLETED';

    /**
     * The name of the provider that was used to process this payment
     */
    terminalName?: string;
  }

  export namespace Result {
    /**
     * Customer's billing address
     */
    export interface BillingAddress {
      /**
       * Line 1 of the address (e.g., Number, street, etc)
       */
      addressLine1?: string;

      /**
       * Line 2 of the address (e.g., Suite, apt)
       */
      addressLine2?: string;

      /**
       * City name
       */
      city?: string;

      /**
       * 2-character IS0-3166-1 country code
       */
      countryCode?: string;

      /**
       * Postal code
       */
      postalCode?: string;

      /**
       * State code
       */
      state?: string;
    }

    export interface Customer {
      /**
       * Customer account name in the provider's system. Used for some types of
       * withdrawals.
       */
      accountName?: string;

      /**
       * Customer account number in the provider's system. Used for some types of
       * withdrawals.
       */
      accountNumber?: string;

      /**
       * Customer bank. Used for some types of withdrawals.
       */
      bank?: string;

      /**
       * Customer bank branch. Used for some types of withdrawals.
       */
      bankBranch?: string;

      /**
       * Customer country of citizenship
       */
      citizenshipCountryCode?: string;

      dateOfBirth?: string;

      /**
       * Date of the first deposit from the customer
       */
      dateOfFirstDeposit?: string;

      /**
       * How much the customer has deposited, in base currency
       */
      depositsAmount?: number;

      /**
       * How many times the customer made a deposit
       */
      depositsCnt?: number;

      /**
       * An identifier for the customer assigned by a government authority
       */
      documentNumber?: string;

      /**
       * Document Type
       */
      documentType?:
        | 'AR_CDI'
        | 'AR_CUIL'
        | 'AR_CUIT'
        | 'AR_DNI'
        | 'AR_OTRO'
        | 'BR_CNPJ'
        | 'BR_CPF'
        | 'CL_OTRO'
        | 'CL_RUN'
        | 'CL_RUT'
        | 'CO_CC'
        | 'CO_CE'
        | 'CO_DL'
        | 'CO_DNI'
        | 'CO_NE'
        | 'CO_NIT'
        | 'CO_PP'
        | 'CO_SS'
        | 'CO_TI'
        | 'CR_CDI'
        | 'EC_DNI'
        | 'EC_PP'
        | 'EC_RUC'
        | 'GT_CUI'
        | 'GT_DPI'
        | 'GT_NIT'
        | 'MX_CURP'
        | 'MX_IFE'
        | 'MX_PP'
        | 'MX_RFC'
        | 'PA_CIP'
        | 'PE_CE'
        | 'PE_DNI'
        | 'PE_OTRO'
        | 'PE_PP'
        | 'PE_RUC';

      /**
       * Email address of the customer
       */
      email?: string;

      firstName?: string;

      /**
       * Indicates whether the customer has passed KYC verification
       */
      kycStatus?: boolean;

      lastName?: string;

      /**
       * Customer preferred display language
       */
      locale?: string;

      /**
       * Indicates whether the payment instrument (usually the card number) has passed
       * KYC verification
       */
      paymentInstrumentKycStatus?: boolean;

      /**
       * International phone number of the customer, without the '+'. Use a space as a
       * separator between the dialing country code and local phone number.
       */
      phone?: string;

      /**
       * Id of the customer assigned by Merchant
       */
      referenceId?: string;

      /**
       * Identify the customer as belonging to a specific group that is used for routing
       */
      routingGroup?: string;

      /**
       * How much the customer has withdrawn, in base currency
       */
      withdrawalsAmount?: number;

      /**
       * How many times the customer made a withdrawal
       */
      withdrawalsCnt?: number;
    }

    export interface PaymentMethodDetails {
      /**
       * Card expiration month (for BASIC_CARD payment method only)
       */
      cardExpiryMonth?: string;

      /**
       * Card expiration year (for BASIC_CARD payment method only)
       */
      cardExpiryYear?: string;

      /**
       * Cardholder name (for BASIC_CARD payment method only)
       */
      cardholderName?: string;

      /**
       * Card issuing country code (for BASIC_CARD payment method only)
       */
      cardIssuingCountryCode?: string;

      /**
       * Customer account Id in external system or masked card PAN
       */
      customerAccountNumber?: string;
    }
  }
}

export interface PaymentCreateParams {
  /**
   * Payment currency
   */
  currency: string;

  /**
   * Payment Type
   */
  paymentType: 'DEPOSIT' | 'WITHDRAWAL' | 'REFUND';

  /**
   * Additional parameters required by some payment providers. Contact support for
   * more information.
   */
  additionalParameters?: Record<string, string>;

  /**
   * Payment amount
   */
  amount?: number;

  /**
   * Customer's billing address
   */
  billingAddress?: PaymentCreateParams.BillingAddress;

  /**
   * You must be PCI DSS compliant to collect card data on your side. If you are not
   * certified, do not add this field to your request and we will collect the data on
   * our page.
   */
  card?: PaymentCreateParams.Card;

  customer?: PaymentCreateParams.Customer;

  /**
   * Description of the transaction shown to the Customer. Can be sent outside the
   * system.
   */
  description?: string;

  /**
   * Id of initial deposit for refunds, Id of initial recurring payment for
   * subsequent payments
   */
  parentPaymentId?: string;

  /**
   * Payment Method
   */
  paymentMethod?:
    | 'BASIC_CARD'
    | 'CRYPTO'
    | 'FLEXEPIN'
    | 'MACROPAY'
    | 'SKRILL'
    | 'PAYRETAILERS'
    | 'LOCALPAYMENT'
    | 'MONNET'
    | 'PAYPAL'
    | 'NETELLER'
    | 'TRUSTPAYMENTS'
    | 'PAYMAXIS'
    | 'GATE8TRANSACT'
    | 'TINK'
    | 'B2BINPAY'
    | 'CLICK'
    | 'MONETIX'
    | 'PERFECTMONEY'
    | 'VOLT'
    | 'KESSPAY'
    | 'BILLLINE'
    | 'NGENIUS'
    | 'ASTROPAY'
    | 'ALYCEPAY'
    | 'PIX'
    | 'BOLETO'
    | 'UPI'
    | 'PAYTM'
    | 'NETBANKING'
    | 'FINRAX'
    | 'SPOYNT'
    | 'XINPAY'
    | 'OMNIMATRIX'
    | 'DPOPAY'
    | 'EXTERNAL_HPP'
    | 'XANPAY'
    | 'INRPAY'
    | 'ARI10'
    | 'SOFORT'
    | 'GIROPAY'
    | 'PAYSAFECARD'
    | 'PAYSAFECASH'
    | 'OPEN_BANKING'
    | 'KLARNA'
    | 'SPEI'
    | 'PAYCASH'
    | 'RAPIPAGO'
    | 'PAGOFACIL'
    | 'RAPIDTRANSFER'
    | 'MOBILE_MONEY'
    | 'INTERAC'
    | 'INTERAC_ETO'
    | 'INTERAC_RTO'
    | 'INTERAC_ACH'
    | 'PICPAY'
    | 'MOLLIE'
    | 'TED'
    | 'ZIPAY'
    | 'PSE'
    | 'EFECTY'
    | 'BANKTRANSFER'
    | 'PEC'
    | 'OXXO'
    | 'WEBPAY'
    | 'PAGOEFECTIVO'
    | 'MIFINITY'
    | 'PAYPORT'
    | 'JETONCASH'
    | 'JETONWALLET'
    | 'NODA'
    | 'NODA_REVOLUT'
    | 'ALFAKIT'
    | 'PAYFUN'
    | 'EMANAT'
    | 'M10'
    | 'RUBPAY'
    | 'MONERCHY'
    | 'MUCHBETTER'
    | 'YAPILY'
    | 'INAI'
    | 'IMPS'
    | 'RTGS'
    | 'PAYID'
    | 'ZOTAPAY'
    | 'SBP'
    | 'P2P_CARD'
    | 'P2P_IBAN'
    | 'P2P_SBP'
    | 'P2P_MOBILE'
    | 'PUSH'
    | 'GATEIQ'
    | 'VIETTEL'
    | 'ZALO'
    | 'QR'
    | 'CUP'
    | 'CODI'
    | 'PAY2PLAY'
    | 'BKASH'
    | 'NAGAD'
    | 'ROCKET'
    | 'VIRTUAL_ACCOUNT'
    | 'MULTIBANCO'
    | 'BLIK'
    | 'MBWAY'
    | 'P24'
    | 'MISTERCASH'
    | 'MACH'
    | 'KHIPU'
    | 'NEFT'
    | 'STICPAY'
    | 'SBERPAY'
    | 'MOBILE_COMMERCE'
    | 'BINANCE_PAY'
    | 'MPAY'
    | 'CHEK'
    | 'KLAP_EFECTIVO'
    | 'KLAP_TRANSFERENCIA'
    | 'PAGO46'
    | 'HITES'
    | 'SERVIFACIL'
    | 'OPENPAYD'
    | 'FAWRY'
    | 'EPS'
    | 'IDEAL'
    | 'TRUSTLY'
    | 'USSD'
    | 'MPESA'
    | 'ENAIRA'
    | 'ONEVOUCHER'
    | 'BANCONTACT'
    | 'SWISH'
    | 'EFT'
    | 'GCASH'
    | 'PAYMAYA'
    | 'PAGO_MOVIL'
    | 'PAGO_MOVIL_INST'
    | 'BIOPAGO'
    | 'CASH'
    | 'VOUCHERRY'
    | 'APPLEPAY'
    | 'GOOGLEPAY'
    | 'BRITE'
    | 'VOUCHSTAR'
    | 'REVOLUT'
    | 'ONLINE_BANKING'
    | 'PROMPTPAY'
    | 'TRUEMONEY'
    | 'MOMOPAY_VN'
    | 'MOMOPAY_RW'
    | 'VNPAY_QR'
    | 'N26'
    | 'WISE'
    | 'PAYDO_WALLET'
    | 'PAPARA'
    | 'PAYOUT_SEPA_BATCH'
    | 'PAYOUT_NONSEPA_REQUEST';

  /**
   * To continue recurring chain, send a token from a previously initiated recurring
   * payment.
   */
  recurringToken?: string;

  /**
   * Reference assigned by Merchant. Will not go outside the system. Will be sent
   * unchanged in the PaymentResponse.
   */
  referenceId?: string;

  /**
   * URL to redirect Customer after processing
   */
  returnUrl?: string;

  /**
   * Send 'true' if you want this payment to initiate recurring chain. Default is
   * 'false'.
   */
  startRecurring?: boolean;

  /**
   * Subscription to bill customers at regular intervals. Used only with
   * 'startRecurring=true'.
   */
  subscription?: PaymentCreateParams.Subscription;

  /**
   * Url to receive payment status notifications
   */
  webhookUrl?: string;
}

export namespace PaymentCreateParams {
  /**
   * Customer's billing address
   */
  export interface BillingAddress {
    /**
     * Line 1 of the address (e.g., Number, street, etc)
     */
    addressLine1?: string;

    /**
     * Line 2 of the address (e.g., Suite, apt)
     */
    addressLine2?: string;

    /**
     * City name
     */
    city?: string;

    /**
     * 2-character IS0-3166-1 country code
     */
    countryCode?: string;

    /**
     * Postal code
     */
    postalCode?: string;

    /**
     * State code
     */
    state?: string;
  }

  /**
   * You must be PCI DSS compliant to collect card data on your side. If you are not
   * certified, do not add this field to your request and we will collect the data on
   * our page.
   */
  export interface Card {
    /**
     * Cardholder's name printed on the card
     */
    cardholderName?: string;

    /**
     * Card primary account number (PAN). All non-numeric characters will be ignored.
     */
    cardNumber?: string;

    /**
     * Card security code (CVV2 / CVC2 / CAV2)
     */
    cardSecurityCode?: string;

    /**
     * Card expiration month, 2 digits
     */
    expiryMonth?: string;

    /**
     * Card expiration year, 4 digits
     */
    expiryYear?: string;
  }

  export interface Customer {
    /**
     * Customer account name in the provider's system. Used for some types of
     * withdrawals.
     */
    accountName?: string;

    /**
     * Customer account number in the provider's system. Used for some types of
     * withdrawals.
     */
    accountNumber?: string;

    /**
     * Customer bank. Used for some types of withdrawals.
     */
    bank?: string;

    /**
     * Customer bank branch. Used for some types of withdrawals.
     */
    bankBranch?: string;

    /**
     * Customer country of citizenship
     */
    citizenshipCountryCode?: string;

    dateOfBirth?: string;

    /**
     * Date of the first deposit from the customer
     */
    dateOfFirstDeposit?: string;

    /**
     * How much the customer has deposited, in base currency
     */
    depositsAmount?: number;

    /**
     * How many times the customer made a deposit
     */
    depositsCnt?: number;

    /**
     * An identifier for the customer assigned by a government authority
     */
    documentNumber?: string;

    /**
     * Document Type
     */
    documentType?:
      | 'AR_CDI'
      | 'AR_CUIL'
      | 'AR_CUIT'
      | 'AR_DNI'
      | 'AR_OTRO'
      | 'BR_CNPJ'
      | 'BR_CPF'
      | 'CL_OTRO'
      | 'CL_RUN'
      | 'CL_RUT'
      | 'CO_CC'
      | 'CO_CE'
      | 'CO_DL'
      | 'CO_DNI'
      | 'CO_NE'
      | 'CO_NIT'
      | 'CO_PP'
      | 'CO_SS'
      | 'CO_TI'
      | 'CR_CDI'
      | 'EC_DNI'
      | 'EC_PP'
      | 'EC_RUC'
      | 'GT_CUI'
      | 'GT_DPI'
      | 'GT_NIT'
      | 'MX_CURP'
      | 'MX_IFE'
      | 'MX_PP'
      | 'MX_RFC'
      | 'PA_CIP'
      | 'PE_CE'
      | 'PE_DNI'
      | 'PE_OTRO'
      | 'PE_PP'
      | 'PE_RUC';

    /**
     * Email address of the customer
     */
    email?: string;

    firstName?: string;

    /**
     * Indicates whether the customer has passed KYC verification
     */
    kycStatus?: boolean;

    lastName?: string;

    /**
     * Customer preferred display language
     */
    locale?: string;

    /**
     * Indicates whether the payment instrument (usually the card number) has passed
     * KYC verification
     */
    paymentInstrumentKycStatus?: boolean;

    /**
     * International phone number of the customer, without the '+'. Use a space as a
     * separator between the dialing country code and local phone number.
     */
    phone?: string;

    /**
     * Id of the customer assigned by Merchant
     */
    referenceId?: string;

    /**
     * Identify the customer as belonging to a specific group that is used for routing
     */
    routingGroup?: string;

    /**
     * How much the customer has withdrawn, in base currency
     */
    withdrawalsAmount?: number;

    /**
     * How many times the customer made a withdrawal
     */
    withdrawalsCnt?: number;
  }

  /**
   * Subscription to bill customers at regular intervals. Used only with
   * 'startRecurring=true'.
   */
  export interface Subscription {
    /**
     * The number of intervals after which a subscriber is billed. For example, if the
     * frequencyUnit is DAY with an frequency of 2, the subscription is billed once
     * every two days.
     */
    frequency: number;

    /**
     * The amount to be used for subsequent payments. If not specified, the amount of
     * the original payment is used.
     */
    amount?: number;

    /**
     * Description for subsequent recurring payments
     */
    description?: string;

    /**
     * The interval at which the subscription is billed. Use 'MINUTE' for testing
     * purposes only.
     */
    frequencyUnit?: 'MINUTE' | 'DAY' | 'WEEK' | 'MONTH';

    /**
     * Required number of subsequent recurring payments. Unlimited if value is not
     * specified.
     */
    numberOfCycles?: number;

    /**
     * Retry strategy for subscription. If not specified, the subscription is canceled
     * after the first failed payment attempt.
     */
    retryStrategy?: Subscription.RetryStrategy;

    /**
     * Date and time of the 1st cycle. if not specified, then calculated as
     * (initialDeposit.createTime + frequency\*frequencyUnit).
     */
    startTime?: string;
  }

  export namespace Subscription {
    /**
     * Retry strategy for subscription. If not specified, the subscription is canceled
     * after the first failed payment attempt.
     */
    export interface RetryStrategy {
      /**
       * The number of intervals after which the system will retry the payment after an
       * unsuccessful attempt
       */
      frequency: number;

      /**
       * Required number of retries
       */
      numberOfCycles: number;

      /**
       * If specified, the nth element contains the percentage of the initial amount that
       * will be charged for the nth retry
       */
      amountAdjustments?: Array<number>;

      /**
       * The interval at which the subscription is retried. Use 'MINUTE' for testing
       * purposes only.
       */
      frequencyUnit?: 'MINUTE' | 'DAY' | 'WEEK' | 'MONTH';
    }
  }
}

export interface PaymentListParams {
  created?: PaymentListParams.Created;

  /**
   * The numbers of items to return. Default is 50.
   */
  limit?: number;

  /**
   * The number of items to skip before starting to collect the result set. Default
   * is 0.
   */
  offset?: number;

  updated?: PaymentListParams.Updated;
}

export namespace PaymentListParams {
  export interface Created {
    /**
     * If passed, return only payments created at or after the specified time
     */
    gte?: string;

    /**
     * If passed, return only payments created strictly before the specified time
     */
    lt?: string;
  }

  export interface Updated {
    /**
     * If passed, return only payments updated at or after the specified time
     */
    gte?: string;

    /**
     * If passed, return only payments updated strictly before the specified time
     */
    lt?: string;
  }
}

Payments.Operations = Operations;

export declare namespace Payments {
  export {
    type Payment as Payment,
    type PaymentListResponse as PaymentListResponse,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentListParams as PaymentListParams,
  };

  export { Operations as Operations, type Operation as Operation };
}
