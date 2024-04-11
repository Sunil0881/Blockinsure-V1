import React, { useState } from 'react';
import DashboardIcon from "../assets/dashboard.png";
import ApproveIcon from "../assets/approve.png";
import Pie from "../assets/pie.png";
import Graph from "../assets/graph.png";
import { ADDPOLICY, GETCONTRACTBALANCE,  WITHDRAW } from '../ContractIntegration.js';


const DashboardContent = () => {
    return(
        <div className='mb-20'>
            <h1 className='text-4xl font-semibold'>Welcome Admin, GPS !</h1>
            <div className='flex  mt-14 ml-24'>
                <img alt='img' width={400} src={Pie}></img>
                <div className='ml-20'>           
                     <img alt='img' width={400} src={Graph}></img>
                </div>

            </div>
        </div>
    )
}


const ApproveContent = () => {
    return(
        <div>approve content </div>
    )
}

const AddPolicyContent = () => {

    const [policyName, setPolicyName] = useState('');
    const [id, setId] = useState('');
    const [policyDetails, setPolicyDetails] = useState('');
    const [coverageAmount, setCoverageAmount] = useState(0);
    const [premiumAmount, setPremiumAmount] = useState(0);
    const [durationYears, setDurationYears] = useState(0);
  
    const handleNameChange = (event) => {
      setPolicyName(event.target.value);
    };
  
    const handleIdChange = (event) => {
      setId(event.target.value);
    };
  
    const handleDetailsChange = (event) => {
      setPolicyDetails(event.target.value);
    };
  
    const handleCoverageChange = (event) => {
      setCoverageAmount(event.target.value);
    };
  
    const handlePremiumChange = (event) => {
      setPremiumAmount(event.target.value);
    };
  
    const handleDurationChange = (event) => {
      setDurationYears(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      alert("button clicked");
      const tokenId = await ADDPOLICY( id, policyName, policyDetails, coverageAmount, premiumAmount, durationYears ); // Pass parameters as an object
      console.log("id", id);
      console.log("name", policyName);
      console.log("msg",  policyDetails);
      console.log("msg", coverageAmount);
      console.log("msg", premiumAmount);
      console.log("msg",  durationYears );
      console.log("tokenID:", tokenId);
    };

    
    return(
<div className='mb-16'>
  <div className='text-2xl mb-3 font-semibold text-center'>
     Create a New Insurance Policy
  </div>
  <form className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Policy Name:</label>
      <input type="text" name="policyName" onChange={handleNameChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">ID:</label>
      <input type="number" name="id" onChange={handleIdChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Policy Details:</label>
      <input type="text" name="policyDetails" onChange={handleDetailsChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Coverage Amount:</label>
      <input type="number" name="coverageAmount" onChange={handleCoverageChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Premium Amount:</label>
      <input type="number" name="premiumAmount" onChange={handlePremiumChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Duration (Years):</label>
      <input type="number" name="durationYears" onChange={handleDurationChange} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div className='flex justify-center'>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" onClick={handleSubmit}>Submit</button>
    </div>
  </form>
</div>

      
    )
}


const BalanceContent = () => {

    const [bal, setBal] = useState([]);

    const handleBuyPolicy = async () => {
        console.log("getting Balance");
        const answer = await GETCONTRACTBALANCE();
        setBal(answer);
        console.log(bal);


    }

    return(
        <center className='mb-60 mt-40'>
            <h1 className='text-2xl mb-10 font-semibold'>Explore the Current Contract Balance</h1>
            <button className='border-2 bg-blue-500 rounded-lg px-3 py-1 text-lg font-bold' onClick={() => handleBuyPolicy()} >Contract Balance</button>
            <p className='pt-10'>Your balance is: {bal}</p>
        </center>
    )
}

const WithdrawContent = () => {
    
    const [amount, setAmount] = useState('');

    const handleClick = async () => {
        console.log("Withdrawing Balance..");
        const answer = await WITHDRAW(amount);
        console.log(answer);


    }

    const handleNameChange = (event) => {
        setAmount(event.target.value);
    };
    

    return(
       
        
      <div className='mt-40 mb-60'>
        <div className="mb-4 text-center">
            <h1 className='text-2xl mb-10 font-semibold'>Manage Your Withdrawals</h1>
            <div className='flex justify-center items-center mb-8'>
                <label className="block text-gray-700 font-medium mr-2 ">Enter Amount to withdraw :</label>
                <input type="number" name={amount} onChange={handleNameChange} className="form-input mt-1 block py-1  rounded-md border-gray-300" />
            </div>
        </div>
        <div className='flex justify-center'>
           <button className='border-2 bg-blue-500 rounded-lg px-3 py-1 text-lg font-bold' onClick={() => handleClick(amount)} >Withdraw Fund</button>
        </div>
      </div>
    )
}

const AdminMenu = () => {
  const [activeButton, setActiveButton] = useState('dashboard');

  const buttons = [
    { id: 'dashboard', icon: DashboardIcon, label: 'Dashboard', content: <DashboardContent /> },
    { id: 'approve', icon: ApproveIcon, label: 'Approve', content: <ApproveContent /> },
    { id: 'Add Policy', icon: ApproveIcon, label: 'Add Policy', content: <AddPolicyContent /> },
    { id: 'Balance', icon: ApproveIcon, label: 'Check Balance', content: <BalanceContent /> },
    { id: 'Withdraw', icon: ApproveIcon, label: 'Withdraw Funds', content: <WithdrawContent /> },
  ];

  return (
    <div className='bg-blue-100  grid grid-cols-5 items-start'>
      <div className='border-2 bg-white rounded-2xl mx-5 px-5 pt-5 flex flex-col'>
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => setActiveButton(button.id)}
            className={`flex border items-center mb-5 rounded-lg ${
              activeButton === button.id ? 'bg-blue-100' : 'bg-white'
            }`}
          >
            <div className='py-1'>
              <img width={40} alt='img' src={button.icon}></img>
            </div>
            <h1 className={`text-lg font-semibold pl-5 ${activeButton === button.id ? 'text-blue-600' : 'text-black'}`}>
              {button.label}
            </h1>
          </button>
        ))}
      </div>
      <div className='col-span-4 p-5'>
        {buttons.find(button => button.id === activeButton)?.content}
      </div>
    </div>
  );
};

export default AdminMenu;
