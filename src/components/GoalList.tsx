import { Goal as CGoal } from "../types/types";
import Goal from "./Goal";

interface GoalListProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

const GoalList = ({ goals, onDeleteGoal }: GoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
