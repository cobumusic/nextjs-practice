import Image from "next/image";
import { ReactNode } from "react";
import Link from 'next/link';
// import { Header } from "./testComp";

/*
//for fetching from a postgreSQL server:
const sql = postgres(process.env.DATABASE_URL);

//doing an alias here so we can directly reference param names
type Quiz = {
    quiz_id: number;
    title: string;
};

async function Quizzes(){
    const quizzes: Quiz[] = await sql`
        SELECT * FROM quizzes
    `;

    return (
        <ul>
        {quizzes.map((quiz) => (
            <li key={quiz.quiz_id}>
                <Link href={`/quiz/${quiz.quiz_id}`}>{quiz.title}</Link>
            </li>
        ))}
        </ul>
    );
}
*/

export default function Home() {
    return (
    <section>
        <h1>All Quizzes</h1>
        {/* <Suspense fallback={<p>Loading...</p>}></Suspense> (this is helpful for loading screens while sections are loading)*/}
        <ul>
            <Link href="/quiz/1">
                Quiz 1
            </Link>
            <br></br>
            <Link href="/quiz/2">
                Quiz 2
            </Link>
        </ul>
    </section>
    );
}

/*
helpful css:
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