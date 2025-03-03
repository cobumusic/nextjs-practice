import Image from "next/image";
import { ReactNode } from "react";
import Link from 'next/link';
// import { Header } from "./testComp";

export default function Home() {
    return (
    <section>
        <h1>All Quizzes</h1>
        <ul>
            <Link href="/quiz/1">
                Quiz 1
            </Link>
            <Link href="/quiz/2">
                Quiz 2
            </Link>
        </ul>
    </section>
    );
}