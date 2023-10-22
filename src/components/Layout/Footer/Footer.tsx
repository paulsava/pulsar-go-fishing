import HeartIcon from 'assets/img/heart.svg?react';

export const Footer = () => {
  return (
    <footer className='mx-auto w-full max-w-prose pb-6 pl-6 pr-6 text-center text-gray-400'>
      <div className='flex flex-col items-center text sm text-gray-400'>
        <a className='mx-auto'>
          Made with <HeartIcon className='w-fill fill-gray-400' /> by the
          PularMoney team
        </a>
      </div>
    </footer>
  );
};
