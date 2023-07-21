import UpdateForm from '@/components/UpdateForm';
import { useSession,signIn,signOut } from 'next-auth/react';
const Update = () => {
  const {data:session}=useSession();
  if (session) {
  return (
   
    <div>
      <h1 className='text-4xl font-bold text-center mb-4'>Update your detail</h1>
      <UpdateForm />
    </div>
  );
}else {
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
export default Update;