import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="flex justify-end w-full p-2">
        <div className="text-center p-2 m-2">Welcome, {session.user.name} </div>
        <button className="float-right bg-red-300 text-black rounded p-2 m-2"
         onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <>
      <button className="bg-blue-600 float-right p-2 rounded text-white m-2" 
      onClick={() => signIn()}>Sign in</button>
    </>
  )
}