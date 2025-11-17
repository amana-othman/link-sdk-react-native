import React from 'react';
import {WebViewProps} from 'react-native-webview';
import {
  LinkParams,
  ConnectParams,
  ReconnectParams,
  CreateBeneficiaryParams,
  CreatePaymentSourceParams,
  UpdatePaymentSourceParams,
  PayParams,
  VerifyAddressParams,
  AuthorizeConsentParams,
  CheckoutParams,
  ManageConsentsParams,
  CaptureRedirectParams,
  LeanCustomization,
} from './Lean';

/**
 * Callback data that can be received from the SDK
 */
export interface LeanCallbackData {
  status?: string;
  message?: string;
  [key: string]: any;
}

/**
 * Props for the LinkSDK component
 */
export interface LinkSDKProps {
  /**
   * Your Lean app token
   */
  appToken: string;

  /**
   * Environment (e.g., 'production', 'staging')
   */
  env?: string;

  /**
   * Country code (e.g., 'ae', 'sa')
   */
  country?: string;

  /**
   * Language code (e.g., 'en', 'ar')
   */
  language?: string;

  /**
   * Enable sandbox mode
   */
  sandbox?: boolean;

  /**
   * Show debug logs
   */
  showLogs?: boolean;

  /**
   * SDK version (default: 'latest')
   */
  version?: string;

  /**
   * Customization options for the SDK UI
   */
  customization?: LeanCustomization | null;

  /**
   * Callback function called when the SDK completes
   */
  callback?: (data: LeanCallbackData) => void;

  /**
   * Additional props to pass to the WebView component
   */
  webViewProps?: WebViewProps;
}

/**
 * Methods exposed by the LinkSDK component via ref
 */
export interface LinkSDKMethods {
  /**
   * Link method - Connect a user's bank account
   */
  link: (params: LinkParams) => void;

  /**
   * Connect method - Establish a connection with additional permissions
   */
  connect: (params: ConnectParams) => void;

  /**
   * Reconnect method - Reconnect an existing connection
   */
  reconnect: (params: ReconnectParams) => void;

  /**
   * Create Beneficiary method
   */
  createBeneficiary: (params: CreateBeneficiaryParams) => void;

  /**
   * Create Payment Source method
   */
  createPaymentSource: (params: CreatePaymentSourceParams) => void;

  /**
   * Update Payment Source method
   */
  updatePaymentSource: (params: UpdatePaymentSourceParams) => void;

  /**
   * Pay method - Initiate a payment
   */
  pay: (params: PayParams) => void;

  /**
   * Verify Address method
   */
  verifyAddress: (params: VerifyAddressParams) => void;

  /**
   * Authorize Consent method
   */
  authorizeConsent: (params: AuthorizeConsentParams) => void;

  /**
   * Checkout method
   */
  checkout: (params: CheckoutParams) => void;

  /**
   * Manage Consents method
   */
  manageConsents: (params: ManageConsentsParams) => void;

  /**
   * Capture Redirect method
   */
  captureRedirect: (params: CaptureRedirectParams) => void;
}

/**
 * LinkSDK React Component
 * 
 * A React Native component that provides access to the Lean SDK functionality.
 * Use a ref to access the SDK methods.
 * 
 * @example
 * ```tsx
 * import React, { useRef } from 'react';
 * import LinkSDK, { LinkSDKMethods } from 'lean-react-native';
 * 
 * const MyComponent = () => {
 *   const leanRef = useRef<LinkSDKMethods>(null);
 * 
 *   const handleLink = () => {
 *     leanRef.current?.link({
 *       customer_id: 'customer-id',
 *       permissions: ['identity', 'accounts', 'balance'],
 *     });
 *   };
 * 
 *   return (
 *     <LinkSDK
 *       ref={leanRef}
 *       appToken="your-app-token"
 *       callback={(data) => console.log('Callback:', data)}
 *     />
 *   );
 * };
 * ```
 */
declare const LinkSDK: React.ForwardRefExoticComponent<
  LinkSDKProps & React.RefAttributes<LinkSDKMethods>
>;

export default LinkSDK;

// Export types for convenience
export * from './Lean';
export * from './constants';
