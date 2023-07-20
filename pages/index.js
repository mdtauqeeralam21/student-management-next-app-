import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import HomePage from '@/components/Homepage'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout>
    <HomePage/>
    </Layout>
    </>
  )
}
