import Header from './header'
import Main from './main'
import React from 'react'
import Head from 'next/head'
const CookieStandAdmin = () => {
    return (
        <>
        <Head>
            <title>Cookie Stand Admin</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Main />
        </>
    )
}
export default CookieStandAdmin