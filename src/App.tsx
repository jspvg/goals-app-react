import Goal from "./components/Goal";
import goalsImage from "./assets/goals.jpg";
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <Goal title="Learn React + TS">
        <p> Learn it from the ground up </p>
      </Goal>
    </main>
  );
}
