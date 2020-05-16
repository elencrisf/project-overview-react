import React, { useState } from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';
import NewTaskInput from './NewTaskInput';

const Workouts = () => {

    const allTasks = useSelector((state) => state.tasks);
    const [add, setAdd] = useState(false);
    console.log(allTasks);
    // console.log("state", state);


    return (
        <div className={"workouts-wrapper"}>
            <h2>My Workouts</h2>
            <button onClick={() => setAdd(!add)}>Add Activity</button>
            {add && <NewTaskInput />}
            {allTasks.map(task => {
                // console.log(task);
                return <Task key={task.id} id={task.id} name={task.name} duration={task.duration} />
            })}
        </div>

    )
};

export default Workouts;