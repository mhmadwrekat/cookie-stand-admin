import React from 'react'
import Footer from './footer'
import Link from 'next/link'
const overView = () => {
    return (
        <>
            <div className='py-5 pr-4 bg-emerald-500'>
                <Link href="/">
                    <button className='float-right w-1/12 font-medium bg-white rounded-full h-9'>Home </button>
                </Link>
                <h1 className='pl-4 font-sans text-4xl font-medium'>Cookie Stand Admin</h1>
            </div>
            <p className='p-10 text-5xl font-medium text-center'>Over View Comming Soon......!</p>
            <Footer></Footer>
        </>
    )
}
export default overView