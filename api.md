# Payments

Types:

- <code><a href="./src/resources/payments/payments.ts">Payment</a></code>
- <code><a href="./src/resources/payments/payments.ts">PaymentListResponse</a></code>

Methods:

- <code title="post /api/v1/payments">client.payments.<a href="./src/resources/payments/payments.ts">create</a>({ ...params }) -> Payment</code>
- <code title="get /api/v1/payments/{id}">client.payments.<a href="./src/resources/payments/payments.ts">retrieve</a>(id) -> Payment</code>
- <code title="get /api/v1/payments">client.payments.<a href="./src/resources/payments/payments.ts">list</a>({ ...params }) -> PaymentListResponse</code>

## Operations

Types:

- <code><a href="./src/resources/payments/operations.ts">Operation</a></code>

Methods:

- <code title="get /api/v1/payments/{id}/operations">client.payments.operations.<a href="./src/resources/payments/operations.ts">list</a>(id) -> Operation</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">Subscription</a></code>

Methods:

- <code title="get /api/v1/subscriptions/{id}">client.subscriptions.<a href="./src/resources/subscriptions.ts">retrieve</a>(id) -> Subscription</code>
- <code title="patch /api/v1/subscriptions/{id}">client.subscriptions.<a href="./src/resources/subscriptions.ts">update</a>(id, { ...params }) -> Subscription</code>
