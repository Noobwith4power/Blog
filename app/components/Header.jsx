import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md '>
        <Image src='/logo.png' width={40} height={40} className="mx-auto"></Image>
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">Dev Blog</h1>
        </Link>
      </div>
    </header>
  );
}
