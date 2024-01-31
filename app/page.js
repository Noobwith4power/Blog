import Image from "next/image";
import getPostMetaData from "./components/postMetaData.js";
import PostReview from "./components/PostReview.jsx";

export default function Home() {
  const posts = getPostMetaData();
  const postPreviews = posts.map((post) => (
    <PostReview key={post.slug} {...post}></PostReview>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
}
