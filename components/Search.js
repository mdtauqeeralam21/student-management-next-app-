// pages/search.js

import { useState } from 'react';
import {
  getAllAlumni,
  getAlumniById,
  getAlumniByEmail,
  getAlumniByDegree,
  getAlumniByBranch,
  getAlumniByYOP,
} from '@/pages/api/alumni';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const results = await getAllAlumni(); 
      const filteredResults = results.filter((alumni) => {
      
        const fullName = `${alumni.fullName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error fetching alumni:', error);
      setSearchResults([]);
    }
  };

  return (
    <div className='mt-32'>
      <input className='border-solid-2 border-black'
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map((alumni) => (
          <div key={alumni.id}>
            <p>Name: {`${alumni.fullName}`}</p>
            <p>Email: {alumni.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
