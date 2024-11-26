// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [number,setNumber]=useState([]);
//   const currDate=new Date().toLocaleDateString();

//   return (
//     <>
//       <div className="flex justify-center flex-col items-center h-screen ">
//         <div className=" border-4 border-black">
//           <div className="mains  bg-lime-300 text-black">
//             <div className="container text-center fs-1 font-extrabold text-3xl ">
//               TODO-LIST
//             </div>
//             <div className="date">
//               <img src="pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png"></img>

//               <p classname="">{currDate}</p>
//             </div>
//           </div>
//           <div className="task mt-5 text-center text-blue-700 text-lg font-semibold">
//             TODAY TASKS
//           </div>
//           <div>
//             <div className="text flex justify-center mt-5 gap-3">
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></input>
//               {/* <h1>{number}</h1> */}
//               <button
//                 onClick={() => {
//                   if (name != "") {
//                     setNumber([...number, name]);
//                     setName("");
//                   }
//                 }}
//               >
//                 submit
//               </button>
//             </div>
//             <ul>
//               {number.map((items) => (
//                 <div className="list bg-red-500 w-100 my-3 flex gap-5 ps-5 p-4 justify-evenly">
//                   <button onClick={() => {}} className="text-white">
//                     edit
//                   </button>
//                   <li className="">{items}</li>

//                   <button onClick={() => {}} className="text-white">
//                     delete
//                   </button>
//                 </div>
//               ))}
//             </ul>
//             {/* <button onClick={() => setName(name - 1)}>decrement</button> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
import AddToDo from "./components/AddToDo";
import ListToDo from "./components/ListToDo";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("datas"))
      ? JSON.parse(localStorage.getItem("datas"))
      : []
  );
  // const [tempEdit, settempEdit] = useState([]);
  // const [editData, seteditData] = useState({ id: "", title: "" });
  const [todo, setTodo] = useState({
    id: "",
    title: "",
  });
  const [isEdit, setisEdit] = useState(false);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-800">
      <h2 className="text-4xl text-green-500 shadow font-bold my-2">ToDo</h2>
      <AddToDo
        setTodos={setTodos}
        todo={todo}
        todos={todos}
        setTodo={setTodo}
        isEdit={isEdit}
        setisEdit={setisEdit}
      />

      <ListToDo
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        setTodo={setTodo}
        isEdit={isEdit}
        setisEdit={setisEdit}
      />
    </div>
  );
};

export default App;
