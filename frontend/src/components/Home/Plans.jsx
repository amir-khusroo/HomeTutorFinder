import React from 'react'
//import img3 from '../images/musha.jpg';
import img3 from './images/musha.jpg'
import img4 from './images/img4.jpg'
export default function Plans() {
  return (
    <div className='py-[100px]'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
        <div className=' shadow-lg h-[420px] hover:scale-105 duration-100'>
          <div className='flex justify-center'>
            <img src={img4} alt="" className='h-[100px] rounded-full' />
          </div>
          <h2 className='text-3xl font-bold text-sky-500 text-center'>Amir Khusroo</h2>
          <br />
          <h2 className='font-semibold text-3xl text-center'>Mathematics</h2>
          <br />
          <h1 className='font-semibold text-3xl text-center'>Hyderabad</h1>
          <br />
          <p className='text-center text-[blue]'>I am a math teacher with 2 years of experience</p>
          <br />
          <div className='grid-cols-2 flex justify-center'>
            <div className='flex justify col-span-1 mr-5'>
              <button className='flex justify-center text-[red] bg-slate-800 rounded-md px-7 py-4'>view profile</button>
            </div>
            <div className='flex justify-center col-span-1 '>
              <button className='flex justify-center text-[red] bg-slate-800 rounded-md px-7 py-4'>start trial</button>
            </div>
          </div>
        </div>
        <div className=' shadow-lg h-[420px] bg-slate-300 hover:scale-105 duration-100 ' >
          <div className='flex justify-center'>
            <img src={img3} alt="" className='h-[100px] rounded-full' />
          </div>
          <h2 className='text-3xl font-bold text-sky-500 text-center'>Name</h2>
          <br />
          <h2 className='font-semibold text-3xl text-center'>Mathematics</h2>
          <br />
          <h1 className='font-semibold text-3xl text-center'>Secundrabad</h1>
          <br />
          <p className='text-center text-[blue]'>I am a math teacher with 2 years of experience</p>
          <br />
          <div className='grid-cols-2 flex justify-center'>
            <div className='flex justify col-span-1 mr-5'>
              <button className='flex justify-center text-[red] bg-slate-800 rounded-md px-7 py-4'>view profile</button>
            </div>
            <div className='flex justify-center col-span-1 '>
              <button className='flex justify-center text-[red] bg-slate-800 rounded-md px-7 py-4'>start trial</button>
            </div>
          </div>
        </div>
        <div className=' shadow-lg h-[420px] hover:scale-105 duration-100'>
          <div className='flex justify-center'>
            <img src={img3} alt="" className='h-[100px] rounded-full' />
          </div>
          <h2 className='text-3xl font-bold text-sky-500 text-center'>Mushfique Alam</h2>
          <br />
          <h2 className='font-semibold text-3xl text-center'>Mathematics</h2>
          <br />
          <h1 className='font-semibold text-3xl text-center'>Gachibowli</h1>
          <br />

          <p className='text-center text-[blue]'>I am a Physics teacher with 2 years of experience</p>
          <br />
          <div className='grid-cols-2 flex justify-center'>
            <div className='flex justify col-span-1 mr-5'>
              <button className='flex justify-center text-[red] bg-slate-800 rounded-md px-7 py-4'>view profile</button>
            </div>
            <div className='flex justify-center col-span-1 '>
              <button className='flex justify-center text-[red] bg-slate-800 rounded-md px-7 py-4'>start trial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
