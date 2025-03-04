'use client'

import Image from "next/image";
import { ReactNode } from "react";
import { useState } from 'react';

/*
first:

then:
make ToDoList and ToDoListItem comps
make input field add to ToDoList

later:
populate based on JSON

*/

/*
interface TodoItemType {
    description: string;
    date: string;
    isCompleted: boolean;
    toggleToDo?: () => void;
}

let ITEMS: TodoItemType[] = [
    {description: "Clean balcony", date: "today", isCompleted: false}
];

const TodoListItem: React.FC<TodoItemType> = (props) => {
    return (
        <>
            <span>
                description = {props.description}, date = {props.date}, isCompleted = {props.isCompleted}
            </span>
        </>
    );
};
*/

export default function Home() {

    /*
    let [todoItems, setTodoItems] = useState<typeof TodoListItem[]>([]);
    //let [todoItems, setTodoItems] = useState([]);

    // function addTodoItem(desc: string){
    //     const newTodo = {
    //         description: desc,
    //         date: Date.now(),
    //         isCompleted: false
    //     }
    //     setTodoItems([...todoItems, newTodo]);
    // }

    //load todo items
    const rows = [];
    ITEMS.forEach(item => {
        const propsForTodoItem = {
            description: item.description,
            date: item.date,
            isCompleted: item.isCompleted
        }
        //setTodoItems([...todoItems, <TodoListItem description={item.description} date={"hi"} isCompleted={false}/>]);
    });
    */

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center">
                <h1 className="text-4xl font-semibold">To-Do List</h1>
                <div className="flex flex-row">
                    <input 
                        type="text"
                        placeholder="Enter an item..."
                        className="border border-black p-1"
                        >
                    </input>
                    <button
                        className="ml-4 text-xl bg-blue-200 p-2 rounded-md hover:bg-blue-300 active:bg-blue-500 transition-all"
                        >
                        Add
                    </button>
                </div>
                {}
            </main>
        </div>
    );
}

/*
helpful css:
rounded-md
text-2xl
font-semibold
test-blue-700
textAlign
mx-2 //for margin
my-4
mt-2
max-w-xs
p-2 //for padding
bg-gray-200
hover:bg-gray-300
transition-all

import styles from './home.module.css'
...
className={styles.hero}
*/