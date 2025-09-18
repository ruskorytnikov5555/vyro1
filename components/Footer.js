export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-12 py-8">
      <div className="container text-sm text-slate-400">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <div className="font-bold text-white">VYRO</div>
            <div>ИИ-агенты и автоматизация бизнес-процессов</div>
          </div>
          <div>
            <div>© {new Date().getFullYear()} VYRO. Все права защищены.</div>
            <div>Политика конфиденциальности</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
