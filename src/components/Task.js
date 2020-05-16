// import React, { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
// import ListItem from './ListItem';
// import List from './List';
// import NewTaskInput from './NewTaskInput';
// import { Consumer } from './contexts/TaskContext';

const Task = (props) => {
  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch({
      type: "DELETE_TASK",
      payload: {
        id: props.id
      }
    })
  }
  return (
    <div className={"activity-wrapper"}>
      <p>Activity: {props.name}, Duration: {props.duration}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default Task;


// const Task = () => {
//   const [tasks, setTasks] = useState([]);

//   function addNewTask(task) {
//     const itens = Array.from(tasks);
//     itens.push({id: tasks.length, value: task});
//     setTasks(itens);
//   }

//   function editTask({target}, index) {
//     const itens = Array.from(tasks);
//     itens.splice(index, 1, { id: index, value: target.value });
//     setTasks(itens);
//   }

//   function deleteTask(index) {
//     const itens = Array.from(tasks);
//     itens.splice(index, 1);
//     setTasks(itens);
//   }

//   return (
//     // <Consumer>
//     //   {value => {
//     //     const { tasks, id } = value;
//     //     return (
//           <div className="App">
//           <div className="App-header">
//             <NewTaskInput onSubmit={addNewTask} />
//             {tasks.map(({id, value}, index) => (
//               <ListItem
//                 key={id}
//                 value={value}
//                 onChange={(event) => editTask(event, index)}
//                 onDelete={() => deleteTask(index)}
//               />
//             ))}
//           </div>
//           <div className="Array-preview"><center><h3>Task List</h3></center>
//             {tasks.map(({id, value}, index) => (
//               <List
//                 key={id}
//                 value={value}
//                 index={index + 1}
//                 onChange={(event) => editTask(event, index)}
//                 onDelete={() => deleteTask(index)}
//               />
//             ))}
//           </div>
//         </div>
//   //       )
//   //     }}
 
//   // </Consumer>
//   )
// }

// export default Task;
