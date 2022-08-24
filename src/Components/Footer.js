import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer class="py-10 px-20 bg-accent text-base-content">
                <div className='lg:flex'>
                    <div className='md:text-center lg:text-left basis-1/4'>
                        <p className='text-2xl font-bold pb-5'>Hypescout</p>
                        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                        <div className=''>
                            <a class="link link-hover">Branding</a>
                            <a class="link link-hover">Design</a>
                            <a class="link link-hover">Marketing</a>
                            <a class="link link-hover">Advertisement</a>
                        </div>
                        <div>
                            <div className='flex sm:justify-center lg:justify-start'>
                                <a className='text-primary text-2xl mx-2 my-6' href=""><FaFacebookSquare /></a>
                                <a className='text-primary text-2xl mx-2 my-6' href=""><FaInstagramSquare /></a>
                                <a className='text-primary text-2xl mx-2 my-6' href=""><FaLinkedin /></a>
                                <a className='text-primary text-2xl mx-2 my-6' href=""><FaTwitterSquare /></a>
                            </div>
                        </div>
                    </div>
                    <div className='flex sm:justify-evenly lg:justify-start basis-3/4 lg:ml-20'>
                        <div className='lg:basis-1/3'>
                            <span class="footer-title">Company</span>
                            <a class="link link-hover block py-2">Branding</a>
                            <a class="link link-hover block">Design</a>
                            <a class="link link-hover block py-2">Marketing</a>
                            <a class="link link-hover block">Advertisement</a>
                            <a class="link link-hover block py-2">Marketing</a>
                            <a class="link link-hover block">Advertisement</a>
                        </div>
                        <div className='lg:flex justify-between basis-2/3'>
                            <div className='basis-1/2'>
                                <span class="footer-title">Influencer</span>
                                <a class="link link-hover block py-2">About us</a>
                                <a class="link link-hover block">Contact</a>
                                <a class="link link-hover block py-2">Jobs</a>
                                <a class="link link-hover block">Press kit</a>
                            </div>
                            <div className='basis-1/2'>
                                <span class="footer-title">Adviser</span>
                                <a class="link link-hover block py-2">Terms of use</a>
                                <a class="link link-hover block">Privacy policy</a>
                                <a class="link link-hover block py-2">Cookie policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='lg:flex justify-between items-center bg-accent px-20 py-10 lg:flex-row-reverse'>
                <div className=''>
                    <ul className='flex justify-around '>
                        <li><a href="">Terms & Condition</a></li>
                        <li className='mx-5'><a href="">Privacy</a></li>
                        <li><a href="">Sitemap</a></li>
                    </ul>
                </div>
                <div className='sm:text-center sm:mt-2 lg:mt-0'>
                    <p className='font-medium'>© Hypescout 2022. <span className='font-normal text-sm'>All right reserved.</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;