const React = require('react');

module.exports = () => {
  return <div class="container mt-5">
    <h1>
      Эта страница была создана на сервере<br />
      С помощью React
    </h1>
    <p class="mt-3">
      Краткое описание технологии:<br />
      Теперь html страница компилируется на сервере<br />
      На клиенте она оживает с помощью JS кода, который идёт уже после html
    </p>
    <div class="row mt-5">
      <div class="w-50 bg-success">
        Плюсы:<br />
        <ul>
          <li>
            Более быстрая загрузка сайта на слабых мобильных устройствах
          </li>
          <li>
            Полезен для SEO
          </li>
        </ul>
      </div>
      <div class="w-50 bg-danger">
        Минусы:<br />
        <ul>
          <li>
            Присутствие frontend кода на backend стороне
          </li>
          <li>
            Дополнительная нагрузка на сервера
          </li>
        </ul>
      </div>
      <a target="_blank" href="https://techstacker.com/server-side-rendering-ssr-pros-and-cons/">
        Обзор SSR
      </a>
    </div>
  </div>;
} 