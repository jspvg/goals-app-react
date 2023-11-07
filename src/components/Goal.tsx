import { type ReactNode } from "react";

interface GoalProps {
  title: string;
  children: ReactNode;
}

const Goal = ({ title, children }: GoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default Goal;
