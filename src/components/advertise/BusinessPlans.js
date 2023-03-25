import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const BusinessPlans = () => {
  return (
    <div className='pb-28 lg:block md:hidden xxs:hidden'>
        <h1 className='text-center text-2xl tracking-wide pb-10'>MAKE THE MOST OF YOUR LISTING, ENHANCED CONTENT AND MORE REACH</h1>
        <div className='flex justify-between lg:w-[100%] 2xl:w-5/6 xl:w-[90%] md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto'>
            <div className='w-[30%] border-b border-slate-500'>
                <h1 className='text-xl text-slate-700 pb-1 border-b border-slate-500 pt-2 pl-3'>COMPARE PLANS</h1>
                <p className='para py-3 px-2 text-slate-700'>What's right for your business?</p>
            </div>
            <div className='w-[70%] flex bg-[#f1f2f2]'>
                     <div className='border-b border-slate-500 w-[33.3%] text-center'>
                        <h1 className='text-xl text-slate-700 pb-1 border-b border-slate-500 pt-2 pl-3'>FREE</h1>
                        <p className='para py-4 text-sm pr-7 pl-3'>A great way to gain some exposure while you encourage your customers to review your business.</p>
                    </div>
                    <div className='border-b border-slate-500  w-[33.3%] text-center'>
                        <h1 className='text-xl text-slate-700 pb-1 border-b border-slate-500 pt-2 pl-3'>BASIC</h1>
                        <h2 className='text-md text-slate-700 pt-3 pb-1'>$33* per month</h2>
                        <p className='para pb-3 text-sm pr-7'>The way to go when you're ready to make more noise, with a higher search ranking and enhanced listing featuring more engaging content.</p>
                    </div>
                    <div className='border-b border-slate-500  w-[33.3%] text-center'>
                        <h1 className='text-xl text-slate-700 pb-1 border-b border-slate-500 pt-2 pl-3'>PRIORITY</h1>
                        <h2 className='text-md text-slate-700 pt-3 pb-1'>From $99* per month</h2>
                        <p className='para pb-3 text-sm pr-7'>The pack for businesses that mean business and eligibility for our premium ad placements.</p>
                    </div>
            </div>
        </div>
        <div className='flex justify-between lg:w-[100%] 2xl:w-5/6 xl:w-[90%] md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto'>
            <div className='w-[30%]'>
                <h1 className='border-b border-slate-500 px-3 h-[53px] text-lg text-slate-600'>Features</h1>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm py-2.5 text-slate-700'>Link to your website</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>Share price list, menus, and other documents</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>Add photos of your business</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>Your slogan included in search results</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>Access to business centre</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>Promote your special offers with True Local deals</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>You choose which review to show in search results</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>Add video to your listing</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>Rank higher in search results (more boost)</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>Access to account manager</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>Reporting on your listing's performance</p>
                <p className='para border-b border-slate-500 h-[41px] overflow-hidden px-3 text-sm pt-2.5 text-slate-700'>1300 number available on request</p>
            </div>
            <div className='w-[70%] bg-[#f1f2f2] text-slate-700'>
                <div className='flex justify-around border-b border-slate-500 h-[53px] pt-2'>
                  <p className='bg-[#3596DA] rounded-md text-white text-sm pt-2 w-28 text-center mb-2'>SIGN UP</p>
                  <p className='bg-[#3596DA] rounded-md text-white text-sm pt-2 w-28 text-center mb-2'>ENQUIRE</p>
                  <p className='bg-[#3596DA] rounded-md text-white text-sm pt-2 w-28 text-center mb-2'>ENQUIRE</p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 overflow-hidden py-2.5 text-center'>1</p>
                  <p className='text-sm px-3 overflow-hidden py-2.5 text-center'>1</p>
                  <p className='text-sm px-3  overflow-hidden py-2.5 text-center'>2</p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 h-[41px] overflow-hidden py-2.5 text-center'>1</p>
                  <p className='text-sm px-3 h-[41px] overflow-hidden py-2.5 text-center'>1</p>
                  <p className='text-sm px-3 h-[41px] overflow-hidden py-2.5 text-center'>3</p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2.5 text-center'>1</p>
                  <p className='text-sm px-3 py-2.5 text-center'>2</p>
                  <p className='text-sm px-3 py-2.5 text-center'>3</p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2 text-center'>----</p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2 text-center'>----</p>
                  <p className='text-sm px-3 py-2 text-center'>----</p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2 text-center'>----</p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2 text-center'>----</p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2 text-center'>----</p>
                  <p className='text-sm px-3 py-2 text-center'>----</p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
                <div className='flex justify-around border-b border-slate-500 h-[41px]'>
                  <p className='text-sm px-3 py-2 text-center'>----</p>
                  <p className='text-sm px-3 py-2 text-center'>----</p>
                  <p className='text-sm px-3 py-2 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
            </div>
        </div>
        <div className='lg:w-[100%] 2xl:w-5/6 xl:w-[90%] md:5/6 md:px-7 xxs:w-full xxs:px-2 mx-auto'>
            <p className='para text-sm py-2 px-3 border-l border-r border-b border-slate-500'>*excluding GST</p>
            <div className='bg-[#f1f2f2]'>
                <h1 className='pt-3 px-3'>TOP OF LIST</h1>
                <div className='flex justify-between items-center px-3'>
                    <h1>When you want to stand out, Top of List might be the right fit for your business, with all Priority features,</h1>
                    <button className='bg-[#3596DA] rounded-md py-2 text-white text-sm w-28 text-center mb-2'>ENQUIRE</button>
                </div>
                <div className='border-b border-slate-500 flex justify-between items-center px-3'>
                    <p className='para text-sm py-2 text-slate-700'>Top placement in search results</p>
                    <p className='text-sm mr-10 py-1.5 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
                <div className='border-b border-slate-500 flex justify-between items-center px-3'>
                    <p className='para text-sm py-2 text-slate-700'>Target multiple suburbs</p>
                    <p className='text-sm mr-10 py-1.5 text-center'><IoCheckmarkCircleOutline className='h-6 w-6 text-lightblue-10'/></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessPlans;