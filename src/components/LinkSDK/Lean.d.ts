/**
 * Customization options for the Lean SDK
 */
export interface LeanCustomization {
  dialog_mode?: string;
  theme_color?: string;
  button_text_color?: string;
  button_border_radius?: string;
  link_color?: string;
  overlay_color?: string;
  [key: string]: string | undefined;
}

/**
 * Constructor options for the Lean SDK
 */
export interface LeanConfig {
  env?: string;
  version?: string;
  country?: string;
  appToken: string;
  language?: string;
  showLogs?: boolean;
  isSandbox?: boolean;
  customization?: LeanCustomization | null;
}

/**
 * Parameters for the link method
 */
export interface LinkParams {
  customer_id: string;
  permissions: string[];
  bank_identifier?: string;
  fail_redirect_url?: string;
  success_redirect_url?: string;
  access_token?: string;
}

/**
 * Parameters for the connect method
 */
export interface ConnectParams {
  customer_id: string;
  permissions: string[];
  access_to?: string;
  access_from?: string;
  end_user_id?: string;
  bank_identifier?: string;
  fail_redirect_url?: string;
  success_redirect_url?: string;
  payment_destination_id?: string;
  show_consent_explanation?: boolean;
  account_type?: string;
  customer_metadata?: string;
  access_token?: string;
  destination_alias?: string;
  destination_avatar?: string;
}

/**
 * Parameters for the reconnect method
 */
export interface ReconnectParams {
  reconnect_id: string;
  access_token?: string;
  destination_alias?: string;
  destination_avatar?: string;
}

/**
 * Parameters for the createBeneficiary method
 */
export interface CreateBeneficiaryParams {
  customer_id: string;
  payment_source_id?: string;
  fail_redirect_url?: string;
  success_redirect_url?: string;
  payment_destination_id?: string;
  access_token?: string;
  entity_id?: string;
  destination_alias?: string;
  destination_avatar?: string;
}

/**
 * Parameters for the createPaymentSource method
 */
export interface CreatePaymentSourceParams {
  customer_id: string;
  bank_identifier?: string;
  fail_redirect_url?: string;
  success_redirect_url?: string;
  payment_destination_id?: string;
  access_token?: string;
  destination_alias?: string;
  destination_avatar?: string;
}

/**
 * Parameters for the updatePaymentSource method
 */
export interface UpdatePaymentSourceParams {
  customer_id: string;
  end_user_id?: string;
  payment_source_id?: string;
  fail_redirect_url?: string;
  success_redirect_url?: string;
  payment_destination_id?: string;
  access_token?: string;
  entity_id?: string;
  destination_alias?: string;
  destination_avatar?: string;
}

/**
 * Parameters for the pay method
 */
export interface PayParams {
  account_id?: string;
  end_user_id?: string;
  show_balances?: boolean;
  fail_redirect_url?: string;
  payment_intent_id?: string;
  success_redirect_url?: string;
  bulk_payment_intent_id?: string;
  access_token?: string;
  destination_alias?: string;
  destination_avatar?: string;
}

/**
 * Parameters for the verifyAddress method
 */
export interface VerifyAddressParams {
  customer_id: string;
  customer_name: string;
  permissions: string[];
  access_token?: string;
  destination_alias?: string;
  destination_avatar?: string;
}

/**
 * Parameters for the authorizeConsent method
 */
export interface AuthorizeConsentParams {
  customer_id: string;
  consent_id: string;
  fail_redirect_url: string;
  success_redirect_url: string;
  access_token?: string;
  destination_alias?: string;
  destination_avatar?: string;
}

/**
 * Parameters for the checkout method
 */
export interface CheckoutParams {
  payment_intent_id: string;
  customer_name?: string;
  access_token?: string;
  success_redirect_url?: string;
  fail_redirect_url?: string;
}

/**
 * Parameters for the manageConsents method
 */
export interface ManageConsentsParams {
  customer_id: string;
  access_token?: string;
}

/**
 * Parameters for the captureRedirect method
 */
export interface CaptureRedirectParams {
  customer_id: string;
  consent_attempt_id: string;
  access_token?: string;
  granular_status_code?: string;
  status_additional_info?: string;
}

/**
 * Main Lean SDK class for generating initialization URLs
 */
export default class Lean {
  env: string;
  version: string;
  country: string;
  language: string;
  appToken: string;
  isSandbox: boolean;
  customization: LeanCustomization | null;
  baseURL: string;

  constructor(config: LeanConfig);

  /**
   * Get the base URL with all configuration parameters
   */
  get baseUrl(): string;

  /**
   * Get implementation parameters
   */
  get implementationParams(): string;

  /**
   * Convert permissions array to URL string
   */
  convertPermissionsToURLString(permissions: string[]): string;

  /**
   * Convert customization object to URL string
   */
  convertCustomizationToURLString(): string;

  /**
   * Append optional configuration to URL parameters
   */
  appendOptionalConfigToURLParams(url: string, optionalParams: Record<string, any>): string;

  /**
   * Link method - Connect a user's bank account
   */
  link(params: LinkParams): string;

  /**
   * Connect method - Establish a connection with additional permissions
   */
  connect(params: ConnectParams): string;

  /**
   * Reconnect method - Reconnect an existing connection
   */
  reconnect(params: ReconnectParams): string;

  /**
   * Create Beneficiary method
   */
  createBeneficiary(params: CreateBeneficiaryParams): string;

  /**
   * Create Payment Source method
   */
  createPaymentSource(params: CreatePaymentSourceParams): string;

  /**
   * Update Payment Source method
   */
  updatePaymentSource(params: UpdatePaymentSourceParams): string;

  /**
   * Pay method - Initiate a payment
   */
  pay(params: PayParams): string;

  /**
   * Verify Address method
   */
  verifyAddress(params: VerifyAddressParams): string;

  /**
   * Authorize Consent method
   */
  authorizeConsent(params: AuthorizeConsentParams): string;

  /**
   * Checkout method
   */
  checkout(params: CheckoutParams): string;

  /**
   * Manage Consents method
   */
  manageConsents(params: ManageConsentsParams): string;

  /**
   * Capture Redirect method
   */
  captureRedirect(params: CaptureRedirectParams): string;
}
