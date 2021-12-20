import React, { Component } from 'react'

class form extends Component {
    render() {
        return (
            <div className='py-5'>
            <form className='w-8/12 py-5 mx-auto bg-emerald-300'>
            <h1 className='pb-5 text-3xl font-medium text-center'>Create Cookie Stand</h1>
            <label className='pl-4 font-medium' for="Location">Location </label>{' '}
            <input placeholder='Barcelona'className='w-10/12'></input>
            <br></br>
            <div className='grid grid-cols-4 gap-4 pt-10'>
            <label className='pl-6 font-medium' for="Minimun">Minimun Customer per Hour</label>
            <label className='pl-5 font-medium' for="Maximum">Maximum Customer per Hour </label>
            <label className='pl-5 font-medium' for="Average">Average Cookies per Sale </label>
            <button className='w-10/12 font-medium h-9 bg-emerald-500'>Create</button>
            </div>
            <div className='grid grid-cols-4 gap-4 px-4'>
            <input className='h-8 w-49 '></input>
            <input className='h-8 w-49'></input>
            <input className='h-8 w-49'></input>
            </div>
            </form>
            <p className='py-5 text-center'>Report Table Coming Soon...</p>
            <p className='py-5 text-center'>'{'{"Location : Barcelona","minCustomers" : 2, "maxCustomer" : 4, "avgCookies" : 2.5} '}'</p>
                
            </div>
        )
    }
}

export default form









