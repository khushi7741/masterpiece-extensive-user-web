import { IconChevronDown } from '@tabler/icons-react'
import React from 'react'

const Result = () => {
  const HandleShowResults = () => {};
  return (
    <div className='bg-C1DFDD flex flex-wrap justify-between items-center p-8 capitalize rounded-lg font-semibold mb-5'>
        <div className='sm:mb-0 mb-3'>check product cut wise rates</div>
        <div className='flex flex-wrap gap-3 font-normal text-sm'>
            <div className='flex items-center px-4 py-1 justify-between border border-brown rounded-md text-gray-500 bg-white'>
                <p className='sm:pr-10 pr-4'>select product</p>
                <IconChevronDown />
            </div>
            <button onClick={HandleShowResults} className='bg-brown text-white rounded-md border px-3 py-1'>show results</button>
        </div>
    </div>
  )
}

export default Result