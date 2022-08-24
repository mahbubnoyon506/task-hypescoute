import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from './User';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('data.json')
            setUsers(data)
        })()
    }, [])

    return (
        <div>

            <div className='lg:grid grid-cols-3 gap-5 mb-8'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            <div className='flex justify-between items-center mb-20'>
                <div className='flex items-center justify-start'>
                    <BsArrowLeft />
                    <button className='inline-block'>Previous</button>
                </div>
                <div>
                    <ul className='flex'>
                        <li><a className='rounded-full bg-black px-3 py-1 mx-1 text-white' href="">1</a></li>
                        <li><a className='rounded-full bg-black px-3 py-1 mx-1 text-white' href="">2</a></li>
                        <li className='sm:hidden md:block'><a className='rounded-full bg-black px-3 py-1 mx-1 text-white' href="">3</a></li>
                        <li><a className='rounded-full' href="">....</a></li>
                        <li className='sm:hidden md:block'><a className='rounded-full bg-black px-3 py-1 mx-1 text-white' href="">8</a></li>
                        <li className='sm:hidden md:block'><a className='rounded-full bg-black px-3 py-1 mx-1 text-white' href="">9</a></li>
                        <li><a className='rounded-full bg-black px-3 py-1 mx-1 text-white' href="">10</a></li>
                    </ul>
                </div>
                <div className='flex justify-end items-center'>
                    <button>Next</button>
                    <BsArrowRight />
                </div>
            </div>
        </div>
    );
};

export default Users;