import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};
const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let bool: boolean = true;

let array2 = [0, 1, "hello"];

interface NAME {
    first: string;
    family: string;
};

interface NAME2 {
    first: string;
    family?: string; // ない場合でも生成可能
};

interface NAME3 {
    first: string;
    family?: string | null; // ない場合でも生成可能
};

let nameObj: NAME = { first: "taro", family: "Yamada"};
let nameObj2: NAME2 = { first: "taro", };
let nameObj3: NAME3 = { first: "taro", family: null};

const func1 = (x: number, y: number):number => {
    return x + y;
}

const Data = ({ children }: Props) => {
    return (
        <div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default Data;
