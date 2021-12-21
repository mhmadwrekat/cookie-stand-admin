import React from 'react'
const footer = (props) => {
    return (
        <div className="py-3.5 pl-4 bg-emerald-500">
            {props.tableData ?
                <p className='text-xl font-medium'>{props.tableData.length} Location World Wide</p>
                :
                <p className='text-xs'>Mhmad.Wrekat Ⓒ2021</p>}
        </div>
    )
}
export default footer