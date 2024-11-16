// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Subscriptions extends APIResource {
  /**
   * Find Subscription by Id
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Subscription> {
    return this._client.get(`/api/v1/subscriptions/${id}`, options);
  }

  /**
   * Patch Subscription
   */
  update(
    id: string,
    body: SubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Subscription> {
    return this._client.patch(`/api/v1/subscriptions/${id}`, { body, ...options });
  }
}

export interface Subscription {
  result?: Subscription.Result;

  /**
   * HTTP status code
   */
  status?: number;

  timestamp?: string;
}

export namespace Subscription {
  export interface Result {
    /**
     * Subscription Id
     */
    id?: string;

    /**
     * The amount to be used for subsequent payments
     */
    amount?: number;

    /**
     * Date and time the subscription was created
     */
    createTime?: string;

    /**
     * Payment currency
     */
    currency?: string;

    /**
     * Id of the customer from initial payment
     */
    customerReferenceId?: string;

    /**
     * List of payments automatically generated for this subscription
     */
    cycles?: Array<Result.Cycle>;

    /**
     * Description for subsequent recurring payments
     */
    description?: string;

    /**
     * The number of intervals after which a subscriber is billed. For example, if the
     * frequencyUnit is DAY with an frequency of 2, the subscription is billed once
     * every two days.
     */
    frequency?: number;

    /**
     * The interval at which the subscription is billed. Use 'MINUTE' for testing
     * purposes only.
     */
    frequencyUnit?: 'MINUTE' | 'DAY' | 'WEEK' | 'MONTH';

    /**
     * Token that is used to continue the recurring chain
     */
    recurringToken?: string;

    /**
     * Required number of subsequent recurring payments. Unlimited if value is not
     * specified.
     */
    requestedNumberOfCycles?: number;

    /**
     * Retry strategy for subscription. If not specified, the subscription is canceled
     * after the first failed payment attempt.
     */
    retryStrategy?: Result.RetryStrategy;

    /**
     * Date and time of the 1st cycle
     */
    startTime?: string;

    /**
     * Subscription state
     */
    state?: 'ACTIVE' | 'CANCELLED' | 'COMPLETED';
  }

  export namespace Result {
    export interface Cycle {
      /**
       * Payment amount
       */
      amount?: number;

      /**
       * Payment Id
       */
      paymentId?: string;

      /**
       * Payment State
       */
      paymentState?: 'CHECKOUT' | 'PENDING' | 'CANCELLED' | 'DECLINED' | 'COMPLETED';

      /**
       * Sequence number of the cycle
       */
      sequence?: number;

      /**
       * Date and time when this cycle was supposed to be created according to the
       * schedule
       */
      startTime?: string;

      /**
       * Cycle type
       */
      type?: 'REGULAR' | 'RETRY';
    }

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

export interface SubscriptionUpdateParams {
  /**
   * New subscription state
   */
  state?: 'CANCELLED';
}

export declare namespace Subscriptions {
  export { type Subscription as Subscription, type SubscriptionUpdateParams as SubscriptionUpdateParams };
}
