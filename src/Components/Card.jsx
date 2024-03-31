import React from 'react'
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'
import shoe_image from '../assets/shoe_image.png'

const Card = () => {
    return (
        <div className='container w-full mx-auto my-5 px-20 bg-gray-400 flex'>
            <div className='content w-1/2'>
                <span className='font-extrabold text-black text-8xl'>YOUR FEET</span><br />
                <span className='font-extrabold text-black text-8xl'>DESERVE</span><br />
                <span className='font-extrabold text-black text-8xl'>THE BEST</span><br />
                <p className='font-[Poppins] text-[#5A5959]'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO</p>
                <p className='font-[Poppins] text-[#5A5959]'>HELP YOU WITH OUR SHOES. YOUR FEET DESERVE</p>
                <p className='font-[Poppins] text-[#5A5959]'>THE BEST AND WE'RE HERE TO HELP YOU WITH OUR</p>
                <p className='font-[Poppins] text-[#5A5959]'>SHOES.</p>

                <div className='flex gap-8 my-5'>
                    <button className='bg-[#D01C28] font-medium border-2 border-[#D01C28] text-white px-3 py-1'>Shop Now</button>
                    <button className='text-[#5A5959] font-medium border-2 border-[#5A5959] px-3 py-1'>Category</button>
                </div>

                <div>
                    <p className='text-[Inter] text-[#5A5959] text-xs font-medium mb-2'>Also Available On</p>
                </div>
                <div className='flex'>
                    <img src={flipkart} alt="Flipkart" className='size-6'/>
                    <img src={amazon} alt="Amazon" className='size-6'/>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={shoe_image} alt="Shoe_Image" />
            </div>

        </div>
    )
}

export default Card