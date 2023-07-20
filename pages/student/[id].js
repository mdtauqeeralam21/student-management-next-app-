import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const response = await fetch(`http://localhost:9999/student/${id}`);
    if (!response.ok) {
      throw new Error('Student not found');
    }

    const student = await response.json();
    return { props: { student } };
  } catch (error) {
    return { props: {} };
  }
}


const StudentDetails = ({ student }) => {
  const router=useRouter();
  const [deleteMessage, setDeleteMessage] = useState('');
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:9999/student/${student.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: student.id }),
      });
  
      if (response.ok) {
        setDeleteMessage('Student deleted successfully');
        router.push("/");

      } else {
        const data = await response.json();
        setDeleteMessage(data.error || 'Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      setDeleteMessage('Failed to delete student');
    }
  };
  
  console.log(student);
  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Name: {student.fullName}</h1>
      <p>Age: {student.email}</p>
      <div>Degree:{student.degree}</div>
      <div>Branch:{student.branch}</div>
      <div>Year Of Passed:{student.yearOfPassed}</div>
      <div>Description:{student.description}</div>
      <div>Photo:{student.photoUrl}</div>
      <div>
        <button onClick={router.push(`/update/${student.id}`)}>Update</button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleDelete}
        >
          Delete 
        </button>
        {deleteMessage && <p>{deleteMessage}</p>}
      </div>

    </div>
  );
};

export default StudentDetails;


