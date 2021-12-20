import Header from './component/header'
import Head from 'next/head'
import Footer from './component/footer'
import Form from './component/form'
export default function Home() {
  return (
    <div className="">
    <Head>
    <title>Cookie Stand Admin</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="">
    <Header />
    <Form />
    </main>

    <Footer />

    </div>
  )
}
