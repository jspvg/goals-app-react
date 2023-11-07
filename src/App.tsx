import Goal from "./components/Goal";
import goalsImage from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";

type Goal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth!",
      };
      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal title={goal.title}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </main>
  );
}
