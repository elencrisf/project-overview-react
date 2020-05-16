import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const NewTaskInput = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    duration: ""
  });

  const handleChange = (e) => {
    e.persist();
    setData(prev => ({...prev, [e.target.name]: e.target.value }))
  };

  const addTask = () => {
    dispatch({
      type: "CREATE_TASK",
      payload: {
        name: data.name,
        duration: data.duration
      }
    })
  }

  return(
    <div className={"add"}>
      <div className={"input-section"}>
        <p>Activity:</p>
        <input onChange={(e) => handleChange(e)} name={"name"} placeholder={"Activity name..."} />
      </div>

      <div className={"input-section"}>
        <p>Duration:</p>
        <input onChange={(e) => handleChange(e)} name={"duration"} placeholder={"Activity duration..."} />
      </div>

      <button onClick={addTask}>Add</button>
    </div>



  )
}

export default NewTaskInput;


// const NewTaskInput = ({ onSubmit }) => {

//   const [newItem, setNewItem] = useState('');

//   function setNewTask({target}) {
//     setNewItem(target.value);
//   }

//   function submit(e) {
//     e.preventDefault();
//     onSubmit(newItem);
//   }

//   return (
//     <div>
//       <form onSubmit={submit}>
//         <input
//           className="Todo-input"
//           placeholder="Type a new task"
//           onChange={setNewTask}
//         />
//         <button className="Todo-button" type="submit">
//           Add
//         </button>
//       </form>
//     </div>
//   )
// };

// export default NewTaskInput;
