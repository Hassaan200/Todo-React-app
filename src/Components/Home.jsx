import React from 'react'

const Home = () => {
  return (
    <>

<div className="text-center mt-10">
  <h1 className="text-3xl font-bold mb-4">Welcome to the To-Do App</h1>
  <p className="text-gray-600 mb-6">Stay organized, stay focused.</p>
  <button onClick={() => navigate('/tasks')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    View Your Tasks
  </button>
</div>


    </>
  )
}

export default Home
