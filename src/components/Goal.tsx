import { type ReactNode } from "react";

interface GoalProps {
  id:number;
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
}

const Goal = ({ id, title, onDelete, children }: GoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default Goal;
