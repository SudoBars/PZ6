# Проект: Динамічна зміна кольорів квадратів за допомогою Node.js

## Опис проекту

Цей проект реалізує клієнт-серверну взаємодію, де кольори квадратів змінюються місцями при натисканні кнопки "Старт". Уся структура генерується за допомогою JavaScript, а сервер на Node.js відповідає за зміну стану кольорів.

---

## Структура проекту

Проект складається з двох файлів:

```text
project_folder/
├── server.js   // Сервер на Node.js
├── script.js   // Клієнтська логіка
```

---

## Як запустити проект

### Крок 1: Підготовка файлів

1. Створіть вказану структуру проекту.
2. Скопіюйте код у файли `server.js` і `script.js`.

### Крок 2: Запуск сервера

1. Переконайтеся, що у вас встановлено Node.js.
2. У терміналі перейдіть до папки проекту та запустіть сервер командою:

   ```bash
   node server.js
   ```

3. Сервер буде доступний за адресою:

   ```url
   http://localhost:3000
   ```

### Крок 3: Відкриття сторінки

1. У браузері перейдіть за адресою:

   ```url
   http://localhost:3000
   ```

2. Натискайте кнопку "Старт", щоб побачити зміну кольорів квадратів.

---

## Як це працює

### Сервер (`server.js`)

- Генерує HTML-сторінку, яка підключає клієнтський `script.js`.
- Обробляє запити за маршрутом `/swap-colors`, змінюючи кольори квадратів місцями.
- Повертає нові значення кольорів квадратів клієнту у форматі JSON.

### Клієнт (`script.js`)

- Генерує структуру HTML і CSS динамічно.
- Відправляє запит до сервера на маршрут `/swap-colors`.
- Оновлює кольори квадратів відповідно до відповіді сервера.

---

## Приклад використання

1. Запустіть сервер.
2. Відкрийте сторінку у браузері.
3. Натискайте кнопку "Старт" — кольори квадратів змінюватимуться місцями кожного разу.
