import { describe, expect, it } from 'bun:test';
import { generateKeyPairSync } from 'node:crypto';
import { encryptPAN } from './encryption.js';

describe('Encryption Utilities', () => {
  // Generate a test RSA key pair
  const { publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
  });

  it('should encrypt a PAN string to base64', async () => {
    const pan = '4111222233334444';
    const encryptedPromise = encryptPAN(pan, publicKey);

    expect(encryptedPromise).toBeInstanceOf(Promise);
    const encrypted = await encryptedPromise;

    expect(typeof encrypted).toBe('string');
    // Basic check for base64
    expect(encrypted).toMatch(/^[A-Za-z0-9+/=]+$/);
  });

  it('should throw if public key is missing', async () => {
    // using rejects.toThrow for async errors
    await expect(encryptPAN('123', '')).rejects.toThrow('Public key is required');
  });

  it('should reject on invalid PEM public key', async () => {
    const invalidPem = '-----BEGIN PUBLIC KEY-----\nNOT_BASE64_!\n-----END PUBLIC KEY-----';
    // Web Crypto API throws a DOMException or TypeError for invalid base64/keys
    await expect(encryptPAN('123', invalidPem)).rejects.toThrow();
  });
});
