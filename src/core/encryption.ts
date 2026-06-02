function pemToArrayBuffer(pem: string): ArrayBuffer {
  const b64Lines = pem
    .replace(/-----BEGIN PUBLIC KEY-----/g, '')
    .replace(/-----END PUBLIC KEY-----/g, '')
    .replace(/\s+/g, '');
  const byteStr = atob(b64Lines);
  const bytes = new Uint8Array(byteStr.length);
  for (let i = 0; i < byteStr.length; i++) {
    bytes[i] = byteStr.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Encrypts sensitive PAN (Card Number) for transmission using the
 * RSA/ECB/OAEPWithSHA-256AndMGF1Padding algorithm required by TerraPay.
 *
 * @param pan - The plaintext PAN
 * @param publicKey - The public RSA key provided by TerraPay (PEM format)
 * @returns The Base64 encoded encrypted string
 */
export async function encryptPAN(pan: string, publicKey: string): Promise<string> {
  if (!publicKey) {
    throw new Error('Public key is required to encrypt PAN details.');
  }

  const keyBuffer = pemToArrayBuffer(publicKey);
  const cryptoKey = await globalThis.crypto.subtle.importKey(
    'spki',
    keyBuffer,
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256',
    },
    false,
    ['encrypt'],
  );

  const encodedPan = new TextEncoder().encode(pan);
  const encryptedBuffer = await globalThis.crypto.subtle.encrypt(
    { name: 'RSA-OAEP' },
    cryptoKey,
    encodedPan,
  );

  const encryptedBytes = new Uint8Array(encryptedBuffer);
  let binary = '';
  for (let i = 0; i < encryptedBytes.byteLength; i++) {
    binary += String.fromCharCode(encryptedBytes[i]);
  }
  return btoa(binary);
}
