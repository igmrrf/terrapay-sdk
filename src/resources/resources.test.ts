import { describe, expect, it, mock } from 'bun:test';
import { TerraPay } from '../terrapay.js';

describe('Domain Resources API Methods', () => {
  const sdk = new TerraPay({
    username: 'test',
    password: 'password',
    originCountry: 'US',
    environment: 'uat',
  });

  it('Accounts: verify', async () => {
    // @ts-expect-error Mocking global fetch for testing
    global.fetch = mock(() =>
      Promise.resolve(new Response(JSON.stringify({ status: 'success' }), { status: 200 })),
    );

    await sdk.accounts.verify({} as any);
    expect(global.fetch).toHaveBeenCalled();
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/tpverify/api/v1/verify');
    expect(init.method).toBe('POST');
  });

  it('should URL encode path parameters correctly', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.accounts.getStatus('msisdn', '+12 34', 'A & B');
    const [url] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsma/accounts/msisdn/%2B12%2034/status?bnv=A%20%26%20B');
  });

  it('Ancillary: getBanks', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.ancillary.getBanks('KE');
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/getbanklist/KE');
    expect(init.method).toBe('GET');
  });

  it('Ancillary: getWallets', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.ancillary.getWallets('KE');
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/getwalletlist/KE');
    expect(init.method).toBe('GET');
  });

  it('Quotations: create', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.quotations.create({} as any);
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsma/quotations');
    expect(init.method).toBe('POST');
  });

  it('Quotations: createV2', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.quotations.createV2({} as any);
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsmaV2/quotations');
    expect(init.method).toBe('POST');
  });

  it('Quotations: getCorridorRates', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.quotations.getCorridorRates('USD', 'WALLET', 'p2p');
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsmaV2/quotations/USD?instrumentType=WALLET&transactionType=p2p');
    expect(init.method).toBe('GET');
  });

  it('Reports: getLedgerBalance', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.reports.getLedgerBalance();
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsma/accounts/all/balance_v1');
    expect(init.method).toBe('GET');
  });

  it('Reports: getLedgerBalanceByCurrency', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.reports.getLedgerBalanceByCurrency('USD');
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsma/accounts/USD/balance_v1');
    expect(init.method).toBe('GET');
  });

  it('Reports: getStatements', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.reports.getStatements('2020', '2021', 'book');
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain(
      '/PartnerPortalReports/partnerstatements_v1?start=2020&end=2021&ledgerBookName=book',
    );
    expect(init.method).toBe('GET');
  });

  it('Transactions: create', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.transactions.create({} as any, { correlationId: 'abc' });
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsma/transactions');
    expect(init.method).toBe('POST');
    expect(init.headers['X-Correlation-ID']).toBe('abc');
  });

  it('Transactions: getStatus', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.transactions.getStatus('123');
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsma/transactions_v3/123');
    expect(init.method).toBe('GET');
  });

  it('Transactions: cancel', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.transactions.cancel({} as any);
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsma/remitCancel');
    expect(init.method).toBe('POST');
  });

  it('Transactions: reverse', async () => {
    // @ts-expect-error
    global.fetch = mock(() => Promise.resolve(new Response('{}', { status: 200 })));
    await sdk.transactions.reverse({} as any);
    const [url, init] = (global.fetch as any).mock.calls[0];
    expect(url).toContain('/gsma/reversalInitiate');
    expect(init.method).toBe('POST');
  });
});
