export declare const UserPermissions: {
  readonly BALANCE: 'balance';
  readonly IDENTITY: 'identity';
  readonly ACCOUNTS: 'accounts';
  readonly PAYMENTS: 'payments';
  readonly TRANSACTIONS: 'transactions';
  readonly IDENTITIES: 'identities';
  readonly BENEFICIARIES: 'beneficiaries';
  readonly DIRECT_DEBITS: 'direct_debits';
  readonly STANDING_ORDERS: 'standing_orders';
  readonly SCHEDULED_PAYMENTS: 'scheduled_payments';
};

export declare const Country: {
  readonly SAUDI_ARABIA: 'sa';
  readonly UNITED_ARAB_EMIRATES: 'ae';
};

export declare const Config: {
  readonly ENV: 'env';
  readonly SANDBOX: 'sandbox';
  readonly VERSION: 'version';
  readonly COUNTRY: 'country';
  readonly LANGUAGE: 'language';
  readonly APP_TOKEN: 'app_token';
  readonly SHOW_LOGS: 'show_logs';
  readonly IMPLEMENTATION: 'implementation';
  readonly IMPLEMENTATION_CONFIG: 'implementation_config';
};

export declare const Params: {
  readonly INITIALIZATION_URL: 'initialization_url';
  readonly PAYMENT_INTENT_ID: 'payment_intent_id';
  readonly PAYMENT_INTENT_IDS: 'payment_intent_ids';
  readonly BULK_PAYMENT_INTENT_ID: 'bulk_payment_intent_id';
  readonly SHOW_BALANCES: 'show_balances';
  readonly RECONNECT_ID: 'reconnect_id';
  readonly CUSTOMER_ID: 'customer_id';
  readonly CUSTOMER_NAME: 'customer_name';
  readonly BANK_IDENTIFIER: 'bank_identifier';
  readonly ACCOUNT_ID: 'account_id';
  readonly PERMISSIONS: 'permissions';
  readonly PAYMENT_SOURCE_ID: 'payment_source_id';
  readonly PAYMENT_DESTINATION_ID: 'payment_destination_id';
  readonly CUSTOMIZATION: 'customization';
  readonly FAIL_REDIRECT_URL: 'fail_redirect_url';
  readonly SUCCESS_REDIRECT_URL: 'success_redirect_url';
  readonly ACCESS_TO: 'access_to';
  readonly ACCESS_FROM: 'access_from';
  readonly ACCOUNT_TYPE: 'account_type';
  readonly END_USER_ID: 'end_user_id';
  readonly ENTITY_ID: 'entity_id';
  readonly ACCESS_TOKEN: 'access_token';
  readonly SHOW_CONSENT_EXPLANATION: 'show_consent_explanation';
  readonly DESTINATION_ALIAS: 'destination_alias';
  readonly DESTINATION_AVATAR: 'destination_avatar';
  readonly CONSENT_ID: 'consent_id';
  readonly CONSENT_ATTEMPT_ID: 'consent_attempt_id';
  readonly GRANULAR_STATUS_CODE: 'granular_status_code';
  readonly STATUS_ADDITIONAL_INFO: 'status_additional_info';
  readonly CUSTOMER_METADATA: 'customer_metadata';
};

export declare const Methods: {
  readonly PAY: 'pay';
  readonly LINK: 'link';
  readonly CONNECT: 'connect';
  readonly RECONNECT: 'reconnect';
  readonly CREATE_BENEFICIARY: 'createBeneficiary';
  readonly CREATE_PAYMENT_SOURCE: 'createPaymentSource';
  readonly UPDATE_PAYMENT_SOURCE: 'updatePaymentSource';
  readonly VERIFY_ADDRESS: 'verifyAddress';
  readonly AUTHORIZE_CONSENT: 'authorizeConsent';
  readonly CHECKOUT: 'checkout';
  readonly MANAGE_CONSENTS: 'manageConsents';
  readonly CAPTURE_REDIRECT: 'captureRedirect';
};
