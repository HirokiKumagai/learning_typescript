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
const Types = ({ children }: Props) => {
    return (
        <div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default Types;
