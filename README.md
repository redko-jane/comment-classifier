Comment Classifier

Fullstack-приложение для классификации комментариев по тональности.
Пользователь отправляет текст, получает вердикт — положительный или
отрицательный, а история запросов сохраняется в личном кабинете.

О проекте

Сервис принимает текстовые комментарии и определяет их тональность.
Каждый пользователь работает в своём аккаунте: видит только свои
запросы и результаты классификации.

Приложение разрабатывается по лабораторным работам курса. На текущем
этапе реализованы интерфейс приложения и серверная часть с базой данных:
FastAPI-приложение предоставляет REST API для работы с пользователями
и комментариями, данные хранятся в PostgreSQL.

Возможности

- Регистрация, вход и выход из аккаунта
- Классификация комментария с сохранением результата
- История запросов с фильтром по тональности
- Просмотр деталей записи и удаление
- Профиль пользователя

Разделы классификатора, истории и профиля доступны только после входа.

Экраны

Публичные: главная (/), вход (/login), регистрация (/register), 404.

Только для авторизованных: классификатор (/classify), история (/history),
детали записи (/history/:id), профиль (/profile).

Скриншоты

Все экраны в каталоге docs/screenshots:

- 01-home.png — главная
- 02-login.png — вход
- 03-register.png — регистрация
- 04-classify.png — классификатор
- 05-history.png — история
- 06-record-detail.png — детали записи
- 07-profile.png — профиль
- 08-not-found.png — 404

Стек

Frontend: React, TypeScript, Vite, MUI, React Router.

Backend: Python, FastAPI, PostgreSQL, SQLAlchemy, Pydantic.

Модель данных

### User (таблица users)

| Поле | Тип | Ограничения |
|---|---|---|
| id | integer | PK, autoincrement |
| email | varchar | unique, not null |
| username | varchar | unique, not null |
| hashed_password | varchar | not null |

Связь: один пользователь → много комментариев (one-to-many).

### Comment (таблица comments)

| Поле | Тип | Ограничения |
|---|---|---|
| id | integer | PK, autoincrement |
| text | varchar | not null |
| sentiment | varchar | not null — "positive" / "negative" |
| created_at | timestamptz | server_default = now() |
| owner_id | integer | FK → users.id, ON DELETE CASCADE |

Связь: много комментариев → один пользователь.

Структура репозитория

    comment-classifier/
    ├── frontend/                клиентское приложение
    │   └── src/
    │       ├── app/             корневые компоненты, роутер, тема
    │       ├── components/      общие компоненты (Layout, PageCard)
    │       ├── pages/           страницы приложения
    │       ├── shared/          конфиг, типы, утилиты, мок-данные
    │       └── assets/          статические ресурсы
    ├── backend/                 серверная часть
    │   ├── app/
    │   │   ├── main.py          точка входа FastAPI
    │   │   ├── core/            конфигурация приложения
    │   │   ├── db/              подключение и сессии БД
    │   │   ├── models/          модели SQLAlchemy
    │   │   ├── schemas/         Pydantic-схемы валидации
    │   │   ├── crud/            операции с данными
    │   │   └── api/             маршруты API
    │   ├── requirements.txt     зависимости backend
    │   └── .env.example         пример настроек окружения
    ├── docs/
    │   └── screenshots/         скриншоты экранов
    ├── .gitignore
    └── README.md

Запуск

### Frontend

Требуется Node.js 18 или выше.

    cd frontend
    npm install
    npm run dev

Приложение откроется на http://localhost:5173.

### Backend

Требуется Python 3.10+ и PostgreSQL.

1. Установить PostgreSQL и создать базу данных:

       CREATE DATABASE comment_classifier;

2. Перейти в каталог backend:

       cd backend

3. Создать виртуальное окружение и установить зависимости:

       python -m venv .venv
       .venv\Scripts\activate        # Windows
       source .venv/bin/activate     # Linux/macOS
       pip install -r requirements.txt

4. Скопировать пример настроек и указать свои параметры подключения:

       cp .env.example .env          # Linux/macOS
       copy .env.example .env        # Windows

   В файле .env указать реальный пароль пользователя postgres:

       DATABASE_URL=postgresql+psycopg2://postgres:ПАРОЛЬ@localhost:5432/comment_classifier

5. Запустить сервер:

       python -m uvicorn app.main:app --reload

6. Открыть Swagger UI: http://127.0.0.1:8000/docs