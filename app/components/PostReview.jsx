import Link from "next/link";
export default function PostReview(props) {
  return (
    <div className="border border-slate-200 p-4 rounded-md shadow-md bg-white hover:border-violet-600 transition-0.6s">
      <Link href={`/post/${props.slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-400">{props.date}</p>
      <p className="text-slate-700">{props.subtitle}</p>
    
    </div>
  );
}
