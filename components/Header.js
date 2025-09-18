import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-transparent py-6">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-2xl text-white">VYRO</a>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/services"><a className="hover:underline">Решения</a></Link>
          <Link href="/cases"><a className="hover:underline">Кейсы</a></Link>
          <Link href="/blog"><a className="hover:underline">Блог</a></Link>
          <Link href="/contact"><a className="bg-white text-slate-900 px-4 py-2 rounded">Связаться</a></Link>
        </nav>

        <div className="md:hidden">
          <Link href="/contact"><a className="bg-white text-slate-900 px-3 py-1 rounded">Контакт</a></Link>
        </div>
      </div>
    </header>
  );
}
