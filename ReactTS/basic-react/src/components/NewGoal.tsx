import { FormEvent, useRef } from "react";

type NewGoalProp = {
  onAddGoal: (title: string, description: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProp) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enterredGoal = goal.current!.value;
    const enterredSummary = summary.current!.value;
    // * For clearing inputs
    event.currentTarget.reset();

    onAddGoal(enterredGoal, enterredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
