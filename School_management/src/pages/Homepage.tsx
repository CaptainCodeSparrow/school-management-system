import React from 'react'

function Homepage() {
  return (
    <div><div className="bg-gray-200 w-full h-screen flex justify-center items-center">
    <div className="bg-gray-300 w-[90%] max-w-screen-lg rounded-lg shadow-lg p-6">
      <header className="flex justify-between items-center pb-4 border-b border-gray-400">
        <h1 className="text-2xl font-bold">ClassBook</h1>
        <button className="w-8 h-8 bg-gray-500 rounded-full text-white flex items-center justify-center hover:bg-gray-700">+</button>
      </header>
  
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Today's Class List */}
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Today's Class List</h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter Class Name"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Enter Class Time"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Enter Class Topic"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
          </div>
        </div>
  
        {/* Add Class */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Add Class</h2>
          <input
            type="text"
            placeholder="Class Title"
            className="input input-bordered w-full bg-gray-100 p-2 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Instructor Name"
            className="input input-bordered w-full bg-gray-100 p-2 rounded mb-2"
          />
          <input
            type="date"
            className="input input-bordered w-full bg-gray-100 p-2 rounded"
          />
        </div>
  
        {/* Student List */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Student List</h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter Student Name"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Enter Roll Number"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
          </div>
        </div>
  
        {/* Class History */}
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Class History</h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Search Class History"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
          </div>
        </div>
  
        {/* Upcoming Class of Next Week */}
        <div className="col-span-3 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Upcoming Class Of Next Week</h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Class Name"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
            <input
              type="date"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
            <input
              type="time"
              className="input input-bordered w-full bg-gray-100 p-2 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Homepage