import Link from 'next/link';
import { ReactNode } from 'react';
import Data from "../data.json";

type USERS = typeof Data;

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

// keyof
type KEYS = {
    primary: string;
    secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof

const SPORTS = {
    soccer: "Soccer",
    baseball: "Baseball",
}

let keySports: keyof typeof SPORTS;


// enum
enum OS {
    Windows,
    Mac,
    Linux,
}

interface PC {
    id: number;
    OSType: OS;
}

const PC1: PC = {
    id: 1,
    OSType: OS.Mac,
}

const PC2: PC ={
    id: 2,
    OSType: OS.Windows,
}

// 型の互換性
const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
// let comp4: "test" = comp3; error

let funcComp1 = (x: number) => {};

let funcComp2 = (x: string) => {};
// funcComp1 = funcComp2; error
// funcComp2 = funcComp1; error


// Generics
interface GEN<T>{
    item: T;
};

const gen0: GEN<string> = {item: "hello"};
// const gen1: GEN = {item: "hello"}; error
// const gen2: GEN<number> = {item: "hello"}; error

interface GEN1<T = string> {
    item: T;
};

const gen3: GEN1 = {item: "hello"};

interface GEN2<T extends string | number> {
    item: T;
};

const gen4: GEN2<string> = {item: "hello"};
// const gen5: GEN2<boolean> = {item: true}; error

function funcGen<T>(props: T){
    return { item: props }
};
const gen6 = funcGen("test");
const gen7 = funcGen<string>("test");
const gen8 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T){
    return { value: props }
};

const gen9 = funcGen1("hello");
// const gen10 = funcGen1(3); error

interface Prop {
    price: number;
};

function funcGen3<T extends Prop>(props: T) {
    return {value: props.price};
};
const gen11 = funcGen3({price: 10});

const funcGen4 = <T extends Prop>(props: T) => {
    return {value: props.price};
}

const Types = ({ children }: Props) => {
    return (
        <div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default Types;
