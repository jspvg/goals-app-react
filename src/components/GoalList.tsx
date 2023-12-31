import { type ReactNode } from "react";
import { Goal as CGoal } from "../types/types";
import Goal from "./Goal";
import InfoBox from "./InfoBox";

interface GoalListProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

const GoalList = ({ goals, onDeleteGoal }: GoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint"> You have no goals yet. Start adding some.</InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 8) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GoalList;
