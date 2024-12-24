import React from 'react'
import img1 from './images/img..jpg';
export default function Expert() {
    return (
        <div className='max-w-[1250px]  mx-auto md:grid grid-cols-2 '>
            <div className=' col-span-1 w-[80%]'>
                <img src={img1} alt="" />
            </div>
            <div className='col-span-1'>
                <h3 className='text-[black]  text-center text-3xl font-bold mb-5'  >Know about our Goal</h3>
                <p>In our website you can enhance your Knowledge!
                    <br />
                    <p className='text-blue-800 font-bold '>Easy Access to Qualified Tutors:</p>
                    Provide a directory of  experienced tutors across different subjects, making it easy for students or parents to find suitable tutors based on expertise, location, availability, and rates.
                    <p className='text-blue-800 font-bold '>Personalized Learning:</p>
                    Allow students to find tutors who match their learning style, needs, and academic goals for a customized learning experience.

                </p>
            </div>
        </div>
    )
}
