import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CaseCard from "../components/CaseCard";

export default function Cases() {
  const cases = [
    { title: "Retail — AI Call", summary: "Гибридный голосовой бот обработал 60% входящих звонков.", metrics: [{label:"Обработано звонков", value:"+60k"}] },
    { title: "B2B — Telegram Manager", summary: "Автоматизация диалогов в канале и увеличение конверсии.", metrics: [{label:"Конверсия", value:"+26%"}] }
  ];

  return (
    <>
      <Head>
        <title>Кейсы — VYRO</title>
      </Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold mb-6">Кейсы внедрения</h1>
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => <CaseCard key={i} {...c} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
