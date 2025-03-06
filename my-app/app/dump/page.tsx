'use client'

import Image from "next/image";
import { ReactNode } from "react";
import { useState } from 'react';

interface CustomProps {
    clickFunction: any;
    count: number
}

interface TestCompProps {
    string1: string;
    string2: string;
}

export default function Home() {
    const [likeCount, setCount] = useState(0);
    const names: string[] = ["Item 1: ", "Item 2: "];

    const handleClick = () => {
        console.log("incrementing");
        setCount(likeCount + 1);
    }

    function reset(){
        console.log("reset");
        setCount(0);
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
            <LikeButton />
            <div className="flex flex-col bg-gray-400 px-5 py-2">
                <LikeButton2 onClick={handleClick} count={likeCount} />
                <ResetButton onClick={reset}>Reset</ResetButton>
            </div>
            <TestComp string1="Item " string2="0: " />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <PageSample/>
            {/* <Sample/> */}
            
        </main>

        </div>
    );
}

interface IProps {
    children?: React.ReactNode | string;
    onClick: (e: any) => void;
    count?: number;
  }

const LikeButton2: React.FC<IProps> = (props) => {
    return (
        <button className="text-2xl bg-blue-100 text-gray-800 px-2 hover:bg-blue-300 transition-all max-w-xs rounded-md mb-2" onClick={props.onClick}>
            Like Counter: {props.count}
        </button>
    );
}

const ResetButton: React.FC<IProps> = (props) => {
    return (
        <button className="text-2xl bg-red-100 text-gray-800 px-2 hover:bg-red-300 transition-all rounded-md" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

function LikeButton(){
    const [likes, setLikes] = useState(0);

    function handleClick(){
        setLikes(likes + 1);
    }

    return(
        <>
            <button className="text-2xl bg-blue-100 text-gray-800 px-2 hover:bg-blue-300 transition-all max-w-xs rounded-md" onClick={handleClick}>
                Likes ({likes})
            </button>
        </>
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

/*
//note for future self: if the passed-in type for props is an interface, you MUST use the same variable name in the interface, in passing down to a prop,
and in receiving props (i.e. in the function CompName(...){} constructor)
*/
//function TestComp({title}:{title:string}){
function TestComp({string1, string2}:TestCompProps){ 
        return (
        <p>{string1}{string2}</p>
    );
}

// function IncrementButton({thisCount} : {thisCount:any}, {onInteract} : {onInteract:any}){
//     return (
//         <>
//             <button>
//                 click me to increment!
//             </button>
//             <p></p>
//         </>
//     );
// }

const PageSample = ({ dataFromServer}: any) => {
    return (
        <div>
            {dataFromServer}
        </div>
    );
};

async function getStaticProps(){
    const dataFromServer = 'Server-rendered data for this page';

    return {
        props: {
            dataFromServer
        }
    };
}


// async function Sample(){
//     const data = await fetch('https://api.vercel.app/blog');
//     const posts = await data.json();
//     return (
//         <ul>
//             {posts.map((post: any) => (
//                 <li key={post.id}>{post.title}</li>
//             ))}
//         </ul>
//     );
// }