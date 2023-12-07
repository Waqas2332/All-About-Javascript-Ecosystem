type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
  onDelete: (id: number) => void;
};

function CourseGoal({ title, description, id, onDelete }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;
