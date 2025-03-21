'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter()
  const [loaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded(true)
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-lvh w-lvw flex-col items-center justify-between space-y-5 bg-gray-50'>
      <section className="flex flex-col justify-center items-center w-full h-96 p-10">
        <Image src='/images/localoka-logo.svg' alt="Localoka" width={100} height={100} />
        <Image src='/images/assets/yellow-cart.webp' alt="Localoka Yello Cart" width={350} height={350} className={`${loaded ? "grayscale" : "grayscale-0"} transition-all transform-gpu delay-300 duration-1000`} />
      </section>
      <div className="p-5 h-full flex flex-col justify-between">
        <section className='flex flex-col items-center justify-center space-y-5 md:max-w-[596px]'>
          <h1 className='text-3xl font-semibold'>
            {error.message || "Oops! Terjadi kesalahan pada server. Silakan coba lagi nanti."},
          </h1>
          <p className='text-left text-lg'>Silakan coba beberapa saat lagi atau hubungi tim dukungan kami jika masalah berlanjut.</p>
        </section>
        <button onClick={() => router.replace('/')} className='bg-primary self-end text-white p-3.5 font-semibold w-full rounded-lg'>
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}