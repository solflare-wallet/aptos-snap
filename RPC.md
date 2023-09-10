# RPC Methods

### getPublicKey

Returns the wallet's public key encoded as hex string.

#### Parameters

An object containing:

- `derivationPath` - Derivation paths segments that will be appended to m/44'/637'
- `confirm` - Whether to show a confirm dialog.

#### Returns

Hex encoded public key.

Example:

```javascript
ethereum.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:@rise-wallet/aptos-snap',
    request: {
      method: 'getPublicKey',
      params: {
        derivationPath: [`0'`, `0'`],
        confirm: true
      }
   }
  }
});
```

### signTransaction

Sign a transaction and return the signature encoded as hex string.

#### Parameters

An object containing:

- `derivationPath` - Derivation paths segments that will be appended to m/44'/637'
- `message` - Transaction message encoded as hex string

#### Returns

An object containing:

- `publicKey` - Hex string encoded public key
- `signature` - Transaction signature encoded as hex string

Example:

```javascript
ethereum.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:@rise-wallet/aptos-snap',
    request: {
      method: 'signTransaction',
      params: {
        derivationPath: [`0'`, `0'`],
        message: '...'
      }
   }
  }
});
```

### signAllTransactions

Sign multiple transactions and return the signatures encoded as hex string.

#### Parameters

An object containing:

- `derivationPath` - Derivation paths segments that will be appended to m/44'/637'
- `messages` - An array of transaction messages encoded as hex string

#### Returns

An object containing:

- `publicKey` - Hex encoded public key
- `signatures` - An array of transaction signatures encoded as hex string

Example:

```javascript
ethereum.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:@rise-wallet/aptos-snap',
    request: {
      method: 'signAllTransactions',
      params: {
        derivationPath: [`0'`, `0'`],
        messages: ['...', '...']
      }
   }
  }
});
```

### signMessage

Sign a message (can be either arbitrary bytes or a UTF-8 string) and return the signature encoded as hex string.

#### Parameters

An object containing:

- `derivationPath` - Derivation paths segments that will be appended to m/44'/637'
- `message` - Message encoded as hex string

#### Returns

An object containing:

- `publicKey` - Hex encoded public key
- `signature` - Message signature encoded as hex string

Example:

```javascript
const bytes = new TextEncoder().encode('Lorem ipsum');
const hexMessage = bytesToHex(bytes);

ethereum.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: 'npm:@rise-wallet/aptos-snap',
    request: {
      method: 'signMessage',
      params: {
        derivationPath: [`0'`, `0'`],
        message: hexMessage
      }
   }
  }
});
```
