import { useQuery, useMutation } from "react-query";

const POSTS = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" },
];

function App() {
  const postQuery = useQuery({
    // Unique identifer for your query, always takes an array
    queryKey: ["posts"],
    // Always Accepts a promise because it is async function
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  if (postQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }

  return (
    <div>
      {postQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
