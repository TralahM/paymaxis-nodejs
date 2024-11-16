// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Operations extends APIResource {
  /**
   * Get a list of operations performed during payment processing sorted by time
   * (most recent first)
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<Operation> {
    return this._client.get(`/api/v1/payments/${id}/operations`, options);
  }
}

export interface Operation {
  result?: Array<Operation.Result>;

  /**
   * HTTP status code
   */
  status?: number;

  timestamp?: string;
}

export namespace Operation {
  export interface Result {
    /**
     * Operation Id
     */
    id?: number;

    /**
     * Operation end time
     */
    completed?: string;

    /**
     * List of messages received from external APIs during operation processing
     */
    incomingMessages?: string;

    /**
     * Operation performed during payment processing
     */
    operation?:
      | 'CREATE_PAYMENT'
      | 'CHECKOUT'
      | 'CANCEL'
      | 'CONFIRMATION'
      | 'CASCADING'
      | 'REDIRECT'
      | 'CONTINUE'
      | 'CONTINUE_ANTI_FRAUD'
      | 'DETECT_FRAUD'
      | 'DEPOSIT'
      | 'WITHDRAWAL'
      | 'REFUND'
      | 'CHARGEBACK'
      | 'CHECK_STATE'
      | 'HANDLE_WEBHOOK'
      | 'MANUAL_UPDATE';

    /**
     * List of messages sent to external APIs during operation processing
     */
    outgoingMessages?: string;

    /**
     * Payment State
     */
    paymentState?: 'CHECKOUT' | 'PENDING' | 'CANCELLED' | 'DECLINED' | 'COMPLETED';

    /**
     * Operation start time
     */
    started?: string;
  }
}

export declare namespace Operations {
  export { type Operation as Operation };
}
