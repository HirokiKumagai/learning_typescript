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

const Types = ({ children }: Props) => {
    return (
        <div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default Types;
