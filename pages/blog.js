import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Blog() {
  const posts = [
    { slug: "how-to-pilot-ai-agent", title: "Как запустить пилот ИИ-агента за 4 недели", excerpt: "Пошаговый план от подготовки данных до первого релиза." },
    { slug: "generative-engine-optimization", title: "Generative Engine Optimization: что это и как работать", excerpt: "Кратко о формате GEO и правилах подготовки контента." }
  ];

  return (
    <>
      <Head>
        <title>Блог — VYRO</title>
      </Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold mb-6">Блог</h1>
        <div className="grid gap-4">
          {posts.map((p) => (
            <article key={p.slug} className="bg-slate-900/30 p-4 rounded">
              <Link href={`/blog/${p.slug}`}><a className="text-xl font-semibold">{p.title}</a></Link>
              <p className="text-slate-300 mt-2">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
