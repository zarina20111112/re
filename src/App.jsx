import React from 'react';
import Header from './companents/Header'
import Name from './companents/Name'
import List from './companents/List'
import data from './constants/data'

const App = () => {
  return (
    <div className='flex'>
      <div className='w-[20%] bg-red-500 h-[100vh]'>
        <ul>
          <li>
            hello
          </li>
          
          <li>
            hello
          </li>
          
          <li>
            hello
          </li>
          
          <li>
            hello
          </li>
          <li>
            hello
          </li>
          <li>
            hello
          </li>
          <li>
            hello
          </li>
          <li>
            hello
          </li>
          <li>
            hello
          </li>
        </ul>
      </div>
      <div className='w-[80%] bg-sky-600'>
        <div>
          {data.map(({id, customerName, status})=> <List key={id} id={id} customerName={customerName} status={status} />)}
        </div> 
      </div>
    </div>
  )
}


export default App;
