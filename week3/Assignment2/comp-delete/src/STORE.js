import { v4 as uuidv4 } from 'uuid';

const Todos = [
    {   id: uuidv4(),
        text: "goto gym",
        isCompleted: false
    },
    {   id: uuidv4(),
        text: "do laundry",
        isCompleted: false
    }, 
    { 
        id: uuidv4(),
        text: "food shopping",
        isCompleted: false
    },
    { 
        id: uuidv4(),
        text: "do homework",
        isCompleted: false
    },
];

export default Todos;