import { AuthRedirectWrapper, PageWrapper } from 'wrappers';
import { Transaction } from './GoFish';
import RotatingCard from 'components/RotatingCard/RotatingCard';
import { SetStateAction, useState } from 'react';

export const Home = () => {
  const [asyncData, setAsyncData] = useState("");

  const handleAsyncDataChange = (data: SetStateAction<string>) => {
    setAsyncData(data);
  };


  return (
    <AuthRedirectWrapper requireAuth={false}>
      <PageWrapper>
        <div className='flex flex-col-reverse sm:flex-row items-center h-full w-full'>
          <div className='flex items-start sm:items-center h-full sm:w-3/5 sm:bg-center'>
            <div className='flex flex-col gap-2 max-w-[70sch] text-center sm:text-left text-xl font-medium md:text-2xl lg:text-3xl'>
              <div>
                <h1>Pulsar Go Fishing</h1>
              </div>
              <Transaction onAsyncDataChange={handleAsyncDataChange}/>
            </div>
          </div>
          <div>
            <RotatingCard asyncData={asyncData} />
          </div>
        </div>
        <div>


          
        </div>
      </PageWrapper>
    </AuthRedirectWrapper>
  );
};
