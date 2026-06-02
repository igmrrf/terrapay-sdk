import { describe, expect, it } from 'bun:test';
import { MockTerraPay } from './mock.js';

describe('MockTerraPay SDK', () => {
  it('should instantiate and return default responses', () => {
    const sdk = new MockTerraPay();
    expect(sdk).toBeInstanceOf(MockTerraPay);

    const defaults = MockTerraPay.createDefaultResponses();
    expect(defaults.accountStatus.status).toBe('available');
    expect(defaults.quotation.quotationStatus).toBe('2000:Quote Success');
    expect(defaults.transaction.status).toBe('SUCCESS');
  });
});
