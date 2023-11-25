import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
export default function PostExercpt({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamps={post.date} />
      </p>
    </article>
  );
}
