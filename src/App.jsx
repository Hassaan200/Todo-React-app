import { useState, useEffect } from 'react';
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";






function App() {


  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      settodos(todos)
    }
  }, [])
  
 

  // const savetoLS = (params) => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
    
  // }
  
  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  



  const HandleAdd = () => {
    if (!todo.trim()) return;
  
    settodos(prevTodos => {
      const updatedTodos = [{ id: uuidv4(), todo, isCompleted: false }, ...prevTodos];
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); 
      return updatedTodos;
    });
  
    settodo("");
  };



  const HandleEdit = (e, id)=>{
let t = todos.filter(i=>i.id === id)
settodo(t[0].todo)
let newTodos = todos.filter(item=>{
  return item.id !== id;
})
settodos(newTodos);
  }


  // const HandleDelete = (e, id) => {
  //   const newTodos = todos.filter(item => item.id !== id);
  //   settodos(newTodos);
  //   localStorage.setItem("todos", JSON.stringify(newTodos)); 
  // };

  const HandleChange = (e)=>{
    settodo(e.target.value)

  }
  const handleCheckbox = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos)); 
  }

  return (
    <>
      
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[80vh] md:w-[45%]">
      <h1 className='font-bold text-center  sm:text-3xl text-2xl'>iTask - Manage your todos at one place</h1>
        <div className="addtodo my-4 flex flex-col gap-1">
          <h2 className=' text-xl font-bold'>Add a Todo</h2>
          <div className="flex">

          <input type="text" className=' w-full bg-white rounded-xl px-4 ' onChange={HandleChange} value={todo}/>
          <button
  onClick={HandleAdd}
  disabled={!todo.trim()}
  className={`bg-slate-700 text-white font-bold text-sm px-2 py-1 rounded-md  ms-2 hover:bg-slate-500 ${
    !todo.trim() ? 'cursor-not-allowed' : 'cursor-pointer'
  }`}
>
  Save
</button>
  </div>
        </div>
        <input onChange={toggleFinished} type="checkbox" name="" id="show" checked = {showFinished} className='my-4 font-bold'/>
        <label className='mx-2' htmlFor="show">Show Finished</label> 
          <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
          <h2 className=' text-xl font-bold'>
            Your Todos
          </h2>
          <div className="todos">
            {todos.length === 0 && <p>No Todos to show</p>}
            {todos.map(item=>{

            
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between my-3 ">
              <div className='flex gap-4'>

              <input type="checkbox" name={item.id} id="" checked={item.isCompleted} onChange={handleCheckbox }/>
          <div className= {`${item.isCompleted ? "line-through" : ""}`}>{item.todo}</div>
              </div>
          <div className="buttons flex h-full">
           <button onClick={(e)=>{HandleEdit(e, item.id)}} className='bg-slate-700 text-white font-bold text-sm px-3 py-1 rounded-md cursor-pointer mx-2 hover:bg-slate-500 '><FaRegEdit /></button>
           <button 
          onClick={() => {
          setDeleteId(item.id);
          setShowConfirm(true);
          }} 
  className='bg-slate-700 text-white font-bold text-sm px-3 py-1 rounded-md cursor-pointer mx-2 hover:bg-slate-500 '
>
  <RiDeleteBin6Fill />
</button>

          </div>
            </div>
          })}
          </div>
      </div>

{/* confirm modal */}

      {showConfirm && (
  <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center transform transition-all duration-300 ease-in-out scale-95 animate-fadeIn">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Are you sure you want to delete this?
      </h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            const updatedTodos = todos.filter(item => item.id !== deleteId);
            settodos(updatedTodos);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            setShowConfirm(false);
            setDeleteId(null);
          }}
          className="bg-slate-700 hover:bg-slate-500 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer"
        >
          Yes, Delete
        </button>
        <button
          onClick={() => {
            setShowConfirm(false);
            setDeleteId(null);
          }}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-lg cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}




    </>
  )
}

export default App
