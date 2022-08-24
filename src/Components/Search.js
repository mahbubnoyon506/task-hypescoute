import React from 'react';
import { BiFilterAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div>
            <div class=" w-full bg-accent my-8 py-5 rounded px-6">
                <div >
                    <div className='lg:flex items-center'>
                        <p className=' text-base font-bold basis-1/6'>Profile(100)</p>
                        <div className=' flex items-center basis-4/6 sm:my-5 lg:my-0'>
                            <FaSearch className='mr-[-25px] z-10' />  <input className='w-full rounded bg-transparent border h-12 pl-7' type="search" name="" id="" placeholder='Search Profile' />
                        </div>
                        <div class="dropdown dropdown-end basis-1/6">
                            <label tabindex="0" class="btn m-1 bg-neutral"> <BiFilterAlt /> Advanced Filter</label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-accent rounded-box w-full">
                                <p className='border-b-2 pb-2 font-medium'>Filter Option</p>
                                <div class="form-control w-full">
                                    <label class="label">
                                        <span class="label-text">Influencer's industry</span>
                                    </label>
                                    <select class="select select-sm">
                                        <option disabled selected>Select Options</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                    <label class="label">
                                        <span class="label-text">Influencer's Country</span>
                                    </label>
                                    <select class="select select-sm">
                                        <option disabled selected>Select Options</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                    <label class="label">
                                        <span class="label-text">Audience's Country</span>
                                    </label>
                                    <select class="select select-sm">
                                        <option disabled selected>Select Options</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                    <label class="label">
                                        <span class="label-text">Influencer's Social Media Platform</span>
                                    </label>
                                    <select class="select select-sm">
                                        <option disabled selected>Select Options</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                    <div className='py-3'>
                                        <input className='w-full' type="range" name="range" id="" />
                                        <div className='flex justify-evenly text-sm'><p>1k</p><p>25k</p><p>50k</p><p>100k</p><p>250k</p><p>500k</p></div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p> <input type="radio" name="gender" id="" checked/> Male</p>
                                        <p> <input type="radio" name="gender" id="" /> Female</p>
                                    </div>
                                    <div className='flex justify-end py-3'>
                                        <input className='btn btn-secondary btn-sm mr-2' type="reset" value="Reset" />
                                        <input className='btn btn-neutral btn-sm' type="submit" value="Apply" />
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Search;