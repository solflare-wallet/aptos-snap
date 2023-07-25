export function bytesToHex(bytes) {
  return `0x${[...bytes].map((b) => b.toString(16).padStart(2, '0')).join('')}`;
}

export function hexToBytes(hex) {
  const strippedHex = hex.startsWith('0x') ? hex.slice(2) : hex;
  const bytes = [];
  for (let i = 0; i < strippedHex.length; i += 2) {
    bytes.push(parseInt(strippedHex.substr(i, 2), 16));
  }
  return Uint8Array.from(bytes);
}

export function assertInput(path) {
  if (!path) {
    throw {
      code: -32000,
      message: 'Invalid input.'
    };
  }
}

export function assertAllStrings(input) {
  if (!Array.isArray(input) || !input.every((item) => typeof item === 'string')) {
    throw {
      code: -32000,
      message: 'Invalid input.'
    };
  }
}

export function assertIsArray(input) {
  if (!Array.isArray(input)) {
    throw {
      code: -32000,
      message: 'Invalid input.'
    };
  }
}

export function assertIsString(input) {
  if (typeof input !== 'string') {
    throw {
      code: -32000,
      message: 'Invalid input.'
    };
  }
}

export function assertIsBoolean(input) {
  if (typeof input !== 'boolean') {
    throw {
      code: -32000,
      message: 'Invalid input.'
    };
  }
}

export function assertConfirmation(confirmed) {
  if (!confirmed) {
    throw {
      code: 4001,
      message: 'User rejected the request.'
    };
  }
}
