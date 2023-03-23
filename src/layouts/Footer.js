import React from 'react';
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md"
import { FOOTER_CATEGORIES, FOOTER_OUR_DIRECTORY, FOOTER_SECTION } from './../utility/footerInfo';
import { FOOTER_RECENT_BLOGS } from './../utility/footerInfo';

/**
 * File: src/layouts/Footer.js
 * Description: Footer Section All.
 * Data: 16/03/2023
 * Author: Renu Singroha
 */

const Footer = () => {

    return (
        <>
        <section className='md:block xxs:hidden'>
            <div className='bg-footer2-1 relative'>
                <div className='px-2  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 sm:grid-cols-1 py-6'>
                        <div>
                            <h5 className='text-white sm:text-left  xxs:text-center
                             mb-5 text-2xl font-bold '>Follow Us</h5>
                            <div>

                                <ul className=' fade-right list-none flex xxs:justify-center sm:justify-start'>
                                    {
                                        FOOTER_SECTION.map(data => {
                                            const { id, Icons } = data
                                            return (
                                                <li key={id} className='mr-2.5 mb-2 '>
                                                    <Link className='hover:bg-blue-400 bg-light1-11 w-12 h-12 items-center justify-center flex  ' href="/">
                                                        <i className=" text-white"><Icons /></i>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='sm:text-center md:text-start lg:text-start xl:text-start 2xl:text-start  xs:text-center'>
                            <h5 className='text-white mb-5 text-2xl font-bold sm:text-left  xxs:text-center '>Our Directory</h5>
                            <ul className='list-none '>
                                {
                                    FOOTER_OUR_DIRECTORY.map(data => {
                                        const { id, title, link } = data
                                        return (
                                            <li key={id} className='mb-1 font-normal xxs:justify-center sm:justify-start flex'>
                                                <Link href={link} className='flex hover:text-[#93c5fd] text-white text-base font-normal  before:text-xl before:mr-2.5 hover:before:mr-3.5'>
                                                    <MdKeyboardArrowRight className='text-[24px] sm:block xxs:hidden' />{title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className=''>
                            <h5 className='text-white mb-5 text-2xl font-bold xxs:justify-center sm:justify-start flex'>Recent Blogs</h5>
                            {
                                FOOTER_RECENT_BLOGS.map(data => {
                                    const { date, id, title } = data
                                    return (
                                        <div key={id} className='mb-3.5 '>

                                            <span className='text-gray-400 font-sm mb-2.5 xxs:justify-center sm:justify-start flex'>                        
                                                <Link href="/">{date}</Link>
                                            </span>
                                            <h6 className='text-white text-base font-medium xxs:justify-center sm:justify-start flex'>
                                                <Link href="/">{title}</Link>
                                            </h6>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className=''>
                            <h5 className='text-white mb-5 text-2xl font-bold xxs:justify-center sm:justify-start flex'>Categories</h5>
                            <ul className='list-none '>
                                {
                                    FOOTER_CATEGORIES.map(data => {
                                        const { title, id } = data
                                        return (
                                            <li key={id} className='mb-1 xxs:justify-center sm:justify-start flex'>
                                                <Link className='hover:text-[#93c5fd] text-white text-base font-normal flex  items-center   before:text-xl before:mr-2.5 hover:before:mr-3.5 ' href="/" >
                                                    <MdKeyboardArrowRight className='text-[24px] xxs:hidden sm:block' /> {title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-lightg-1 border-t-2 border-[hsla(216,8%,88%,.15)]'>
                <div className='px-2  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'  >
                    <div className='grid lg:grid-cols-2 sm:grid-cols-2 gap-4 xxs:grid-cols-1 py-1'>
                        <div className='sm:text-start   xxs:text-center'>
                            <ul className=' list-none sm:flex xs:block sm:float-left  xxs:text-center '>
                                <li className='mb-1 after:inline-flex after:ml-1 after:mr-1 text-white'>
                                    <Link href="/privacy-policy" className='hover:text-lightblue-10 text-white text-base font-normal  '>
                                        Privacy Policy |
                                    </Link>
                                </li>
                                <li className='mb-1 after:inline-flex after:mr-1 text-white'>
                                    <Link href="/" className='hover:text-lightblue-10 text-white text-base font-normal'>
                                        Legal
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div className='sm:text-right  xxs:text-center' >
                            <ul className='list-none sm:flex xxs:block sm:float-right xxs:text-center'>
                                <li className='mb-1 after:inline-flex  after:mr-1  text-white'>
                                    <Link href="/term-&-condition" className='hover:text-lightblue-10 text-white text-base font-normal  '>
                                        Terms & Conditins |
                                    </Link>
                                </li>
                                <li className='mb-1 after:inline-flex after:mr-1 text-white'>
                                    <Link href="/" className='hover:text-lightblue-10 text-white text-base font-normal'>
                                        Services |
                                    </Link>
                                </li>
                                <li className='mb-1 after:inline-flex  after:mr-1 box-border text-white'>
                                    <Link href="/" className='hover:text-lightblue-10 text-white text-base font-normal '>
                                        Career
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#c1c1c1] text-black'>
                <div className='justify-center flex'>
                    <p className='flex  text-[.875rem]'>Copyright © 2023. <Link href="https://www.makemywebsite.com.au/" className=' text-[.875rem] font-normal sm:flex md:flex lg:flex xl:flex  2xl:flex  xs:inline-block hover:text-lightblue-10 pl-2' target="blank"> 
                        Make My Website
                    </Link></p>
                </div>
            </div>
            </section>
        </>
    )
}

export default Footer;