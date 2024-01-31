import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
export default function getPostMetaData() {
  const folder = "app/posts/";
  const files = fs.readdirSync(folder);
  const markDownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markDownPosts.map((file) => {
    const fileContents = fs.readFileSync(`app/posts/${file}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: file.replace(".md", ""),
    };
  });
  return slugs;
}
