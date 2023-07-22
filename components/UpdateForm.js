import Select from './Select';
import TextInput from './TextInput';
import Textarea from './TextArea';
import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react';
import Link from 'next/link';


export default function UpdateForm(){
    const router = useRouter();
    const {id,email} = router.query;
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        degree: '',
        branch: '',
        yearOfPassed: '',
        description: '',
        photoUrl: '',
      });
      const [branchOptions, setBranchOptions] = useState([]);


      const fetchStudent = async () => {
        try {
          const response = await fetch(`http://localhost:3030/alumnis/${id}`);
          const data = await response.json();
          setFormData(data);
        } catch (error) {
          console.error('Error fetching student:', error);
        }
      };
    
      useEffect(() => {
        fetchStudent();
      }, [id]);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        if (name === 'degree') {
          setBranchOptions(getBranchOptionsForDegree(value));
        }
      };
      const getBranchOptionsForDegree = (selectedDegree) => {
      
        const degreeToBranchesMap = {
          'Engineering': ['Computer Science', 'Electronics', 'Mechanical'],
          'Science': ['Physics', 'Chemistry', 'Biology'],
          'Arts': ['Literature', 'History', 'Music'],
        };
    
        return degreeToBranchesMap[selectedDegree] || [];
      };
    
     
      const handleUpdate = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch(`http://localhost:3030/alumnis/${id}/${email}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            router.push('/'); 
          } else {
            console.error('Form submission failed.');
          }
        } catch (error) {
          console.error('Error submitting the form:', error);
        }
      };

    
    return(
    <>
    <div className="p-10 border-2 max-w-md mx-auto">
    <form className="max-w-md mx-auto" onSubmit={handleUpdate}>
      
    <TextInput
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
      />

      <TextInput
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email address"
      />
      
      <Select
        label="Degree"
        className="text-black"
        name="degree"
        value={formData.degree}
        onChange={handleChange}
        placeholder="Select your degree"
        options={[
          { value: 'Engineering', label: 'Engineering' },
          { value: 'Science', label: 'Science' },
          { value: 'Arts', label: 'Arts' },
        ]}
      />

      <Select
        label="Branch"
        name="branch"
        className="text-black"
        value={formData.branch}
        onChange={handleChange}
        placeholder="Select your branch"
        options={branchOptions.map((branch) => ({ value: branch, label: branch }))}
      />
      <TextInput
        label="Year of Passed"
        name="yearOfPassed"
        value={formData.yearOfPassed}
        onChange={handleChange}
        placeholder="Enter the year of passed"
      />

      <TextInput
        label="Photo URL"
        name="photoUrl"
        value={formData.photoUrl}
        onChange={handleChange}
        placeholder="Enter the URL of your photo"
      />

      <Textarea
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter a description"
      />
      <div className="flex justify-center mb-4"> 
      
      <button
      className="form-submit-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        type="submit"
      >
        Update
      </button>
      <Link href={"/student"}>
      <button
      className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        back
      </button>
      </Link>

      </div>
    </form>
    </div>
  </>
  )
  }