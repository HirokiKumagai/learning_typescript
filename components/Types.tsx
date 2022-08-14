import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

type PROFILE = {
    age: number;
    city: string;
};

type LOGIN = {
    username: string;
    password: string;
};

// Intersection Types
type USER = PROFILE & LOGIN;

const userA: USER = {
    age: 30,
    city: "tokyo",
    username: "xxx",
    password: "yyy",
}

// Union Types
let value: boolean | number;
value = true;
value = 10;
// value = "hello";  error

let arrayUni: (number | string)[];

arrayUni = [0, 1, 2, "hello"];
// arrayUni = [0, 1, 2, true]; err

// Literal Types
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256| 512;
memory = 256;

// typeof
let msg: string = "hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };


const Types = ({ children }: Props) => {
    return (
        <div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default Types;
