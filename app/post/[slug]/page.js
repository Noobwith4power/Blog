import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/app/components/postMetaData";
const getPostContent = (slug) => {
  const folder = "app/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
export async function generateStaticParams() {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params: { slug } }) {
  const slugs = slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h1 className="text-2xl text-violet-600">{post.data.title}</h1>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
