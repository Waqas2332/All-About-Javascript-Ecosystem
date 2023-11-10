import { useQuery, useMutation, useQueryClient } from "react-query";

const POSTS = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" },
];

function App() {
  const client = useQueryClient();
  // Queries
  const postQuery = useQuery({
    // Unique identifer for your query, always takes an array
    queryKey: ["posts"],
    // Always Accepts a promise because it is async function
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  // Mutations
  const newPostMutation = useMutation({
    // mutationFn takes just only one and one parameter. All the data should be inside of that parameter. In this case, it is just a single value ==> title
    mutationFn: (title) => {
      return wait(1000).then(() => {
        POSTS.push({
          id: Math.random(),
          title,
        });
      });
    },
    // Invalidation the query to run that again (more info at README.md)
    onSuccess: () => {
      client.invalidateQueries(["posts"]);
    },
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
      {/* Calling that mutation function with desired parameter */}
      <button onClick={() => newPostMutation.mutate("New Post")}>
        Add New
      </button>
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
