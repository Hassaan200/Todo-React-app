import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>

<div className="text-center mt-10">
  <h1 className="text-3xl font-bold mb-4">Welcome to the To-Do App</h1>
  <p className="text-gray-600 mb-6">Stay organized, stay focused.</p>
  <button  className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-600 cursor-pointer">
      <Link to="/">View Your Tasks</Link>
  </button>
</div>


    </>
  )
}

export default Home
