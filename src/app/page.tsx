import Image from 'next/image'
import Header from "@/components/Header"
import Hero from '@/components/views/Hero'
 

import { Mail } from "lucide-react"
import ProductList from '@/components/views/ProductList'

export default function Home() {
  return (
    
   <div className='container'>
    <Hero />
    <ProductList />
   </div>
   
  )
}
  