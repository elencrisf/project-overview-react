// import uuid from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: 1,
        name: "gym",
        duration: "2 hours"

    }
];

const tasksReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case "CREATE_TASK":
            return [...state, {
                id: uuidv4(),
                name: payload.name,
                duration: payload.duration
            }];
        case "DELETE_TASK":
            const copyState = [...state];
            const i = copyState.findIndex(x => x.id === payload.id);
            copyState.splice(i, 1);
            return [...copyState];
        default: 
            return state;
    }
    return state;
};

export default tasksReducer;