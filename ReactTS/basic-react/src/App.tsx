import { useState } from "react";

import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {}

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A List of Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button>Add Goal</button>
      <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up"
      />
    </main>
  );
}
