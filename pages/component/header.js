import React from 'react'
import Link from 'next/link'
const header = (props) => {
    return (
        <div className='py-5 pr-4 bg-emerald-500' >
            {props.click ?
                <Link href="/component/overView">
                    <button className='float-right w-1/12 font-medium bg-white rounded-full h-9'>Over View</button>
                </Link> : <></>}
            <h1 className='pl-4 font-sans text-4xl font-medium'>Cookie Stand Admin</h1>
        </div>
    )
}
export default header