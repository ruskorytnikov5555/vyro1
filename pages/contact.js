import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Контакты — VYRO</title>
      </Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold mb-6">Контакты</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-slate-300">Напиши нам — обсудим задачу и предложим пилот.</p>
            <ul className="mt-4 text-slate-300 space-y-2">
              <li>Email: <strong>hello@vyro.ai</strong></li>
              <li>Telegram: <strong>@vyro_ai</strong></li>
              <li>Форма заявки: ниже</li>
            </ul>
          </div>

          <div>
            <form action="/api/lead" method="post" className="grid gap-3">
              <input name="name" placeholder="Имя" className="p-3 rounded bg-slate-800 border border-slate-700" />
              <input name="email" placeholder="Email" className="p-3 rounded bg-slate-800 border border-slate-700" />
              <select name="task" className="p-3 rounded bg-slate-800 border border-slate-700">
                <option>Пилот ИИ-агента</option>
                <option>AI-колл-центр</option>
                <option>Телеграм-менеджер</option>
              </select>
              <textarea name="descr" placeholder="Описание задачи" rows="5" className="p-3 rounded bg-slate-800 border border-slate-700"></textarea>
              <button className="bg-white text-slate-900 px-4 py-2 rounded">Отправить</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
