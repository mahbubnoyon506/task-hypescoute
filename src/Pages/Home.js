import React from 'react';
import Search from '../Components/Search';
import Users from '../Components/Users/Users';

const Home = () => {
    return (
        <div className='mx-20 '>
           <Search></Search>
           <Users></Users>
        </div>
    );
};

export default Home;