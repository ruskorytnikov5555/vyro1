import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import CaseCard from "../components/CaseCard";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "ИИ-агенты для отделов продаж",
      desc: "Автоматизация лидогенерации, первичной квалификации и назначения встреч.",
      bullets: ["Интеграция с CRM", "Автоматическая квалификация лидов", "Передача в работу менеджеру"]
    },
    {
      title: "AI-колл-центр",
      desc: "Голосовые и гибридные решения для обработки входящих и исходящих звонков.",
      bullets: ["ASR + NLU", "Запись разговоров и аналитика", "Выгрузка метрик"]
    },
    {
      title: "Телеграм-менеджер / ИИ-боты",
      desc: "Автоматизация общения в Telegram: публикации, ответы, модерация, менеджмент сообществ.",
      bullets: ["Автоответы и сценарии", "Управление контентом", "Аналитика вовлеченности"]
    },
    {
      title: "Системы обработки документов и данных",
      desc: "Распознавание, классификация и маршрутизация документов с интеграцией в ERP/CRM.",
      bullets: ["OCR / Document AI", "Схемы маршрутизации", "Безопасное хранение данных"]
    }
  ];

  const cases = [
    { title: "Колл-центр + ИИ", summary: "Для ритейл-сети: автоматизация входящих звонков и сокращение AHT.", metrics: [{label:"AHT", value:"−38%"}, {label:"Собственных операторов", value:"−30%"}]},
    { title: "Телеграм-агент", summary: "Автоматизация обработки сообщений и подбор контента для подписчиков.", metrics: [{label:"Ответ в 1 мин", value:"+42%"}, {label:"Удержание", value:"+18%"}]}
  ];

  const structuredFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Что такое ИИ-агент от VYRO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ИИ-агент — программный модуль, который выполняет рутинные задачи (диалог, определение намерения, маршрутизация) и интегрируется с системами клиента."
        }
      },
      {
        "@type": "Question",
        "name": "Как быстро можно внедрить решение?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Минимальный пилот — 2–4 недели; полный запуск — 6–12 недель в зависимости от интеграций."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>VYRO — ИИ-агенты и автоматизация для бизнеса</title>
        <meta name="description" content="VYRO — агентство по созданию ИИ-агентов, автоматизации отделов продаж, техподдержки и документооборота. GEO (Generative Engine Optimization) готово." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredFAQ) }} />
      </Head>

      <Header />

      <main className="container py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">VYRO — ИИ-агенты и автоматизация бизнес-процессов</h1>
            <p className="text-slate-300 mb-6">Мы проектируем и внедряем ИИ-решения, которые берут на себя рутинную работу: продажи, поддержка, колл-центры, обработка данных и телеграм-менеджмент.</p>
            <div className="flex gap-4">
              <Link href="/contact"><a className="bg-white text-slate-900 px-5 py-3 rounded font-semibold">Обсудить задачу</a></Link>
              <Link href="/cases"><a className="border border-slate-700 px-4 py-3 rounded">Посмотреть кейсы</a></Link>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              <div>Короткое summary для GEO: «VYRO — агентство, создающее ИИ-агентов для бизнеса. Решения интегрируются с CRM/телефонией, экономят время и увеличивают KPI».</div>
            </div>
          </div>

          <div>
            <div className="grid gap-4">
              {services.map((s, i) => <ServiceCard key={i} {...s} />)}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Результаты — наши кейсы</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {cases.map((c, i) => <CaseCard key={i} {...c} />)}
          </div>
        </section>

        <section className="mt-10 bg-slate-900/30 p-6 rounded">
          <h3 className="font-semibold">Предзаказ пилота</h3>
          <p className="text-slate-300 mt-2">Закажи пилотный проект и проверь решение на реальных данных.</p>
          <form action="/api/lead" method="post" className="mt-4 grid gap-3 md:grid-cols-2">
            <input name="name" placeholder="Имя" className="p-3 rounded bg-slate-800 border border-slate-700" />
            <input name="email" placeholder="Email" className="p-3 rounded bg-slate-800 border border-slate-700" />
            <input name="company" placeholder="Компания" className="p-3 rounded col-span-2 bg-slate-800 border border-slate-700" />
            <textarea name="descr" placeholder="Коротко о задаче" className="p-3 rounded col-span-2 bg-slate-800 border border-slate-700" rows="4"></textarea>
            <button className="bg-white text-slate-900 px-4 py-2 rounded col-span-2">Отправить</button>
          </form>
        </section>

      </main>

      <Footer />
    </>
  );
}
