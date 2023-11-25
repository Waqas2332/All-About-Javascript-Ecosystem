import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";

type Params = {
  params: {
    userId: string;
  };
};

export default async function User({ params: { userId } }: Params) {
  //   Fetching Data in Parallel
  const userData: Promise<User> = getUser(userId);

  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const [user, userPosts] = await Promise.all([userData, userPostsData]);
  return (
    <>
      <h2>{user.name}</h2>
      <br />
    </>
  );
}
