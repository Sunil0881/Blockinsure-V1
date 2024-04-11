import React from 'react'

const Cards = () => {
  return (
    <div className='px-40 py-1'>
          <div className="bg-blue-200 rounded">
                    <div>
                    <h1 className="text-5xl font-extrabold ml-8 pt-8 ">Life Policy</h1>
                    </div>

          <h2 className="text-3xl px-8 font-medium py-5">Term insurance</h2>
          <div className='flex'>  
          
          <p className="px-8 w-4/5 space-x-20 mr-56">
                    Term insurance is a type of life insurance that provides coverage for
            a set period, like 10, 20, or 30 years. You pay premiums during this time, and if you die within the term,
            the insurance pays out a lump sum, known as the death benefit, to your beneficiaries. It's affordable because 
            it's temporary and doesn't have a cash value component. Term insurance is straightforward and doesn't have the complexities
             of some other types of life insurance.
          </p>
                    <div className='w-2/5 flex-col justify-between items-center'>
                              <div className='flex'>
                              <h4 className='w-1/2 font-bold'>Coverage amont</h4> : <h4 className='ml-10 w-1/2'>500000</h4>
                              </div>
                               <div className='flex'>
                               <h4 className='w-1/2 font-bold '>Premium</h4> : <h4 className='ml-10 w-1/2'>50 / month</h4>
                               </div>
                               <div className='flex'>
                               <h4 className='w-1/2 font-bold'>Duration years</h4> : <h4 className='ml-10 w-1/2'>500000</h4>
                               </div>
                               <div className="py-10 px-20">
                                        <button className='border-2 border-gray-600 rounded-md hover:bg-blue-600  px-9'>Buy Policy</button>
                               </div>
                      </div>
          </div>
          </div>

        
         


    </div>
  )
}

export default Cards