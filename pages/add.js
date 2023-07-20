import React, { useState } from 'react';
import FormDataForm from '@/components/FormData';

const Home = () => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Save Data to Backend</h1>
      <FormDataForm setMessage={setMessage} />
      <p>{message}</p>
    </div>
  );
};

export default Home;
