'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();

  return (
    <div className={'flex-1 text-white p-6 bg-[#1d2025]'}>
      <div className={'flex gap-4 justify-center'}>
        <button
          className={
            'w-[100px] py-2 justify-end text-black font-bold rounded-md bg-amber-100 cursor-pointer'
          }
          onClick={() => router.push('/')}
        >
          Home
        </button>
        <button
          className={
            'w-[100px] py-2 justify-end text-black font-bold rounded-md bg-amber-100 cursor-pointer'
          }
          onClick={() => router.push('/pick')}
        >
          Pick
        </button>
        <button
          className={
            'w-[100px] py-2 justify-end text-black font-bold rounded-md bg-amber-100 cursor-pointer'
          }
          onClick={() => router.push('/pack')}
        >
          Pack
        </button>
      </div>
    </div>
  );
};

export default Navigation;
