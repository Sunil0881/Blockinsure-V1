import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { GETALLPOLICIES } from '../ContractIntegration';
import { BUYPOLICY } from '../ContractIntegration';

const Cards = () => {

  const [entries, setEntries] = useState([]);


  const handleBuyPolicy = async (id, premium) => {
      try {
          const premiumWei = ethers.utils.parseEther(premium.toString()); // Convert premium to Wei
          const tokenId = await BUYPOLICY(id, { value: premiumWei }); // Send premium amount in Wei with the transaction
          console.log(tokenId);

      } catch (error) {
          console.error('Error Buying Policy:', error);
      }
  };



  const get = async () => {
      console.log("getting value");
      const answer = await GETALLPOLICIES();
      if (Array.isArray(answer)) {
          const formattedEntries = answer.map(entry => ({
              Id: entry[0].toString(), // Convert BigNumber to string
              Name: entry[1],
              Detail: entry[2],
              Coverage: entry[3].toString(), // Convert BigNumber to string
              Premium: entry[4].toString(), // Convert BigNumber to string
              Duration: entry[5].toString(), // Convert BigNumber to string
              IsActive: entry[6]
          }));
          setEntries(formattedEntries);
      } else {
          console.error('Invalid answer format:', answer);
      }
  };
  
  useEffect(() => {
      get();
  }, []);


  return (
    <div className='px-40 py-1  bg-blue-100'>
  {entries.map((entry, index) => (
    <div className="bg-white rounded-3xl mb-8" key={index}>
      <div className='flex justify-between items-center '>
        <h1 className="text-5xl font-extrabold ml-8 pt-8 ">{entry.Name}</h1>
        <p className='text-xl mr-8 font-bold'>Id: {entry.Id}</p>
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
            <h4 className='w-1/2 font-bold'>Coverage amount</h4> : <h4 className='ml-10 w-1/2'>{entry.Coverage}</h4>
          </div>
          <div className='flex'>
            <h4 className='w-1/2 font-bold '>Premium</h4> : <h4 className='ml-10 w-1/2'>{entry.Premium} / month</h4>
          </div>
          <div className='flex'>
            <h4 className='w-1/2 font-bold'>Duration years</h4> : <h4 className='ml-10 w-1/2'>{entry.Duration}</h4>
          </div>
          <div className="py-10 px-20">
            <button className='border-2  bg-blue-500 rounded-md shadow-2xl py-1 font-semibold hover:bg-green-600 px-5' onClick={() => handleBuyPolicy(entry.Id, entry.Premium)}>Buy Policy</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

  )
}

export default Cards