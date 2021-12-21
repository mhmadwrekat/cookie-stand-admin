import Head from 'next/head'
import CookieStandAdmin from './component/CookieStandAdmin'
const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <CookieStandAdmin />
      </main>
    </div>
  )
}
export default Home