# Shop

## Описание

Это пример проекта на Next.js с использованием TypeScript и Redux Toolkit. Проект демонстрирует возможности статической генерации (SSG) и инкрементальной статической перестройки (ISR).

## Установка и запуск

Следуйте этим шагам для установки и запуска проекта:

1. Клонируйте репозиторий:

```bash
git clone https://github.com/vitalyvitmens/shop.git
cd my-next-app

1.
Установите зависимости:

npm install

1.
Запустите проект в режиме разработки:

npm run dev

1.
Откройте браузер и перейдите по адресу http://localhost:3000, чтобы увидеть приложение.

Структура проекта
•  pages/index.tsx: Главная страница, отображающая список продуктов.

•  pages/products/[id].tsx: Страница продукта, отображающая детали продукта.

•  pages/cart.tsx: Страница корзины, отображающая товары в корзине.

•  redux/store.ts: Конфигурация Redux Store.

•  redux/slices/productsSlice.ts: Срез Redux для управления состоянием продуктов.

•  redux/slices/cartSlice.ts: Срез Redux для управления состоянием корзины.

Использование
•  Главная страница отображает список продуктов.

•  Каждая страница продукта генерируется статически и обновляется инкрементально при изменении данных.

•  Страница корзины позволяет добавлять и удалять товары из корзины.

Примечания
•  Для демонстрации используется локальный массив продуктов. Вы можете заменить его на данные из API или другой источник данных.

•  В файле getStaticProps и getStaticPaths установлено время пересборки в 10 секунд (revalidate: 10).
```
