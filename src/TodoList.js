import React from 'react';


export const TodoList = (props) => {
    

    return (
    <ul>
        {props.todoItems.map((todo, index)=>
            <li 
                key={index}>{todo}
               
                
                </li>
            )}
    </ul>
    );
};