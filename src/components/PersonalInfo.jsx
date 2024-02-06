import React, { useContext } from 'react'
import DataContext from '../context/DataContext';

const PersonalInfo = () => {
    const {data, setData, handleChange} = useContext(DataContext)
  return (
    <div>
      <div className='pb-6'>
        <h1 className="text-marblue font-[800] text-2xl">Personal Info</h1>
        <p className='text-md text-marblue'> Please provide your name, email address, and phone number.</p>
      </div>

      <div className="flex flex-col gap-1 py-2">
        <label className="text-lg font-[500] text-marblue">Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={data.name}
          required
          className="w-full py-2 px-4 border border-marblue rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-1 py-2">
        <label className="text-lg font-[500] text-marblue">Email Address</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={data.email}
          required
          className="w-full py-2 px-4 border border-marblue rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-1 py-2">
        <label className="text-lg font-[500] text-marblue">Phone</label>
        <input
          type="number"
          onChange={handleChange}
          name="phone"
          value={data.phone}
          required
          className="w-full py-2 px-4 border border-marblue rounded-xl"
        />
      </div>
    </div>
  );
}

export default PersonalInfo