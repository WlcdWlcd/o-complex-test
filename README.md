# тестовое задание o-complex
---

### установка и запуск
- npm i  - загрузка зависимостей
- npm run build - создание билда
- npm start - запуск билда

### Реализовано
- визуал почти как по фигме, т.к использовал tailwind
- адаптирован под мобильные устройства и планшеты, кроме корзины
- товары заполняются через апи, первая страница заружаются сразу, остальные с помощью ajax и InfinityScroll
- нажатие на кнопку купить приводит к изменению кнопки на кнопки +,- и кол-во товара
- реализована маска в поле телефона
- реализована защита от xss атак  в отзывах с помощью DOMpurify
