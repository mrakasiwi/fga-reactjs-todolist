import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"
import { TbEditCircle } from "react-icons/tb"

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo, updateTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            {todo.text}
            <div className="iconsContainer">
                <TbEditCircle style={{ marginRight: 5 }} onClick={() => updateTodo(todo.id)}/>
                <BiCheckCircle style={{ marginRight: 5 }} onClick={() => completeTodo(todo.id)}/>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)}/>
            </div>
        </div>
    )
}