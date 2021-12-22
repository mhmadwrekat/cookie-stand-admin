import {React, useState} from 'react'
import Footer from './footer'
import Header from './header'
const LoginForm = () => {
    const [click , setClick ] = useState(false);
    const handleLogin = (event) => {
//        console.log('working Fine')
        event.preventDefault();
        let click = true;
        setClick(click) ;
    }
    return (
        <>
        <Header click={click}/>
        <div className="w-2/3 mx-auto my-20 rounded-lg bg-emerald-300 h-96">
            <form onSubmit={handleLogin} className='pt-8'>
                <div className="flex flex-col items-center justify-center">
                    <label className='text-xl font-bold' for="username" >User Name</label>
                    <br />
                    <input placeholder=' User Name' type="text" name="username" id="username" className="w-9/12 h-10" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <label className='pt-10 text-xl font-bold' for="password" >Password</label>
                    <br />
                    <input placeholder=' Password' type="password" name="password" id="password" className="w-9/12 h-10" />
                </div>
                <br />
                <div className="flex flex-col items-center justify-center pt-4">
                    <button className='w-5/12 text-xl font-medium rounded-full h-14 bg-emerald-500'>Log in</button>
                </div>
            </form>
        </div>
        <Footer/>
        </>
    )
}
export default LoginForm