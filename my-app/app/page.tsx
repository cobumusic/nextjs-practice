//reminder: run 'npm run dev' in terminal to run app!

import Image from "next/image";
//import Image is for optimizing images

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="./testPage"
            rel="noopener noreferrer"
          >
            Next Page
          </a>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}



/*

let name: string = "jacob";
let num: number = 0;
let name2 = "jacob";
let v: any = true;
v = "string";
const car: {type:string, model?:string, year:number} = {
type: "Toyota",
year: 2000
}

//enum:
enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West"
}
CardinalDirections.North;


//alias:
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}
const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

//interface:
interface Rectangle {
  height: number, 
  width: number
}
interface ColoredRectangle extends Rectangle {
  color: string
}
const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: red
};

//if using an interface from another file:
//in interface file called sampleInterace.tsx:
export interface sampleInterface {
  key: string
}
//in file to use interface in:
import {sampleInterface} from './sampleInterface';
let sampleVar: sampleInterface;

//specify that a number is to be returned
function getTime(): number {
  return 0;
}

//specify that nothing is to be returned
function getTime(): void {
  console.log("the time is 10pm!");
}

//specify the parameters (also, if no return type is defined, the default return type is any)
function multiply(a: number, b: number, c?: number): number{
  return a*b;
}

//casting
let x = "hello";
console.log(((x as unknown) as number).length);
console.log((x as unknown as number).length);

//generics (good for creating classes/functions/aliases that don't need to explicitly define their types)
//in createPair, S and T are placeholders for the type(s) to return, while v1 and v2 are the temp param/var names
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2]
}
console.log(createPair<string, number>("hello", 5));

//keyof
interface Person {
  name: string;
  age: number;
}
function printPersonProperty(person: Person, property: keyof Person){
  console.log("Printing person property ${property}: '${person[property]}'");
}
*/