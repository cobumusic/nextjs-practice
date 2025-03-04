'use client'

import Image from "next/image";
import { ReactNode } from "react";
import { useState } from 'react';
import LikeButton2 from "../like-button-2";

//TODO make type interface/alias for a ToDoItem
//TODO comps to make: ToDoList, ToDoListItem

/*
first:
make input field
make add button
make ToDoItem alias
make sample JSON to pull from

then:
make ToDoList and ToDoListItem comps
make input field add to ToDoList

later:
populate based on JSON

*/

export default function Home() {

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-semibold">To-Do List</h1>
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