import React, { useState } from 'react';
import DashboardIcon from "../assets/dashboard.png";
import ApproveIcon from "../assets/approve.png";
import Pie from "../assets/pie.png";
import Graph from "../assets/graph.png";

const DashboardContent = () => {
    return(
        <div className='mb-24'>
            <h1 className='text-4xl font-semibold'>Welcome Admin, GPS !</h1>
            <div className='flex  mt-10'>
                <img alt='img' width={400} src={Pie}></img>
                <div className='ml-20'>           
                     <img alt='img' width={400} src={Graph}></img>
                </div>

            </div>
        </div>
    )
}


const ApproveContent = () => <div>Here you can approve or reject items.</div>;
const AddPolicyContent = () => {
    return(
        <div>hello</div>
    )
}
const ProfileContent = () => <div>Manage your profile information here.</div>;

const AdminMenu = () => {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { id: 'dashboard', icon: DashboardIcon, label: 'Dashboard', content: <DashboardContent /> },
    { id: 'approve', icon: ApproveIcon, label: 'Approve', content: <ApproveContent /> },
    { id: 'Add Policy', icon: ApproveIcon, label: 'Add Policy', content: <AddPolicyContent /> },
    { id: 'profile', icon: ApproveIcon, label: 'Profile', content: <ProfileContent /> },
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
