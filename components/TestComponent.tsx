import React, { useState } from 'react'

interface Props {
  text: string
};

interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<UserData>({id: 1, name: "dummy"});
  const [inputData, setInputData] = useState("");
  const handleInputChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
    setInputData(e.target.value);
  }
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{count}</h2>
      <input type="text" value={inputData} onChange={handleInputChange}/>
      <h2>{inputData}</h2>
    </div>
  )
}

export default TestComponent
