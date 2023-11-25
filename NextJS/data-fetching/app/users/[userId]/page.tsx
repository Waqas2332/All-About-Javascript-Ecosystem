import UserPosts from "@/components/UserPosts";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import type { Metadata } from "next";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetaData({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function User({ params: { userId } }: Params) {
  //   Fetching Data in Parallel
  const userData: Promise<User> = getUser(userId);

  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
