import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <Link to="/" className="layout__logo">
          Comment Classifier
        </Link>
        <nav className="layout__nav">
          <Link to="/classify">Классификатор</Link>
          <Link to="/history">История</Link>
          <Link to="/profile">Профиль</Link>
          <Link to="/login">Вход</Link>
          <Link to="/register">Регистрация</Link>
        </nav>
      </header>

      <main className="layout__content">
        <Outlet />
      </main>

      <footer className="layout__footer">
        Учебный проект, Fullstack, 1 семестр
      </footer>
    </div>
  );
}

export default Layout;
