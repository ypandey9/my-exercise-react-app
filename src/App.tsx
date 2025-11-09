import Card from "./components/Card";
import Greetings from "./components/Greetings";

export default function App() {
  return (
<div>
  <Greetings user="Yogesh"/>
  <Greetings user="React Learner" />
  <Card title="React Basics">
    <p>Thsi is inside the card.</p>
  </Card>
</div>
  );
}