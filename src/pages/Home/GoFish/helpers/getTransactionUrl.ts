import { TokenTransfer } from '@multiversx/sdk-core';
import { WALLET_PROVIDER_SEND_TRANSACTION_URL } from '@multiversx/sdk-dapp/constants';

/**
 * For documentation, check out {@link https://docs.multiversx.com/wallet/webhooks#send-transaction-hook send transaciton hook}
 */
export const getTransactionUrl = (walletAddress: string) => {
  const walletBaseUrl = `${walletAddress}/${WALLET_PROVIDER_SEND_TRANSACTION_URL}`;

  const receiver =
    'erd1qqqqqqqqqqqqqpgqmrdfdd8c2kzl477hvzlamnszkgyf5ux9crwqct5kaj'; // add your receiver address here
  const data = 'getNfts';
  const value = TokenTransfer.egldFromAmount('0.05').toString();
  const callbackUrl = encodeURIComponent(window.location.origin);
  const gasLimit = '10000000'; // Minimum gasLimit for guarded wallets

  const searchParams = {
    receiver,
    value,
    data,
    callbackUrl,
    gasLimit
  };

  const search = new URLSearchParams(searchParams).toString();

  const walletUrl = `${walletBaseUrl}?${search}`;
  return walletUrl;
};
