import { TRANSACTIONS_ENDPOINT } from '@multiversx/sdk-dapp/apiCalls/endpoints';
import { Label } from 'components/Label';
import { ExplorerLink } from 'components/sdkDappComponents';
import { useGetNetworkConfig } from 'hooks';
import { getTransactionUrl, useTransactionOutcome } from './helpers';
import { useEffect, useState } from 'react';
import { getTransactionByHashPromise } from '@multiversx/sdk-dapp/apiCalls/transactions/getTransactionsByHashes';

export const Transaction = ({onAsyncDataChange}) => {
  const { network } = useGetNetworkConfig();

  const transactionUrl = getTransactionUrl(network.walletAddress);

  const txData = useTransactionOutcome();

  const [asyncData, setAsyncData] = useState(null);  
  
  
  useEffect(() => {
    // Define an async function
    const fetchData = async () => {
      try {
        if (!txData.txHash) {
          return null;
        }
        let response = await getTransactionByHashPromise(txData.txHash);  // Assume someAsyncFunction is your async function
        let fished = response.data["logs"].events.pop().data;
        setAsyncData(fished);
        onAsyncDataChange(fished);  // Assume the data is in the response.data field
      } catch (error) {
        console.error(error);
      }
    };

    // Call the async function
    fetchData();
  }, [onAsyncDataChange]);  // Empty dependency array means this useEffect runs once, similar to componentDidMount


  return (
    <div className='flex flex-col gap-2 text-sm'>
      <a
        href={transactionUrl}
        className='self-start inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white mr-0 border-solid border-blue-600 border-[1px]'
      >
        GoFish
      </a>
    </div>
  );
};
