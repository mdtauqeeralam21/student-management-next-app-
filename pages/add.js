import React, { useState } from 'react';
import FormDataForm from '@/components/AddData';

const Home = () => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Add your detail</h1>
      <FormDataForm setMessage={setMessage} />
      <p>{message}</p>
    </div>
  );
};

export default Home;
