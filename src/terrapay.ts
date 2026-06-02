import { BaseClient } from './core/client.js';
import { Accounts } from './resources/accounts.js';
import { Ancillary } from './resources/ancillary.js';
import { Quotations } from './resources/quotations.js';
import { Reports } from './resources/reports.js';
import { Transactions } from './resources/transactions.js';
import type { TerraPayConfig } from './types/index.js';

/**
 * The main TerraPay SDK entry point.
 * Use this class to access all API modules such as accounts, transactions, and quotations.
 * 
 * @example
 * ```typescript
 * const sdk = new TerraPay({
 *   username: 'your_user',
 *   password: 'your_password',
 *   originCountry: 'GB',
 *   environment: 'uat'
 * });
 * 
 * const balance = await sdk.accounts.getBalance('254700000000');
 * ```
 */
export class TerraPay {
  /**
   * Module for managing accounts, balances, and KYC status.
   */
  public accounts: Accounts;

  /**
   * Module for price discovery and forex quotation.
   */
  public quotations: Quotations;

  /**
   * Module for initiating, status-checking, and reversing transactions.
   */
  public transactions: Transactions;

  /**
   * Module for ancillary operations like bank/agent lookups and currency lists.
   */
  public ancillary: Ancillary;

  /**
   * Module for generating and fetching transaction reports.
   */
  public reports: Reports;

  /**
   * Internal HTTP client used by the modules.
   */
  public readonly client: BaseClient;

  /**
   * Initializes a new instance of the TerraPay SDK.
   * 
   * @param config - Configuration settings for the SDK.
   */
  constructor(config: TerraPayConfig) {
    this.client = new BaseClient(config);

    // Initialize Domain Modules
    this.accounts = new Accounts(this.client);
    this.quotations = new Quotations(this.client);
    this.transactions = new Transactions(this.client);
    this.ancillary = new Ancillary(this.client);
    this.reports = new Reports(this.client);
  }
}
