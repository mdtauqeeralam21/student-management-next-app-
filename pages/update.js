import React, { useState } from 'react';
import UpdateForm from '@/components/UpdateForm';
const Home = () => {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Update your detail</h1>
      <UpdateForm />
      <p>{message}</p>
    </div>
  );
};
export default Home;