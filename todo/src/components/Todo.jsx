import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/Reducer';
import Moment from 'react-moment';
import TodoForms from './TodoForms';

const Todo = () => {
                     //State and Reducer
                     const [state, dispatch] = useReducer(
                       reducer,
                       initialState
                     );

                     //ADD
                     const addTodo = (item, date) => {
                       const newTodo = {
                         item: item,
                         completed: false,
                         id: Date.now(),
                         completeBy: date,
                       };
                       dispatch({ type: "ADD_TODO", todo: newTodo });
                     };

                     //TOGGLE 
                     const toggleCompleted = (id) => {
                       dispatch({ type: "TOGGLE_COMPLETED", id: id });
                     };

                     //CLEAR
                     const removeCompleted = () => {
                       dispatch({ type: "CLEAR_COMPLETED" });
                     };
                    // Return TODO
                     return (
                       <div>
                         <TodoForms addTodo={addTodo} />
                         <h2>Todos</h2>
                         {state.todos.map((todo) => {
                           return (
                             <div
                               className="todo"
                               key={todo.id}
                               onClick={() => toggleCompleted(todo.id)}
                             >
                               {todo.completeBy < Date.now() ? (
                                 <h6>OVERDUE</h6>
                               ) : null}
                               <h3
                                 className={
                                   todo.completed === true ? "completed" : null
                                 }
                               >
                                 {todo.item}
                               </h3>
                               <h6>
                                 Complete by:{" "}
                                 {
                                   <Moment
                                     format="MMM Do YYYY"
                                     date={todo.completeBy}
                                   />
                                 }
                               </h6>
                             </div>
                           );
                         })}
                         <button onClick={() => removeCompleted()}>
                           Click To Clear
                         </button>
                       </div>
                     );
                   }
export default Todo;