import { useState } from "react";

export default function App() {

  const [count,setCount]=useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>➕</button>
      <button onClick={()=>setCount(count-1)}>➖</button>
      <button onClick={()=>setCount(0)}>🔃</button>
    </div>
  );

}