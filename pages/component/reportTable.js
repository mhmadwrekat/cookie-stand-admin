import React from 'react'
import Footer from './footer'
//rounded-lg
const reportTable = (props) => {
    return (
        <>
            {props.tableData.length === 0 ?
                <p className='p-8 font-sans text-2xl font-medium text-center'>No Cookie Stands Available ...!!</p>
                :
                <div className='pb-10'>
                    <table className='w-2/12 mx-auto my-auto'>
                        <thead className='font-medium text-center bg-emerald-500'>
                            <th className='px-3'>Location</th>
                            {
                                props.timeSlotData.map(item => {
                                    return (<th className='px-2'>{item} </th>)
                                })}
                            <th className='px-3'>Totals</th>
                        </thead>
                        <tbody className='font-normal text-center border border-black bg-emerald-300'>
                            {props.tableData.map((store, idx) => {
                                const element =
                                    <>
                                        <td className='px-2 border border-black' >{store.location}</td>
                                        {
                                            store.hourlySales.map(item => {
                                                return (
                                                    <td className='border border-black'> {item} </td>
                                                )
                                            })}
                                        <td className='border border-black'>{store.total}</td>
                                    </>
                                if (idx % 2 == 0) {
                                    return (<tr className='bg-green-400'>{element}</tr>)
                                } else {
                                    return (<tr className='bg-green-300'>{element}</tr>)
                                }
                            })}
                        </tbody>
                        <tfoot className='font-bold text-center bg-emerald-500'>
                            <td className='px-2 font-bold border border-black'>Totals</td>
                            {
                                props.total.map(item => {
                                    return (<td className='border border-black'>{item}</td>)
                                })}
                        </tfoot>
                    </table>
                </div>
            }
            <Footer tableData={props.tableData} />
        </>)
}
export default reportTable
