export interface TerraPayConfig {
  /**
   * Partner username for the API
   */
  username: string;

  /**
   * Your partner password.
   * If `isPasswordHashed` is true (default), this must be the SHA256 hashed password.
   * If `isPasswordHashed` is false, the SDK will hash this value automatically.
   */
  password: string;

  /**
   * ISO Alpha-2 country code of the sender/origin
   */
  originCountry: string;

  /**
   * Environment to connect to.
   * 'uat' = testing/sandbox, 'production' = live
   */
  environment: 'uat' | 'production';

  /**
   * Base URL overrides, useful for proxies or custom UAT environments.
   * If not provided, defaults to standard TerraPay URLs.
   */
  baseUrl?: string;

  /**
   * Public RSA key provided by TerraPay for encrypting PAN details.
   * Required if using Card payouts.
   */
  publicKey?: string;

  /**
   * Indicates if the password provided is already SHA256 hashed.
   * @default true
   */
  isPasswordHashed?: boolean;

  /**
   * Maximum number of automatic retries for 429 and 5xx errors.
   * @default 2
   */
  maxRetries?: number;

  /**
   * Custom timeout for requests in milliseconds.
   * @default 30000
   */
  timeout?: number;

  /**
   * Circuit breaker configuration for failing fast when API is unresponsive.
   */
  circuitBreaker?: {
    /** Number of consecutive failures before the circuit opens. @default 3 */
    failureThreshold?: number;
    /** Time in ms before the circuit attempts a half-open retry. @default 30000 */
    resetTimeout?: number;
  };
}

export interface RequestOptions {
  /** Custom timeout for this specific request */
  timeout?: number;
  /** Unique ID to prevent duplicate transactions (idempotency key). Equivalent to clientCorrelationId. */
  correlationId?: string;
  /** Additional headers to inject */
  headers?: Record<string, string>;
}

export * from './resources.js';
export * from './responses.js';
