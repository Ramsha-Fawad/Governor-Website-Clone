import React from 'react';

export default function Hero() {
  return (
    <section className='hero h-screen items-center bg-cover bg-center' style={{backgroundImage: "url('/governor-bg.jpg')"}}>
      <div className='flex flex-row items-center h-full pt-20 pl-28 space-x-48'>
      <div className='space-y-3 h-full justify-center w-1/20'>
        <h1 className='text-sky-800 font-extrabold text-7xl py-1'> Governor Sindh</h1>
        <h2 className='text-sky-800 text-5xl font-normal'>Kamran Khan Tessori</h2>
        <h3 className='text-sky-500 text-5xl font-bold py-4'>Certified Cloud <br />Applied Generative AI <br />  Engineer (GenEng)</h3>
        <p className='text-sky-800 text-3xl font-bold'>Earn up to $5,000 / month</p>
        <p className='text-sky-800 text-3xl font-bold pb-7'>Now admissions are open in <br /> Hyderabad</p>
        <div className='flex flex-row gap-14'>
        <div className='p-2'><button className='bg-sky-800 text-white text-lg font-bold w-48 h-14 p-0 rounded-md'>APPLY NOW</button></div>
        <div className='flex flex-col items-center'><p className='text-sky-800 font-bold text-4xl'>562,143</p>
        <p className='text-sky-800 text-lg'>Accepted Applications</p></div>
        </div>
      </div>
      </div>
    </section>
  )
}
