'use client'

import Image from "next/image";
import { ReactNode } from "react";
import { useState } from 'react';

/*
interface TodoItemType {
    description: string;
    date: string;
    isCompleted: boolean;
    toggleToDo?: () => void;
}

*/

export default function Home() {
    const [userInput, setUserInput] = useState("");
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // Track index of item to edit
  
    // Set a user input value
    const updateInput = (value) => {
      setUserInput(value);
    };
  
    const handleToggle = (index) => {
      //
    };
  
    // Add or edit item
    const handleAction = () => {
      if (userInput.trim() === "") return; // Avoid adding empty items
  
      if (editIndex !== null) {
        // Edit existing item
  
        const d = new Date();
        //const test = d.toLocaleString();
        const fullDate =
          "" +
          (1 + d.getMonth()) +
          "/" +
          d.getDate() +
          "/" +
          d.getFullYear() +
          " " +
          d.getHours() +
          ":" +
          d.getMinutes() +
          ":" +
          d.getSeconds();
  
        const updatedList = list.map(
          (item, index) =>
            index === editIndex
              ? { ...item, value: userInput, date: fullDate }
              : item
          // if(index === editIndex){
          //   {...item, value: userInput}
          // } else {
          //   item;
          // }
        );
        setList(updatedList);
        setEditIndex(null); // Reset edit mode
      } else {
        // Add new item
  
        //TODO add date formatted like MM/DD/YYYY HH:MM:SS
        const d = new Date();
        //const test = d.toLocaleString();
        const fullDate =
          "" +
          (1 + d.getMonth()) +
          "/" +
          d.getDate() +
          "/" +
          d.getFullYear() +
          " " +
          d.getHours() +
          ":" +
          d.getMinutes() +
          ":" +
          d.getSeconds();
        //console.log(fullDate);
        const newItem = {
          id: Math.random(), // Consider using a more reliable ID generator
          value: userInput,
          date: fullDate,
          isCompleted: false,
        };
        setList([...list, newItem]);
      }
  
      setUserInput(""); // Clear input field
    };
  
    // Function to delete item from list using id to delete
    const deleteItem = (id) => {
      const updatedList = list.filter((item) => item.id !== id);
      setList(updatedList);
    };
  
    // Function to enable editing mode
    const startEdit = (index) => {
      setUserInput(list[index].value);
      setEditIndex(index); // Set the index of the item to be edited
    };
  
    //from another tutorial, might be useful?
    // const [inputValue, setInputValue] = useState("");
    // const count = useRef(0);
    // useEffect(() => {
    //   count.current = count.current + 1;
    // });
    // return (
    //   <>
    //     <input
    //       type="text"
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //     />
    //     <h1>Render Count: {count.current}</h1>
    //   </>
    // );
  
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          TODO LIST
        </div>
  
        {/* search bar and add button */}
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
        >
          <input
            style={{
              fontSize: "1.2rem",
              padding: "10px",
              marginRight: "10px",
              flexGrow: "1",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            placeholder={editIndex !== null ? "Edit item..." : "Add item..."}
            value={userInput}
            onChange={(e) => updateInput(e.target.value)}
          />
          <button
            style={{
              fontSize: "1.2rem",
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={handleAction}
          >
            {editIndex !== null ? "Update" : "ADD"}
          </button>
        </div>
  
        <div
          style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}
        >
          {/* TODO make the below a react component */}
          {list.length > 0 ? (
            list.map((item, index) => (
              <div
                key={item.id} // Use the unique id as the key
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span>
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.value}
                    // checked={item.isChecked ? "checked" : ""}
                    checked={item.isCompleted}
                    onClick={() => handleToggle(index)}
                  ></input>
  
                  <span style={{ fontSize: "1.2rem", flexGrow: "1" }}>
                    {item.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      flexGrow: "1",
                      marginLeft: "5px",
                      color: "grey",
                    }}
                  >
                    {"" + item.date}
                  </span>
                </span>
                <span>
                  <button
                    style={{
                      padding: "10px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      padding: "10px",
                      backgroundColor: "#2196f3",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => startEdit(index)}
                  >
                    Edit
                  </button>
                </span>
              </div>
            ))
          ) : (
            <div
              style={{ textAlign: "center", fontSize: "1.2rem", color: "#777" }}
            >
              No items in the list
            </div>
          )}
        </div>
      </div>
    );
  }

    /*
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
            </main>
        </div>
    );
    */


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