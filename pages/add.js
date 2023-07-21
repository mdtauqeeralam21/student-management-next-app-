import React, { useState } from 'react';
import AddData from '@/components/AddData';

const Home = () => {

  return (
    <div >
      <h1 className='text-3xl font-bold text-green-900 text-center mb-4 '>Add your detail</h1>
      <AddData />
    </div>
  );
};

export default Home;
