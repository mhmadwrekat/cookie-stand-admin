import { useState , React} from 'react'
import ReportTable from './reportTable'
const form = () =>  {
    const [location , setLocation ] = useState('Barcelona');
    const [minimum , setMinimum ] = useState('2');
    const [maximum , setMaximum ] = useState('4');
    const [average , setAverage ] = useState('2.5');
    const [timeSlotData, setTimeSlotData] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
    const [tableData, setallstores] = useState([])
    const [total, setbranchestotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

const createCookie = (event) => {
    event.preventDefault();
    let location = event.target.location.value;
    let minimum = parseInt(event.target.Minimun.value);
    let maximum = parseInt(event.target.Maximum.value);
    let average = parseInt(event.target.Average.value);
    setLocation(location);
    setMinimum(minimum);
    setMaximum(maximum);
    setAverage(average);
    let sum = 0
        const store = {
            location: event.target.location.value,
            hourlySales: timeSlotData.map(() => Math.ceil(average * (Math.ceil(Math.random() * (maximum - minimum) + minimum)))),
        }
        for (let i = 0; i < store.hourlySales.length; i++) {
            sum = sum + store.hourlySales[i]
        }
        store.total = sum
        setallstores([...tableData, store])
        let total_sum = total.map((item, idx) => {
            if (idx === total.length - 1) {
                return item + store.total
            }
            return item + store.hourlySales[idx]
        })
        setbranchestotals(total_sum)
}
return (
            <>
            <div className='py-5'>
            <form className='w-8/12 py-5 mx-auto bg-emerald-300' onSubmit={createCookie}>
            <h1 className='pb-5 text-3xl font-medium text-center'>Create Cookie Stand</h1>
            <label className='pl-4 font-medium'>Location </label>{' '}
            <input name='location' placeholder='Barcelona'className='w-10/12'></input>
            <br></br>
            <div className='grid grid-cols-4 gap-4 pt-10'>
            <label className='pl-6 font-medium'>Minimun Customer per Hour</label>
            <label className='pl-5 font-medium'>Maximum Customer per Hour </label>
            <label className='pl-5 font-medium'>Average Cookies per Sale </label>
            <button className='w-10/12 font-medium rounded-full h-9 bg-emerald-500'>Create</button>
            </div>
            <div className='grid grid-cols-4 gap-4 px-4'>
            <input name='Minimun' className='h-8 w-49 '></input>
            <input name='Maximum' className='h-8 w-49'></input>
            <input name='Average' className='h-8 w-49'></input>
            </div>
            </form>
            </div>
    <ReportTable tableData = {tableData} timeSlotData = {timeSlotData} total = {total} />
            </>
        )
    }
export default form
