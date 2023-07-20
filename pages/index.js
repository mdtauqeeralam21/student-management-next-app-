import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'
import HomePage from '@/components/HomePage'

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
