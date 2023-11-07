import goalsImage from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import GoalList from "./components/GoalList";
import { Goal } from "./types/types";

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

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
