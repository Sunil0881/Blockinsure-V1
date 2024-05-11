import React, { useState, useEffect } from 'react';
import {GETUSERPOLICIES} from "../../ContractIntegration"
import Navbar from '../../components/Navbar';

const PolicyViewer = () => {
    const [entries, setEntries] = useState([]);

    // Fetch policies
    const get = async () => {
        const _user = "0xebA2E8791585Cb1e20E40192c716E025A94DAb64";
        console.log("Using address:", _user);

        try {
            const answer = await GETUSERPOLICIES(_user);
            console.log(answer);
            // Convert BigNumber objects to strings
            const formattedEntries = answer.map(entry => [
                entry[0].toString(), // Policy ID
                entry[1].toString(), // Last Payment Timestamp
                entry[2] // Is Claimed
            ]);
            setEntries(formattedEntries); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching policies:', error);
        }
    };
    useEffect(() => {
        get();
    }, []);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
        return date.toLocaleString(); // Convert to human-readable format
    };


    return (
        <div>
        <Navbar />
        <div className='px-40 py-1  bg-blue-100 h-screen'>
        {entries.map((entry, index) => (
            <div className="bg-white rounded-3xl mb-8 p-5 flex justify-between" key={index}>
                <div>
                <p>Policy ID: {entry[0]}</p>
                <p>Last Payment Timestamp: {formatTimestamp(entry[1])}</p>
                <p>Is Claimed: {entry[2].toString()}</p>
                </div>
                <div >
                    <div className='mb-2'>
                        <button className='border-2  bg-blue-500 rounded-md shadow-2xl py-1 font-semibold hover:bg-green-600 px-5'>Pay Premium</button>
                    </div>
                    <div>
                        <button className='border-2  bg-blue-500 rounded-md shadow-2xl py-1 font-semibold hover:bg-green-600 px-12'>Claim</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>
            
    );
};

export default PolicyViewer;
