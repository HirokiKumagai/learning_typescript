import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};


const Types = ({ children }: Props) => {
    return (
        <div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default Types;
