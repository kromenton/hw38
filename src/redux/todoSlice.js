import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, text: 'Learn Java Script', completed: false },
        { id: 2, text: 'Build a Todo App', completed: true },
        { id: 3, text: 'Learn React ^-^', completed: false },
        { id: 4, text: 'Deploy to GitHub', completed: true },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
