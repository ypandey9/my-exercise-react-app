import Card from "./components/Card";


export default function App() {
  return (
 <Card
 header={<h3 style={{color:"blue"}}>React Composition</h3>}
 footer={<small>© 2025 React Academy</small>}
 >
<p>This is the main content of the card.</p>
<button>Learn more</button>
 </Card>
 
  );
}