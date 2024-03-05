"use client"
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter, useSearchParams } from 'next/navigation'

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')
  const location = searchParams.get('location')
  const nbGuests = searchParams.get('nbGuests')


  return (
    <div className="">
      <Header />

      <main className="flex ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300 + Rare Barbies</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Find in Mars</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Barbie</p>
            <p className="button">Price</p>
            <p className="button">Year</p>
            <p className="button">More Filters</p>



          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Page
