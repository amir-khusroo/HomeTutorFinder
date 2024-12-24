import React from 'react';
import img2 from './images/img2.webp'
import { ReactTyped } from "react-typed";
const HomePage = () => {
  return (
    <>
      <div className="w-full bg-slate-300 min-h-full flex items-center justify-center p-9">
        <div className="text-center text-lg" >
          <ReactTyped className='text-3xl text-black' strings={["Welcome to HomeTutorFinder", "We Offering Home Tutoring", "Join with Us! ", "Grow with us", "Boost Your Knowledge"]} typeSpeed={100} loop={true} backSpeed={50} />


          {/* <button className="mt-6 px-4 py-1 bg-black text-white rounded hover:bg-[orange] transition mb-5">
          Get Started
          </button> */}
        </div>
      </div>
      <div className='max-w-[1250px]  mx-auto md:grid grid-cols-2 justify-between '>
        <div className=' col-span-1'>
          <h1 className='text-3xl font-bold text-center'>About</h1>
          <br />
          <p className='px-6'>Welcome to Home-Tutor-Finder, we are  go-to solution for finding top-quality home and online tutors  to your learning needs.
            Whether you're looking for help in academics, test preparation, or skill development, we connect students and parents with highly qualified tutors who offer personalized lessons at home.</p>
          <br />
          <p className='px-6 text-[blue]'>At Home-tutor-finder, we are committed to helping students achieve their academic goals by connecting them with the best tutors for their individual needs.</p>
        </div >
        <div className=' col-span-1'>
          <img src={img2} alt="" className='h-[400px] flex float-end' /></div>
      </div>
    </>
  );
};

export default HomePage;
