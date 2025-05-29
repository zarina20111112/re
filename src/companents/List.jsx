import React from 'react'

const List = ({id, customerName, status}) => {
  return (
    <div className='flex gap-2 my-1 items-center'>
        <h1>{id}</h1>
        <div>{customerName}, {status}</div>
        {status ? <button className='bg-green-200 text-green-500 p-1 rounded-xl border border-green-500'>Active</button> : 
        <button className='bg-red-200 text-red-500 p-1 rounded-xl border border-red-500'>Inactive</button>}
    </div>
  )
}

export default List