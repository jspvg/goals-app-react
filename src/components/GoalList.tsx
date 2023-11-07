import { Goal as CGoal} from "../types/types";
import Goal from "./Goal";

interface GoalListProps {
  goals: CGoal[];
}

const GoalList = ({ goals }: GoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal title={goal.title}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
