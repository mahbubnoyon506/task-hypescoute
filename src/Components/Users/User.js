import React from 'react';
import { GoLocation } from "react-icons/go";
import { BsClock } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const User = ({ user }) => {
    const { name, address, category, followers, gender, joinDate } = user
    return (
        <div class="card w-full bg-accent sm:mb-8 lg:mb-0">
            <div class="card-body">
                <div class="avatar mx-auto">
                    <div class="w-36 rounded-full ">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <h3 className='text-2xl text-center font-medium'>{name}</h3>
                <div className='flex mx-auto items-center'>
                    <GoLocation />
                    <p className='ml-2'>{address}</p>
                </div>
                <div className='flex mx-auto items-center'>
                    <BsClock />
                    <p className='ml-2'>Joined On:{joinDate}</p>
                </div>
                <div className='flex justify-around mx-20'>
                    <a className='text-primary text-2xl mx-2 my-6' href=""><FaFacebookSquare /></a>
                    <a className='text-primary text-2xl mx-2 my-6' href=""><FaInstagramSquare /></a>
                    <a className='text-primary text-2xl mx-2 my-6' href=""><FaLinkedin /></a>
                    <a className='text-primary text-2xl mx-2 my-6' href=""><FaTwitterSquare /></a>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-primary font-medium p-2 border-2 rounded mx-2 border-dashed text-center'>{followers}k <span className='block text-primary font-normal'>Followers</span></p>
                    <p className='text-primary font-medium p-2 border-2 rounded mx-2 border-dashed text-center'>{category} <span className='block text-primary font-normal'>Categories</span></p>
                    <p className='text-primary font-medium p-2 border-2 rounded mx-2 border-dashed text-center'>{gender} <span className='block text-primary font-normal'>Gender</span></p>
                </div>
            </div>
        </div>
    );
};

export default User;