import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Skeleton from "@/components/Skeleton";
import { useSession,signIn,signOut } from "next-auth/react";


export async function getServerSideProps({ params }) {
  const { id } = params;
  
  try {
    const response = await fetch(`http://localhost:3030/alumnis/${id}`);
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
  const {data:session}=useSession();
  const [deleteMessage, setDeleteMessage] = useState('');
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3030/alumnis/${student.id}/${student.email}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: student.id }),
      });
  
      if (response.ok) {
        setDeleteMessage('Student deleted successfully');
        router.push("/student");

      } else {
        const data = await response.json();
        setDeleteMessage(data.error || 'Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      setDeleteMessage('Failed to delete student');
    }
  };
  
  
  if (!student) {
    return <Skeleton />;
  }
  if(session){
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className=" container w-2/3 p-8 bg-white rounded shadow flex">
        <div className="w-2/3">
          <h1 className="text-3xl font-bold mb-4"> {student.fullName}</h1>
          <p className="text-lg">Email: {student.email}</p>
          <div className="mt-6">Degree: {student.degree}</div>
          <div>Branch: {student.branch}</div>
          <div>Year Of Passing: {student.yearOfPassed}</div>
          <div className="mt-6">Description: {student.description}</div>
          
          <div className="mt-8 ">
          {session?.user?.email==student.email?(
      <div>
        <Link href={"/update/"+student.id+"/"+student.email}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded m-4">Update</button>
        </Link>
        <button
          className="bg-red-500 text-white px-4 py-2 m-4 rounded mt-4"
          onClick={handleDelete}
        >
          Delete 
        </button>
        {deleteMessage && <p>{deleteMessage}</p>}
      </div>):<div></div>
      }
          </div>
        </div>
        <div className="w-2/5 pl-6 flex justify-end">
          <img
          src={student.photoUrl}
          width={`200`}
          height={`200`} 
          alt="Student Photo" className="rounded" />
        </div>
      </div>
    </div>
  );
}else{
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
        <h2
          className="text-lg p-2 bg-blue-800 w-1/3 text-center text-white font-semibold mb-4 rounded hover:bg-blue-400"
          onClick={() => signIn()}
        >
          Sign in
        </h2>
        <p className="text-gray-700 text-xl mb-4">
          Please sign in to access the content.
        </p>
        <p className="text-gray-700 ">
          Sign in using your credentials to unlock the full experience.
        </p>
      </div>
    </div>
  );
}
}

export default StudentDetails;


