import { Inter } from 'next/font/google'
import Login from '@/components/Login'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Login />
    <div>
    <Link href='/list'>List</Link>
    </div>
    </>
  )
}
