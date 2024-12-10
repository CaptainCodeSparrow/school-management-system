import React from 'react'

function App() {
  return (
    <div className='bg-gray-800 w-full h-screen flex  justify-center items-center '>
      <div className="bg-gray-500 text-white p-6 rounded-lg shadow w-80 h-80 justify-center" >
      <h1 className="text-xl font-bold text-center mb-4">Welcome Back</h1>
      <input type="email" placeholder="Email" className="input input-bordered w-full mb-3 bg-gray-700 text-white" />
      <input type="Password" placeholder="Password" className="input input-bordered w-full mb-3 bg-gray-700 text-white" />
      <button id="sign-in" className="btn btn-primary w-full">Sign In</button>
      
      </div>
     
      </div>
    
  )
}

export default App