import { useState } from "react";
import Card from "./components/Card";

const fruits=["Apple","Banana","Orange"];

export default function App() {

  const [name,setName]=useState("");
  return (
 <Card
 header={<h3 style={{color:"blue"}}>React Composition</h3>}
 footer={<small>© 2025 React Academy</small>}
 >
<p>This is the main content of the card.</p>
<button>Learn more</button>
<ul>
  {fruits.map((fruit,index)=>(
    <li key={index}>{fruit}</li>
  ))}
 </ul>
<div>
  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
</div>
<p>Hello, {name}</p>
 </Card>
  );
}