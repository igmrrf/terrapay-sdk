import type { BaseClient } from '../core/client.js';
import type {
  AccountStatusResponse,
  IdentifierType,
  RequestOptions,
  TerraPayVerifyRequest,
  TerraPayVerifyResponse,
} from '../types/index.js';

/**
 * Handles account-related operations such as checking account status and verification.
 */
export class Accounts {
  constructor(private readonly client: BaseClient) {}

  /**
   * Verifies the operational status of a beneficiary account and matches the name.
   *
   * @param identifierType - The type of the identifier (e.g., 'msisdn', 'accountNumber')
   * @param identifier - The actual identifier value
   * @param bnv - Optional beneficiary name for fuzzy matching
   * @param options - Optional request-specific configuration.
   * @returns A promise resolving to the account status and name matching results.
   */
  async getStatus(
    identifierType: IdentifierType,
    identifier: string,
    bnv?: string,
    options?: RequestOptions,
  ): Promise<AccountStatusResponse> {
    const path = `/gsma/accounts/${encodeURIComponent(identifierType)}/${encodeURIComponent(identifier)}/status`;
    const finalPath = bnv ? `${path}?bnv=${encodeURIComponent(bnv)}` : path;

    return this.client.request<AccountStatusResponse>('GET', finalPath, undefined, options);
  }

  /**
   * TerraPay Verify (TPV) - Ensures the authenticity of payment transactions before initiation.
   * Note: This usually points to a different API host in UAT (tpverify.terrapay.com).
   * If using a different host, ensure the `client` is configured with the TPV base URL,
   * or override it via headers if your network topology requires it.
   */
  async verify(
    data: TerraPayVerifyRequest,
    options?: RequestOptions,
  ): Promise<TerraPayVerifyResponse> {
    // Note: The BaseClient handles the environment URL, but TPV uses a different subdomain.
    // In a full production setup, the BaseClient could take an API selector, or you can
    // pass a custom TPV client. Assuming standard routing for now.
    return this.client.request<TerraPayVerifyResponse>(
      'POST',
      '/tpverify/api/v1/verify',
      data,
      options,
    );
  }
}
