import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "ИИ-агенты для бизнеса",
      desc: "Полный цикл: проектирование диалогов, NLU/LLM, интеграция и MLOps сопровождение.",
      bullets: ["Сценарии и intents", "Интеграция с CRM / API", "Мониторинг и дообучение"]
    },
    {
      title: "AI-колл-центр",
      desc: "Голосовые боты и гибридные сценарии с передачей сложных случаев оператору.",
      bullets: ["IVR + ASR", "Тонкая маршрутизация", "Контроль качества"]
    },
    {
      title: "Автоматизация процессов",
      desc: "RPA + LLM решения для обработки документов и бизнес-правил.",
      bullets: ["OCR и обработка форм", "Интеграция с ERP", "Триггерные сценарии"]
    }
  ];

  const productStructured = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ИИ-агенты и автоматизация — VYRO",
    "description": "Разработка и внедрение ИИ-агентов, колл-центров, телеграм-менеджеров и систем обработки данных.",
    "provider": {
      "@type": "Organization",
      "name": "VYRO"
    }
  };

  return (
    <>
      <Head>
        <title>Решения — VYRO</title>
        <meta name="description" content="Услуги VYRO: ИИ-агенты, AI-колл-центр, телеграм-менеджер, системы обработки документов." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructured) }} />
      </Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold mb-6">Наши решения</h1>
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>

        <section className="mt-10 bg-slate-900/30 p-6 rounded">
          <h3 className="font-semibold">Подход (GEO-ready)</h3>
          <p className="text-slate-300 mt-2">Мы пишем объяснения и summary-блоки для каждой функции, чтобы LLM/ассистенты могли корректно цитировать и рекомендовать наши решения.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
