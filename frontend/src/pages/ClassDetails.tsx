import React from 'react'

function ClassDetails() {
  return (
    <div><div className="bg-gray-300 w-full h-screen flex justify-center items-center">
    <div className="bg-gray-100 text-black p-6 rounded-lg shadow-md w-80">
      <h1 className="text-lg font-semibold text-center mb-2">Class Details</h1>
      <div className="flex flex-col items-center my-4">
        <div className="w-10 h-10 rounded-full bg-black mb-3"></div>
        <p className="text-center font-medium">Student Name</p>
        <p className="text-center text-sm">student@gmail.com</p>
        <p className="text-center text-sm">+88012345678</p>
      </div>
      <div className="text-center my-4">
        <div className="text-2xl font-bold bg-white text-black p-2 rounded-lg w-24 mx-auto">
          00:30
        </div>
      </div>
      <div className="flex justify-center gap-3 my-4">
        <div className="w-6 h-6 bg-black rounded"></div>
        <div className="w-6 h-6 bg-black rounded"></div>
        <div className="w-6 h-6 bg-black rounded"></div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="btn bg-black text-white px-4 py-2 rounded">Start</button>
        <button className="btn bg-black text-white px-4 py-2 rounded">Finish</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ClassDetails