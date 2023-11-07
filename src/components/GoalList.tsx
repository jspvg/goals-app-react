import { CourseGoal } from "../types/types";
import Goal from "./Goal";

interface GoalListProps {
  goals: CourseGoal[];
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
